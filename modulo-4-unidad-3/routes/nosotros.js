var express = require('express');
var router = express.Router();
//'/' es el /nosotros... no es el home
router.get('/',function(req,res){
    res.send('Esta es la pagina de nosotros');
});

module.exports = router;