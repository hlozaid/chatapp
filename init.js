const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

Chat.insertMany([
  {
    from: "Zaid",
    to: "Javed",
    msg: "hello",
    created_at: new Date(),
  },
]);
