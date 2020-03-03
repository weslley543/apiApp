const Ocurrance = require('../models/Ocurrance');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

module.exports = {
    async register(req, res) {
        try {
            const { filename } = req.file;
            const { user } = req.headers;
            const ocurrance = await Ocurrance.create({ ...req.body, img: filename, user });
            const { filename: image } = req.file
            await sharp(req.file.path)
                .resize(400,400)
                .jpeg({ quality: 50 })
                .toFile(
                    path.resolve(req.file.destination, 'resized', image)
                )
            fs.unlinkSync(req.file.path)
            res.status(200).json(ocurrance);
        } catch (err) {
            res.status(401).json({ msg: err });
        }
    },
    async index(req, res) {
        try {
            const { user } = req.headers
            console.log(req.headers);
            const ocurrances = await Ocurrance.find({ user }).populate('user');
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