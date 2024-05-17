const mongoose = require("mongoose");

mongoose.set('strictQuery', true); // Set this based on the deprecation warning

const connectDB = () => {
    const mongoURI = "mongodb://127.0.0.1:27017/Virtual_Learning";

    console.log(`Connecting to MongoDB with URI: ${mongoURI}`);

    mongoose
        .connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => {
            console.error("MongoDB connection error:", err.message);
            console.error("Full error details:", err);
            process.exit(1);
        });
};

module.exports = connectDB;
