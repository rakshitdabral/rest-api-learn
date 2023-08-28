const mongoose = require('mongoose');

//

mongoose.connect('mongodb+srv://vincetq:1pieceritZ@cluster0.0mw8vor.mongodb.net/delivery').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {console.log(err)})
