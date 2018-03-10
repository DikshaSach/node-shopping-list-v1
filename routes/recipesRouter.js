const express=require('express');
const router = express.Router();
const {Recipes} = require('../models');

//return all recipes by calling Recipes.get()
router.get('/findall', (req, res) => {
    res.json(Recipes.get());
});

module.exports=router;