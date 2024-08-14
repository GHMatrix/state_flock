const express = require('express');
const app = express();


//Middleware
app.use(express.json());

//Basic route
app.get('/', (req, res) => {
    res.send('Welcome to LHI AFIENYA CITY, STATE OF THE FLOCK');
});

//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
