const mongoose = require('mongoose');
const db = process.env.MONGODB_URL || "mongodb://127.0.0.1/library";

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useUnifiedTopology: true, useMongoClient: true });
        console.log("Mongo DB is connected");
    } catch (err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;