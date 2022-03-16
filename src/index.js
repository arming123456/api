const express  = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port', process.env.PORT || 3000);  // ACA VALIDAMOS SI LA APP VIENE CON PUERTO DEFINIDO O CASO CONTRARIO QUE TOME EL PUERTO 3000
app.set('json spaces', 2);
 
// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); ///esto para datos que vienen desde input archivos desde afuera
app.use(express.json());  ///esto nos permire usar formatos json


// router
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));

// starting the server
app. listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
})