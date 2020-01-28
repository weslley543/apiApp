const express = require('express');
const userRoutes = require('./routes/userRoutes');
const ocurranceRoutes = require('./routes/occurrenceRoutes');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();
mongoose.connect('mongodb+srv://weslley:weslley1234@cluster0-tcv4s.mongodb.net/Cirsop?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
});

app.use(express.json());
app.use(userRoutes);
app.use(ocurranceRoutes);

app.use(cors());

console.log('Server on na porta 3333');

app.listen(3333);