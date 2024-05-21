// Necessary dependencies
const { MongoClient, ObjectId } = require("mongodb");
const fs = require("fs");
const config = require("./config.json");

async function dbSeeder() {
  // Configure constants
  const uri = config.db_url;
  const dbName = config.db_name;
  console.log("🚀 Initiated dependencies....\n");

  // Create mongo client class
  const mongoClient = new MongoClient(uri);
  console.log("♻️  Created mongo client instance....\n");

  // Try Catch Block For Execution Instance
  try {
    // Connect mongo-db client
    await mongoClient.connect();
    console.log("✅ Mongo connection succeed...\n");

    // Create DB from constant
    const database = mongoClient.db(dbName);
    console.log("✅ Database name initiated from config, succeed...\n");

    // Read the games.js file
    let script = fs.readFileSync("./games.js", "utf8");
    console.log("✅ Script file initiated, succeed...\n");

    // Wrap with the IIFE
    script = `(function(db, ObjectId, ISODate, NumberInt){
        ${script
          .replace(/ObjectId\(/g, "new ObjectId(")
          .replace(/ISODate\(/g, "new Date(")
          .replace(/NumberInt\(/g, "Number(")}
    })(db, ObjectId, (dateStr) => new Date(dateStr), (intStr) => Number(intStr));`;
    console.log("✅ Script file wrapped in IIFE, succeed...\n");

    // Executing Script Initiation
    const executeScript = new Function(
      "db",
      "ObjectId",
      "ISODate",
      "NumberInt",
      script
    );
    console.log("✅ Bind script file, succeed...\n");

    // DB Function Object to pass the execution function
    const db = {
      getCollection: (collectionName) => {
        const collection = database.collection(collectionName);
        return {
          drop: async () =>
            await collection.drop().catch((error) => {
              if (error.codeName !== "NamespaceNotFound") {
                throw error;
              }
            }),
          insert: async (documents) => await collection.insertMany(documents)
        };
      },
      createCollection: async (collectionName) =>
        await database.createCollection(collectionName)
    };
    console.log("💉 Initiated the injection of DB functions, succeed...\n");

    // Finally Call the function with everything
    await executeScript(
      db,
      ObjectId,
      (dateStr) => new Date(dateStr),
      (intStr) => Number(intStr)
    );
    console.log(
      "💥 DB data injected, please check your database and collections (You can press CTRL + C to close the script now)...\n"
    );
  } catch (error) {
    console.log(`☢️  ${error}`);
  }
}

dbSeeder();
