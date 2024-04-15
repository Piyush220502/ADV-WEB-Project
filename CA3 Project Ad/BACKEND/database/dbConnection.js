import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Restaurant2"
    }).then(() => {
        console.log("Connected to database successfully!");
    }).catch(err => {
        console.log(`Some error occur while connecting to database! ${err}`);
    });
};