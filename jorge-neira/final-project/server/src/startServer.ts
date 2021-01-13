import Debug from 'debug';
import { Express } from 'express';
import * as http from 'http';
import { connect } from 'mongoose';

const startServer = (app: Express) => {
  try {
    const port = process.env.PORT || 5000;
    const dbUrl = process.env.DBURL || 'mongodb+srv://jneira95:*******@cluster0.hykgh.mongodb.net/neobytecomputerDB?retryWrites=true&w=majority';
    connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    const server = http.createServer(app);
    const debug = Debug('app');
    server.listen(port, () => {
      debug(`Server is running on port ${port}`);
    });
  } catch (error) {
    const debug = Debug('app');
    debug(error);
  }
};

export default startServer;
