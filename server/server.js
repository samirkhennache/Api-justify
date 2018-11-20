const express = require('express');
const app = express();
const models = require('../models')
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

require('./routes')(app);

models.sequelize.sync().then(()=>{
    app.listen(process.env.PORT || port, () => console.log(`LISTENING ON PORT ${port}`));
})

module.exports = app;