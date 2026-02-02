/**
 * @fileoverview Entry point for the backend user registration server.
 * @module index
 */

import express from 'express';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

/**
 * Middleware to parse incoming request bodies in JSON format.
 */
app.use(express.json());

/**
 * Middleware to parse incoming request bodies with URL-encoded payloads.
 * @param {Object} options - Options for body-parser middleware.
 * @param {boolean} options.extended - Use the extended version of the querystring library.
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Middleware to handle routes starting with '/user'.
 */
app.use('/user', userRoutes);

/**
 * Route serving the root URL.
 * @name get/
 * @function
 * @memberof module:index
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get('/', (req, res) => {
    res.send('Our backend server is running');
});

/**
 * Starts the server and listens on the specified port.
 * @function
 * @memberof module:index
 * @param {number} PORT - The port number on which the server listens.
 */
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});