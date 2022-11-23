import express from 'express';
import http from 'node:http';
import mongoose from 'mongoose';
import path from 'node:path';
import { Server } from 'socket.io';
import { router } from './router';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const PORT = 3001;

    app.use((req, res, next) => {
      res.setHeader('Access-control-Allow-Origin', '*');
      res.setHeader('Access-control-Allow-Methods', '*');
      res.setHeader('Access-control-Allow-Headers', '*');

      next();
    });
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    server.listen(3001, () => console.log(`Server is runnig on http://localhost:${PORT}`));
  })
  .catch(() => console.log('error'));


