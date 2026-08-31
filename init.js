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

let allChats = [
  {
    from: "Zaid",
    to: "Javed",
    msg: "hello",
    created_at: new Date()
  },
  {
    from: "Javed",
    to: "Zaid",
    msg: "Haan bhai, kaisa hai?",
    created_at: new Date()
  },
  {
    from: "Amit",
    to: "Zaid",
    msg: "Weather app ki API integration ho gayi kya?",
    created_at: new Date()
  },
  {
    from: "Zaid",
    to: "Amit",
    msg: "Haan, Render par deploy bhi kar diya hai.",
    created_at: new Date()
  },
  {
    from: "Rohan",
    to: "Rahul",
    msg: "Bhai aaj sham ko gym chalega?",
    created_at: new Date()
  },
  {
    from: "Rahul",
    to: "Rohan",
    msg: "Haan, aaj leg day hai. 6 baje milte hain.",
    created_at: new Date()
  },
  {
    from: "Priya",
    to: "Neha",
    msg: "React JS ke notes bhej dena please.",
    created_at: new Date()
  },
  {
    from: "Neha",
    to: "Priya",
    msg: "Shaam tak WhatsApp karti hoon.",
    created_at: new Date()
  },
  {
    from: "Sameer",
    to: "Zaid",
    msg: "Shop par hardware ka naya stock kab aayega?",
    created_at: new Date()
  },
  {
    from: "Zaid",
    to: "Sameer",
    msg: "Kal subah tak aa jayega.",
    created_at: new Date()
  }
]

Chat.insertMany(allChats);
