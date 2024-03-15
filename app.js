const express = require('express');
const firebaseAdmin = require('./firebaseConfig');

const app = express();

app.get('/', (req, res) => {
    firebaseAdmin.database().ref('path/to/data').once('value')
        .then(snapshot => {
            const data = snapshot.val();
            res.json(data);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
