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

// Health check endpoint
// Tells Fly.io and Render to ping /health after deployment to ensure the app is healthy before marking the deployment as successful.)
app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw new Error('error...')
  res.send('ok')
})
