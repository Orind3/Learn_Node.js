const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const { send } = require('process');
const app = express();
const route = require('./routes');
const port = 3000;
// app.use(morgan('combined'));

    app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
