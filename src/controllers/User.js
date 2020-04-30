const User = require('../models/User.js');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const authConfig = require('../config/auth');
module.exports = {
    async login(req, res) {
        const { email, password } = req.body;
        let hash = crypto.createHash("SHA512").update(password).digest("hex");
        try {
            let user = await User.findOne({ email }).select('+password');
            if (!user) {
                res.status(400).json({ msg: 'Usuario não cadastrado ' });
            }

            if (hash != user.password) {
                res.status(400).json({ msg: 'Senha incorreta !!' });
            }
            user.password = undefined;

            const token = jwt.sign({ user }, authConfig.secret, { expiresIn: 3600 })
            const id = user._id
            res.status(200).send({ token, id });
        }
        catch (err) {
            res.status(401).json({ msg: err });
        }

    },
    async store(req, res) {
        const { email, password, name } = req.body
        let hash = crypto.createHash("SHA512").update(password).digest("hex");

        try {

            let user = await User.findOne({ email });


            if (!user) {
                user = await User.create({ name, email, password: hash });
            }
            user.password = undefined;
            const token = jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: 86400 })

            res.json({ user, token });
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async recoveryPassword(req, res) {
        const { email } = req.body;
        console.log(email)
        try {
            const user = await User.findOne({ email });

            if (!user) {
                res.status(404).json({ msg: 'Usuário não encontrado' })
            }

            const recoveryToken = crypto.randomBytes(3).toString('hex');
            const expiresIn = new Date();
            expiresIn.setHours(expiresIn.getHours() + 0.5);
            await User.findOneAndUpdate({ email }, { recoveryToken, expiresIn });

            let transporter = await nodemailer.createTransport(
                {
                    host: 'smtp.googlemail.com', // Gmail Host
                    port: 465, // Port
                    secure: true, // this is true as port is 465
                    auth: {
                        user: 'weslley082@gmail.com', //Gmail username
                        pass: 'weslley1234' // Gmail password
                    }
                }
            );

            try {
                await transporter.sendMail({
                    from: 'weslley082@gmail.com',
                    to: email,
                    subject: 'Recuperação de senha',
                    html: `Você perdeu a sua senha ?? Não tem problema, utilze esse token ${recoveryToken} para resetar a sua senha !!`
                });
                res.status(200).json({ ok: true });
            } catch (e) {
                res.status(400).json({ ok: false });
            }


        } catch (err) {
            res.status(400).json({ err });
        }

    },

    async resetPassword(req, res) {
        const { recoveryToken, password, email } = req.body;
        try {
            const user = await User.findOne({ email });

            if (user.recoveryToken != recoveryToken || user.expiresIn > Date.now()) {
                res.status(400).json({ msg: 'Token expirado ou incorreto' });
            }

            let hash = crypto.createHash("SHA512").update(password).digest("hex");
            await User.findOneAndUpdate({ email }, { password: hash, recoveryToken: "" })
            res.status(200).json({ ok: true });

        } catch (err) {
            res.status(400).json({ msg: 'Ocorreu um erro na requisição' })
        }
    }
}