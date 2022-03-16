const { Router } = require('express');
const router = Router();



router.get('/test', (req , res) => {
    const data = {
        "name" : "Arming Quispe",
        "website" : "arming&System"
    }
    res.json(data);
})

// exportamos la ruta
module.exports = router;
