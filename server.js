// add express
const express = require( 'express' );

// env port || local port
const PORT = process.env.PORT || 3001;

// init express app
const app = express();

// use statements
app.use(express.urlencoded( { extended: true}));
app.use( express.json());
app.use( express.static( 'public'));

// routes for api
const apiRoutes = require('./routes/apiRoutes');

// routes for html
const htmlRoutes = require('./routes/htmlRoutes');

app.use('./api/notes/', apiRoutes);
app.use('/', htmlRoutes);

// app listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
})



