import express from "express";
import * as path from "path";
import { jewelryArray } from "./data/jewelry.js";
import goldRouter from "./routes/GoldRouter.js";
import diamondRouter from "./routes/diamondRouter.js";
import silverRouter from "./routes/silverRouter.js";
import * as dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res) => {
    res.render("pages/home.ejs", {
        head_Title : "home",
        title : "Sree's Jewelery Website",
        main_content_description: "home",
        body_class_name : "home",
        welcome_text : "Jewelry Website",
        jewelry_name : jewelryArray
    })
})

app.use("/Gold", goldRouter)
app.use("/Diamond", diamondRouter)
app.use("/Silver", silverRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
