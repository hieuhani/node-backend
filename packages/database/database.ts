import Knex, { Config as KnexConfig } from 'knex';
import { retry } from 'async';

export class Database {
  private config: KnexConfig;
  private retryDbConnectionPromise?: Promise<any>;
  private connection: Knex;

  constructor(config: KnexConfig) {
    this.config = config;
  }

  async getConnection() {
    if (!this.connection) {
      this.connection = await this.retryDbConnection();
    }
    return this.connection;
  }

  async closeDatabase() {
    if (this.connection) {
      await this.connection.destroy();
      this.connection = undefined;
    }
  }

  getConfig() {
    return this.config;
  }

  async createConnection() {
    const db = Knex(this.getConfig());
    await db.raw('select 1');
    return db;
  }

  instance() {
    return Knex(this.getConfig());
  }

  retryDbConnection() {
    if (this.retryDbConnectionPromise instanceof Promise) {
      return this.retryDbConnectionPromise;
    }

    const methodToRetry = (cb) => {
      this.createConnection()
        .then((db) => {
          cb(undefined, db);
        })
        .catch((err) => {
          cb(err, undefined);
        });
    };

    this.retryDbConnectionPromise = new Promise((resolve, reject) => {
      retry(
        { times: 3, interval: 1000 },
        methodToRetry,
        (err, db) => {
          if (err) {
            reject(err);
          } else {
            resolve(db);
          }
          this.retryDbConnectionPromise = undefined;
        }
      );
    });

    return this.retryDbConnectionPromise;
  }
}
