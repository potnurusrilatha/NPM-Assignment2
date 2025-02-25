import express from "express";
import * as path from "path";
import { jewelryArray } from "./data/jewelery.js";
import goldRouter from "./routes/GoldRouter.js";
import diamondRouter from "./routes/diamondRouter.js";
import silverRouter from "./routes/SilverRouter.js";

const app = express();
const PORT = 3000;
const__dirname = path.resolve();

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))


app.get("/",(req,res) => {
    res.render("pages/home.ejs", {
        jewelry : jewelryArray,
        main_content_page: "home",
        body_class_name : "home",
        welcome_text : "Jewelry Website",
        jewelry_names : jewelryArray
    })
})

app.use("/gold", goldRouter)
app.use("/diamond", diamondRouter)
app.use("/silver", silverRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
