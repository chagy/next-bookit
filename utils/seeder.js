const Room = require("../models/room");

const mongoose = require("mongoose");

const rooms = require("../data/rooms");

mongoose.connect(
  `mongodb+srv://bookit:4WM4AE1XJHOVLIoy@cluster0.c7cg1.mongodb.net/bookit?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All Room are added.");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
