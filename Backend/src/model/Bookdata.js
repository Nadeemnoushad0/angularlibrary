const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.kialy.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const schema = mongoose.Schema;

const BookSchema = new schema({
    title: String,
    author: String,
    genre: String,
    image: String,
    des: String
});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;