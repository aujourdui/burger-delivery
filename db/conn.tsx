import { MongoClient } from "mongodb";
const Db = process.env.ATLAS_URI;
const client: any = new MongoClient(Db, {});

var _db: any;

module.exports = {
  connectToServer: function (callback: (arg0: any) => any) {
    client.connect = function (err: any, db: { db: (arg0: string) => any }) {
      if (db) {
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    };
  },
  getDb: () => {
    return _db;
  },
};
