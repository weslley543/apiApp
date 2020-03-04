const express = require('express');
const userRoutes = require('./routes/userRoutes');
const ocurranceRoutes = require('./routes/occurrenceRoutes');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');




const app = express();
mongoose.connect('mongodb+srv://weslley:weslley1234@cluster0-tcv4s.mongodb.net/Cirsop?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
});
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(ocurranceRoutes);


app.use('/files',express.static(path.resolve(__dirname,"..","uploads")));
const port = process.env.PORT || 3333;

app.listen(port, function(){
    console.log("Servidor ON na porta", port);
});