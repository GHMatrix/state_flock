const express = require('express');
const app = express();

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
