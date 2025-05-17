<<<<<<< HEAD
/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable linebreak-style */

const express = require('express');
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
=======
/* eslint-disable linebreak-style */
/* eslint-disable no-console */

const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

// Serve static files from the React app
app.use(express.static('dist'))

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
>>>>>>> 74880f6 (Initial push of full-stack-open-pokedex)
