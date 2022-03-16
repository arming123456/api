const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');
console.log(movies);

//obtener
router.get('/', (req, res) => {
    res.json(movies); 
});

// enviar
router.post('/', (req, res) => {
   const { title, director, año, reating} = req.body;
   if(title && director && año && reating){
        const id = movies.length + 1 ;
       const newMovie = {...req.body, id};   ///esto pasa todo el objeto a request
       movies.push(newMovie);
       res.json(movies);
   } else {
    res.status(500).json({error: 'Falla'});
   }
});

//eliminar
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i,1);
        }
    }); 
    res.send(movies); 
});

//actualizar
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, año, reating} = req.body;
    if(title && director && año && reating){
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.año = año;
                movie.reating = reating; 
            }
        });
        res.json(movies); 
    } else {
        res.status(500).json({error: 'Error al Cargar los datos'});
    }
   
});



module.exports = router;