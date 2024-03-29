const express = require('express');
const userRoutes = require('./routes/userRoutes');
const ocurranceRoutes = require('./routes/occurrenceRoutes');
const truckRoutes = require('./routes/trucksRoutes');
const cityRoutes = require('./routes/cityRoutes');
const emailRoutes = require('./routes/emailRoutes');
const trashTimeInRoutes = require('./routes/trashTimeInRoutes');
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
app.use(emailRoutes); 
app.use(truckRoutes);
app.use(cityRoutes);
app.use(trashTimeInRoutes);



app.use('/files',express.static(path.resolve(__dirname,"..","uploads")));
process.env.TZ='America/Sao_Paulo'
const port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log("Servidor ON na porta", port);
});