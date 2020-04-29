const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
module.exports = {
    async sendNumberProtocol(req, res) {
        const { authorization } = req.headers;
        const { protocol } = req.body;
        const parts = authorization.split(" ");
        const decoded = jwt.decode(parts[1]);
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
                to: decoded.user.email,
                subject: 'Protocolo dos serviços',
                html: `O seu protocolo dos serviços é ${protocol}, utilize-o para acompanhar a solução da ocorrência relatada.`
            });
            res.status(200).json({ ok: true });
        } catch (err) {
            res.status(403).json(err)
        }
    }
}