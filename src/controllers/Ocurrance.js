const Ocurrance = require('../models/Ocurrance');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
module.exports = {
    async register(req, res) {
        try {
            const { filename } = req.file;
            const { user } = req.headers;
            
          
            const encrypted = crypto.createHash("SHA512").randomBytes(3).toString('hex');
            res.send(encrypted);
            // const ocurrance = await Ocurrance.create({ ...req.body, img: filename, user });
            // const { email, protocol } = req.body
            // let transporter = await nodemailer.createTransport(
            //     {
            //         host: 'smtp.googlemail.com', // Gmail Host
            //         port: 465, // Port
            //         secure: true, // this is true as port is 465
            //         auth: {
            //             user: 'weslley082@gmail.com', //Gmail username
            //             pass: 'weslley1234' // Gmail password
            //         }
            //     }
            // );

            // try {
            //     await transporter.sendMail({
            //         from: 'weslley082@gmail.com',
            //         to: email,
            //         subject: 'Protocolo de registro do serviço',
            //         html: `<b>O seu protocolo dos serviços é ${protocol}</b>`
            //     });
            //     res.status(200).send({ ok: true });
            // } catch (err) {
            //     res.status(401).send(err)
            // }



            res.status(200).json(ocurrance);

        } catch (err) {
            res.status(401).json({ msg: err })
        }
    },
    async index(req, res) {
        try {
            const { user } = req.headers
            const ocurrances = await Ocurrance.find().populate('user', user);
            res.json(ocurrances);
        } catch (ocurrance) {
            res.json({ msg: 'Erro ao receber as ocorrencias' });
        }
    },
    async getOne(req, res) {
        try {
            const ocurance = await Ocurrance.findById(req.params.id).populate('user');
            res.json(ocurance);
        } catch (err) {
            res.json({ msg: 'erro ao buscar uma ocorrencia' });
        }
    },
    async deleteOne(req, res) {
        try {
            await Ocurrance.findByIdAndDelete(req.params.id);
            res.send({ msg: 'Removido' })
        } catch (err) {
            res.json({ msg: 'Error to delete' });
        }
    }
};