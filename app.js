const express = require('express');
const app = express();

// Set the engine for EJS
app.set('view engine', 'ejs');
app.set('views', './src/views');

//Import routes
const indexRoutes = require('./src/routes/index');


//Middleware
app.use(express.json());

//Use routes
app.use('/', indexRoutes);

//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
