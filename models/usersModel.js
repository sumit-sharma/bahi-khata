var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModelSchema = new Schema({
    name: {
        type: String,
        trim: true

    },
    mobile: {
        type: String,
        trim: true,
        unique: true,
        required: 'Enter Mobile Number'
    },
    email: {
        type: String,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});

module.exports = mongoose.model('userModel', userModelSchema);