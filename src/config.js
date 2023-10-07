import { config } from 'dotenv';
import { MongoClient } from 'mongodb'

config();
const uri = process.env.DB_URI;

export async function connectDB() {
    try {
        var client = new MongoClient(uri);
        await client.connect();
        console.log('Connected to MongoDB');
        return client
    } catch (error) {
        console.log('Failed to connect to MongoDB', error);
        throw error;
    }
};
