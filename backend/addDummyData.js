const mongoose = require("mongoose");
const Product = require("./models/Product");

// MongoDB Connection
const MONGODB_URI =
  "mongodb+srv://himanshuch8055:himanshu1234@cluster0.99nk9x2.mongodb.net/ecommerce";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Dummy Data
    const dummyProducts = [
      {
        title: "Laptop",
        description: "A high-performance laptop",
        price: 999.99,
        imageUrl: "https://dummyimage.com/300x300/000/fff&text=Electronics",
        category: "Electronics",
      },
      {
        title: "Smartphone",
        description: "A latest model smartphone",
        price: 699.99,
        imageUrl: "https://dummyimage.com/300x300/555/fff&text=Books",
        category: "Electronics",
      },
      {
        title: "Coffee Mug",
        description: "A ceramic coffee mug",
        price: 9.99,
        imageUrl: "https://dummyimage.com/300x300/777/fff&text=Clothing",
        category: "Home Goods",
      },
      {
        title: "Running Shoes",
        description: "Comfortable running shoes",
        price: 79.99,
        imageUrl: "https://dummyimage.com/300x300/999/fff&text=Footwear",
        category: "Footwear",
      },
      {
        title: "Novel",
        description: "An interesting novel",
        price: 19.99,
        imageUrl: "https://dummyimage.com/300x300/aaa/fff&text=Books",
        category: "Books",
      },
      {
        title: "T-Shirt",
        description: "A stylish t-shirt",
        price: 14.99,
        imageUrl: "https://dummyimage.com/300x300/bbb/fff&text=Clothing",
        category: "Clothing",
      },
      {
        title: "Headphones",
        description: "Noise-cancelling headphones",
        price: 199.99,
        imageUrl: "https://dummyimage.com/300x300/ccc/fff&text=Electronics",
        category: "Electronics",
      },
      {
        title: "Backpack",
        description: "A durable backpack for travel",
        price: 49.99,
        imageUrl: "https://dummyimage.com/300x300/ddd/fff&text=Accessories",
        category: "Accessories",
      },
      {
        title: "Desk Lamp",
        description: "An adjustable desk lamp",
        price: 29.99,
        imageUrl: "https://dummyimage.com/300x300/eee/fff&text=Home+Goods",
        category: "Home Goods",
      },
      {
        title: "Yoga Mat",
        description: "A non-slip yoga mat",
        price: 39.99,
        imageUrl: "https://dummyimage.com/300x300/fff/000&text=Fitness",
        category: "Fitness",
      },
      {
        title: "Smartwatch",
        description: "A smartwatch with fitness tracking",
        price: 249.99,
        imageUrl: "https://dummyimage.com/300x300/111/fff&text=Electronics",
        category: "Electronics",
      },
      {
        title: "Water Bottle",
        description: "A stainless steel water bottle",
        price: 19.99,
        imageUrl: "https://dummyimage.com/300x300/222/fff&text=Accessories",
        category: "Accessories",
      },
      {
        title: "Sunglasses",
        description: "Stylish sunglasses for summer",
        price: 29.99,
        imageUrl: "https://dummyimage.com/300x300/333/fff&text=Accessories",
        category: "Accessories",
      },
      {
        title: "Wireless Charger",
        description: "A fast wireless charger",
        price: 39.99,
        imageUrl: "https://dummyimage.com/300x300/444/fff&text=Electronics",
        category: "Electronics",
      },
      {
        title: "Notebook",
        description: "A lined notebook for notes",
        price: 5.99,
        imageUrl: "https://dummyimage.com/300x300/555/fff&text=Stationery",
        category: "Stationery",
      },
      {
        title: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker",
        price: 79.99,
        imageUrl: "https://dummyimage.com/300x300/666/fff&text=Electronics",
        category: "Electronics",
      },
      {
        title: "Skincare Set",
        description: "A set of skincare products",
        price: 89.99,
        imageUrl: "https://dummyimage.com/300x300/777/fff&text=Beauty",
        category: "Beauty",
      },
      {
        title: "Cookbook",
        description: "A cookbook with delicious recipes",
        price: 24.99,
        imageUrl: "https://dummyimage.com/300x300/888/fff&text=Books",
        category: "Books",
      },
      {
        title: "Gaming Mouse",
        description: "A high-precision gaming mouse",
        price: 49.99,
        imageUrl: "https://dummyimage.com/300x300/999/fff&text=Electronics",
        category: "Electronics",
      },
      {
        title: "Fitness Tracker",
        description: "A fitness tracker for health monitoring",
        price: 99.99,
        imageUrl: "https://dummyimage.com/300x300/aaa/fff&text=Fitness",
        category: "Fitness",
      },
      {
        title: "Wall Art",
        description: "Beautiful wall art for home decor",
        price: 39.99,
        imageUrl: "https://dummyimage.com/300x300/bbb/fff&text=Home+Decor",
        category: "Home Decor",
      },
      {
        title: "Travel Pillow",
        description: "Comfortable travel pillow",
        price: 19.99,
        imageUrl: "https://dummyimage.com/300x300/ccc/fff&text=Accessories",
        category: "Accessories",
      },
      {
        title: "Electric Kettle",
        description: "A fast electric kettle",
        price: 49.99,
        imageUrl: "https://dummyimage.com/300x300/ddd/fff&text=Home+Appliances",
        category: "Home Appliances",
      },
      {
        title: "Wireless Earbuds",
        description: "High-quality wireless earbuds",
        price: 129.99,
        imageUrl: "https://dummyimage.com/300x300/eee/fff&text=Electronics",
        category: "Electronics",
      },
      {
        title: "Board Game",
        description: "A fun board game for family nights",
        price: 29.99,
        imageUrl: "https://dummyimage.com/300x300/fff/000&text=Games",
        category: "Games",
      },
      {
        title: "Camping Tent",
        description: "A waterproof camping tent",
        price: 199.99,
        imageUrl: "https://dummyimage.com/300x300/111/fff&text=Outdoor+Gear",
        category: "Outdoor Gear",
      },
      {
        title: "Action Camera",
        description: "A waterproof action camera",
        price: 299.99,
        imageUrl: "https://dummyimage.com/300x300/222/fff&text=Electronics",
        category: "Electronics",
      },
      {
        title: "Pet Bed",
        description: "A comfortable bed for pets",
        price: 39.99,
        imageUrl: "https://dummyimage.com/300x300/333/fff&text=Pets",
        category: "Pets",
      },
      {
        title: "Gardening Tools Set",
        description: "A set of gardening tools",
        price: 59.99,
        imageUrl: "https://dummyimage.com/300x300/444/fff&text=Gardening",
        category: "Gardening",
      },
      {
        title: "Electric Toothbrush",
        description: "A rechargeable electric toothbrush",
        price: 49.99,
        imageUrl: "https://dummyimage.com/300x300/555/fff&text=Health+Care",
        category: "Health Care",
      },
      {
        title: "Smart Home Hub",
        description: "A hub for smart home devices",
        price: 149.99,
        imageUrl: "https://dummyimage.com/300x300/666/fff&text=Smart+Home",
        category: "Smart Home",
      },
      {
        title: "Drone",
        description: "A high-definition camera drone",
        price: 499.99,
        imageUrl: "https://dummyimage.com/300x300/777/fff&text=Electronics",
        category: "Electronics",
      },
      {
        title: "VR Headset",
        description: "A virtual reality headset",
        price: 399.99,
        imageUrl: "https://dummyimage.com/300x300/888/fff&text=Electronics",
        category: "Electronics",
      },
      {
        title: "Electric Bike",
        description: "A fast electric bike",
        price: 899.99,
        imageUrl: "https://dummyimage.com/300x300/999/fff&text=Transportation",
        category: "Transportation",
      },
      {
        title: "Smart Thermostat",
        description: "A smart thermostat for home",
        price: 129.99,
        imageUrl: "https://dummyimage.com/300x300/aaa/fff&text=Smart+Home",
        category: "Smart Home",
      },
      {
        title: "Portable Charger",
        description: "A high-capacity portable charger",
        price: 29.99,
        imageUrl: "https://dummyimage.com/300x300/bbb/fff&text=Electronics",
        category: "Electronics",
      },
      {
        title: "Electric Grill",
        description: "A smokeless electric grill",
        price: 79.99,
        imageUrl: "https://dummyimage.com/300x300/ccc/fff&text=Home+Appliances",
        category: "Home Appliances",
      },
      {
        title: "Smart Light Bulb",
        description: "A smart LED light bulb",
        price: 19.99,
        imageUrl: "https://dummyimage.com/300x300/ddd/fff&text=Smart+Home",
        category: "Smart Home",
      },
      {
        title: "Fitness Mat",
        description: "A non-slip fitness mat",
        price: 29.99,
        imageUrl: "https://dummyimage.com/300x300/eee/fff&text=Fitness",
        category: "Fitness",
      },
      {
        title: "Electric Pressure Cooker",
        description: "A multi-function electric pressure cooker",
        price: 89.99,
        imageUrl: "https://dummyimage.com/300x300/fff/000&text=Home+Appliances",
        category: "Home Appliances",
      },
    ];

    // Add Dummy Data to MongoDB
    try {
      await Product.insertMany(dummyProducts);
      console.log("Dummy data added successfully");
    } catch (error) {
      console.error("Error adding dummy data:", error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
