/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */
 app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  // Escreva aqui a sua msg para o mundo
  console.log("Hello World!");
})