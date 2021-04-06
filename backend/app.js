const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);

const galleryRoutes = require('./routes/galleries');

mongoose.connect(config.DB_URI).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
});

app.use('/api/galleries', galleryRoutes);

server.listen(port);