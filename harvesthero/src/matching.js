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

app.post('/trigger-donation-notification', (req, res) => {
  const message = req.body.message; // The message to send
  
//   // Fetch recipient users from Firestore
//   db.collection('users').where('userType', '==', 'Recipient').get()
//     .then(snapshot => {
//       const recipientPromises = [];
//       snapshot.forEach(doc => {
//         // For each recipient, trigger a notification
//         // This example assumes you have a mechanism to send notifications
//         // You might be storing tokens, using Firebase Cloud Messaging, or another method
//         const recipient = doc.data();
//         // Placeholder for notification trigger logic
//         // Example: recipientPromises.push(sendNotification(recipient, message));
//       });
//       return Promise.all(recipientPromises);
//     })
//     .then(() => {
//       res.json({ success: true, message: 'Notifications triggered' });
//     })
//     .catch(error => {
//       console.error('Error triggering notifications', error);
//       res.status(500).json({ error: 'Failed to trigger notifications' });
//     });
// });


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
