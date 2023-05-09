import express from 'express'
import { sequelize } from './database/models';
import cors from 'cors'

const app = express()

const port = process.env.PORT || 5002;
const mode = process.env.NODE_ENV || 'development';

app.use(express.json());
app.use(cors());

// DB connection
switch (mode) {
    case 'development': {
      sequelize.authenticate()
        .then(() => {
          console.log('Dev DB connected successfully.');
        })
        .catch((error) => {
          console.log('Dev DB failed to be connected!');
        });
      break;
    }
    case 'test': {
      sequelize.authenticate()
        .then(() => {
          console.log('Test DB connected successfully.');
        })
        .catch((error) => {
          console.log('Test DB failed to be connected!');
        });
      break;
    }
    case 'production': {
      sequelize.authenticate()
        .then(() => {
          console.log('Prod DB connected successfully.');
        })
        .catch((error) => {
          console.log('Prod DB failed to be connected!');
        });
      break;
    }
    default: {
      console.log('Invalid NODE_ENV for the scope of this project');
    }
}

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to Nida info simulation', mode: req.app.get('env') });
});

app.listen(port, () => {
    console.log(`Server is up and running on http://localhost:${port}`);
    console.log('Press Ctrl + C to stop the server');
});