
import mongoose from 'mongoose';

let isConnected = false; 

export const ConnectDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('DB already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MYDB, {
            dbName: "Discover_Prompts",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        isConnected = true; 
        console.log('MongoDB connected');

    } catch (error) {
        console.error('MongoDB connection error:', error);
        return; 
    }
};

