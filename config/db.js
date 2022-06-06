import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env'})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,    
            }
        )
        console.log('DB is working')
    } catch (error) {
        console.log('Something went wrong with the DB Connection...')
        console.log(error)
        process.exit(1) //if there is an error, the app will stop
    }
}

export default connectDB;