import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import movieRoutes from './routes/movieRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

await connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/movies', movieRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 