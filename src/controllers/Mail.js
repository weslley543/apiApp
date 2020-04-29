const nodemailer = require('nodemailer');

module.exports = {
    async sendEmail(req, res) {
        const { email, protocol } = req.body
        let transporter =  await nodemailer.createTransport(
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
                subject: 'Protocolo de registro do serviço',
                html: `<b>O seu protocolo dos serviços é ${protocol}</b>`
            });
            res.status(200).send({ ok: true });
        } catch (err) {
            res.status(401).send(err)
        }
    }

}