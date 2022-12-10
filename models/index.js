import mongoose from 'mongoose';
import 'dotenv/config';

export default mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@cluster0.sijwmdc.mongodb.net/MeroMessage?retryWrites=true&w=majority`).then(() => {
    console.log(`Database connected`);
}).catch((e) => {
    console.log(`${e}`);
})