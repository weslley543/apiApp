const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');
const Ocurrence = require('../controllers/Ocurrance')
const authmiddlaware = require('../middlewares/auth');
const ocurrenceRoutes = express.Router();




const upload = multer(uploadConfig);


ocurrenceRoutes.get('/ocurrance/:id',authmiddlaware ,(req, res) => {
    Ocurrence.getOne(req, res);
});

ocurrenceRoutes.post('/ocurrance', upload.single('img'),authmiddlaware, (req, res) => {
    Ocurrence.register(req, res);
});

ocurrenceRoutes.get('/ocurrance',authmiddlaware, (req, res) => {
    Ocurrence.index(req, res);
});

ocurrenceRoutes.delete('/ocurrance/:id',authmiddlaware, (req, res) => {
    Ocurrence.deleteOne(req, res);
});
module.exports = ocurrenceRoutes;