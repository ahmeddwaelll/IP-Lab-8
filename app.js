const express = require('express');
const mongoose = require('mongoose');
const coursesRouter = require('./routes/courseRoutes');

const app = express();
app.use(express.json());

// ==================== MongoDB Connection ====================
const MONGO_URI = "mongodb+srv://ahmedwael:19122005@cluster0.xlqekxc.mongodb.net/?appName=Cluster0";

// Use routes
app.use('/api/course', coursesRouter);
app.get('/', (req, res) => {
    res.send('Course Management API is running');
});

async function start() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB Atlas");

        app.listen(5000, () => {
            console.log('Server running on http://localhost:5000');
        });
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

start();

