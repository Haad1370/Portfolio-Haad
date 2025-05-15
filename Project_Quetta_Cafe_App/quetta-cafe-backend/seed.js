// seed.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const CafeItem = require("./models/CafeItem"); // Adjust path if needed
const mockItems = require("./data/mockData"); // Your mock data file

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");

    await CafeItem.deleteMany({});
    console.log("🗑️ Existing data cleared.");

    await CafeItem.insertMany(mockItems);
    console.log("✅ Mock data inserted successfully.");

    mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  } catch (error) {
    console.error("❌ Error inserting mock data:", error.message);
    process.exit(1);
  }
};

seedDatabase();
