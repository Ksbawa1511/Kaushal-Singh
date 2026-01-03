import mongoose from 'mongoose';

export async function connectDB(uri) {
  if (!uri) {
    console.warn('No MONGODB_URI provided; API will use fallback data only.');
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
}

