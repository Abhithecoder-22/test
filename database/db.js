import mongoose from 'mongoose';

export const Connection =async()=>{
    try {
        await mongoose.connect("mongodb://122.176.44.94:27017/admin");
        console.log("Database connected");
    } catch (error) {
        console.log(`error when conn to `,error.message);
    }
}
export default Connection;


