import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.f2rps0c.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("DB connected successfully");
    } catch (error) {
        console.log('Error while connecting with the DataBase',error);
    }
}

export default Connection;