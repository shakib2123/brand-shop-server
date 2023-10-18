const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Brand Shop Sever Is Running Here.");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.op9dmu8.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const brandCollection = client.db("brandShopDB").collection("brands");
    const samsungAdCollection = client
      .db("brandShopDB")
      .collection("samsungAd");
    const appleAdCollection = client.db("brandShopDB").collection("appleAd");
    const sonyAdCollection = client.db("brandShopDB").collection("sonyAd");
    const googleAdCollection = client.db("brandShopDB").collection("googleAd");
    const intelAdCollection = client.db("brandShopDB").collection("intelAd");
    const asusAdCollection = client.db("brandShopDB").collection("asusAd");
    const productCollection = client.db("brandShopDB").collection("products");

    app.get("/samsungad", async (req, res) => {
      const result = await samsungAdCollection.find().toArray();
      res.send(result);
    });
    app.post("/samsungad", async (req, res) => {
      const slide = req.body;
      const result = await samsungAdCollection.insertOne(slide);
      res.send(result);
    });
    app.get("/applead", async (req, res) => {
      const result = await appleAdCollection.find().toArray();
      res.send(result);
    });
    app.post("/applead", async (req, res) => {
      const slide = req.body;
      const result = await appleAdCollection.insertOne(slide);
      res.send(result);
    });
    app.get("/sonyad", async (req, res) => {
      const result = await sonyAdCollection.find().toArray();
      res.send(result);
    });
    app.post("/sonyad", async (req, res) => {
      const slide = req.body;
      const result = await sonyAdCollection.insertOne(slide);
      res.send(result);
    });
    app.get("/intelad", async (req, res) => {
      const result = await intelAdCollection.find().toArray();
      res.send(result);
    });
    app.post("/intelad", async (req, res) => {
      const slide = req.body;
      const result = await intelAdCollection.insertOne(slide);
      res.send(result);
    });
    app.get("/googlead", async (req, res) => {
      const result = await googleAdCollection.find().toArray();
      res.send(result);
    });
    app.post("/googlead", async (req, res) => {
      const slide = req.body;
      const result = await googleAdCollection.insertOne(slide);
      res.send(result);
    });
    app.get("/asusad", async (req, res) => {
      const result = await asusAdCollection.find().toArray();
      res.send(result);
    });
    app.post("/asusad", async (req, res) => {
      const slide = req.body;
      const result = await asusAdCollection.insertOne(slide);
      res.send(result);
    });

    app.get("/brands", async (req, res) => {
      const query = brandCollection.find();
      const result = await query.toArray();
      res.send(result);
    });
    app.post("/brands", async (req, res) => {
      const brand = req.body;
      const result = await brandCollection.insertOne(brand);
      res.send(result);
    });

    app.get("/products", async (req, res) => {
      const result = await productCollection.find().toArray();
      res.send(result);
    });

    app.get("/products/samsung", async (req, res) => {
      const brand = "Samsung";
      const query = { brand: brand };
      const result = await productCollection.find(query).toArray();
      res.send(result);
    });
    app.get("/products/samsung/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });
    app.get("/products/apple", async (req, res) => {
      const brand = "Apple";
      const query = { brand: brand };
      const result = await productCollection.find(query).toArray();
      res.send(result);
    });
    app.get("/products/apple/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });
    app.get("/products/sony", async (req, res) => {
      const brand = "Sony";
      const query = { brand: brand };
      const result = await productCollection.find(query).toArray();
      res.send(result);
    });
    app.get("/products/sony/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });
    app.get("/products/google", async (req, res) => {
      const brand = "Google";
      const query = { brand: brand };
      const result = await productCollection.find(query).toArray();
      res.send(result);
    });
    app.get("/products/google/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });
    app.get("/products/intel", async (req, res) => {
      const brand = "Intel";
      const query = { brand: brand };
      const result = await productCollection.find(query).toArray();
      res.send(result);
    });
    app.get("/products/intel/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });
    app.get("/products/asus", async (req, res) => {
      const brand = "Asus";
      const query = { brand: brand };
      const result = await productCollection.find(query).toArray();
      res.send(result);
    });
    app.get("/products/asus/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });

    app.post("/products", async (req, res) => {
      const product = req.body;
      console.log(product);
      const result = await productCollection.insertOne(product);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Brand Shop Running On Port: ${port}`);
});
