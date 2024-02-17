const express = require('express');
const admin = require('firebase-admin');

// Initialize Express app
const app = express();

// Initialize Firebase Admin SDK
const serviceAccount = require('./harvest-hero.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Initialize Firestore
const db = admin.firestore();

// Define routes
app.get('/data', (req, res) => {
  // Example: Fetch data from Firestore
  db.collection('harvest-hero').get()
    .then(snapshot => {
      const data = [];
      snapshot.forEach(doc => {
        data.push(doc.data());
      });
      res.json(data);
    })
    .catch(error => {
      console.error('Error getting documents', error);
      res.status(500).json({ error: 'Something went wrong!' });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
