import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import quoteOfDayRouter from './routers/QuoteOfDayRouter';
import pool from './dbconfig/dbconfig';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
    }

    private dbConnect() {
        pool.connect(function (err, client, done) {
            if (err) {
                return console.error('Error acquiring client', err.stack)
              }
            console.log('Connected');
          }); 
    }

    private routerConfig() {
        this.app.use('/quoteOfday', quoteOfDayRouter);
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;