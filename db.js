const mongoose = require('mongoose');
const db = process.env.MONGODB_URL || "mongodb://127.0.0.1/sai-fuels";

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, "mongodb connection error "));

module.exports = mongoose
;