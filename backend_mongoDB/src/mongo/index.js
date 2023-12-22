const mongoose = require('mongoose');

//DB
function mongo() {
    mongoose.connect(
        'mongodb+srv://kiyak66445:0vo4sAjLeKC2u9fI@cluster0.xyr4aum.mongodb.net/?retryWrites=true&w=majority',
        {},
    )
        .then(() => console.log('DB connected!'));
}

module.exports = mongo;