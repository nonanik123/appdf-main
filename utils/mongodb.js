import mongoose from 'mongoose'

const connection = {}

export default async function connectToDatabase() {
  // Check if the connection is already established
  if (connection.isConnected) {
    console.log('Using existing MongoDB connection')
    return { client: null, db: mongoose.connection } // Return the existing connection
  }

  try {
    // Connect to the database
    await mongoose.connect(process.env.MONGODB_URI, {
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
    })

    connection.isConnected = mongoose.connection.readyState // Store the connection state
    console.log('MongoDB connected successfully')

    return { client: null, db: mongoose.connection } // Return the new connection
  } catch (error) {
    console.error('MongoDB connection error:', error.message)
    throw new Error('Failed to connect to MongoDB')
  }
}
