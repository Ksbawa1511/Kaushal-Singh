import mongoose from 'mongoose';
import Profile from '../models/Profile.js';
import fallbackProfile from '../data/profile.js';

export async function getProfile(req, res) {
  const hasMongo = Boolean(process.env.MONGODB_URI);
  const isConnected = mongoose.connection.readyState === 1;

  // If MongoDB is not configured or not connected, serve fallback immediately.
  if (!hasMongo || !isConnected) {
    return res.json(fallbackProfile);
  }

  try {
    const profile = await Profile.findOne().lean();
    if (profile) return res.json(profile);
  } catch (error) {
    console.error('Error fetching profile from MongoDB:', error.message);
  }

  return res.json(fallbackProfile);
}

