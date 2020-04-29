const Ocurrance = require('../models/Ocurrance');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports = {
    async register(req, res) {
        try {
            const { filename } = req.file;
            const { authorization } = req.headers;
            const parts = authorization.split(' ');
            const decoded = jwt.decode(parts[1]);
            const protocol = crypto.randomBytes(3).toString('hex');

            const ocurrance = await Ocurrance.create({
                ...req.body,
                img: filename, protocol, user: decoded.user._id
            });

            res.status(200).json(ocurrance);

        } catch (err) {
            res.status(403).json({ msg: err })
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