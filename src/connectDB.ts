import { Schema, model, connect } from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await connect(String(process.env.MONGO_URI));

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error:any) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

