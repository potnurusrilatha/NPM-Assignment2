import express from "express"
import { silverArray } from "../data/jewelry.js";

const silverRouter = express.Router();

silverRouter.get("/", (req,res) =>{
    res.render("pages/home.ejs",{
        head_Title: "home",
        bodyClass: "home",
        main_content_description: "silver",
        title: "Welcome to Silver page",
        welcome_text: "silver",
        jewelry_name: silverArray

    })
})

silverRouter.get("/Silver_Necklace", (req,res) =>{
    let silverNecklace = silverArray[0];
    res.render("pages/home.ejs",{
        bodyClass:"silver",
        head_Title: "home",
        title : "Welcome to Silver Necklace",
        main_content_description: "jewelry",
        welcome_text: "Silver - SilverNecklace",
        jewelry: silverNecklace,
        jewelry_name: silverArray
    })
})

silverRouter.get("/Silver_Ring", (req,res) =>{
    let silveRring = silverArray[1];
    res.render("pages/home.ejs",{
        bodyClass: "home",
        head_Title: "home",
        title: "Welcome to Silver Ring",
        welcome_text: "Silver - SilverRing",
        main_content_description: "jewelry",
        jewelry: silveRring,
        jewelry_name: silverArray
    })
})

silverRouter.get("/Silver_Bracelet",(req,res) =>{
    let silverBracelet = silverArray[2];
    res.render("pages/home.ejs",{
        bodyClass:"home",
        head_Title:"home",
        title:"Welcome to SilverBracelet",
        welcome_text:"Silver - SilverBracelet",
        main_content_description: "jewelry",
        jewelry: silverBracelet,
        jewelry_name: silverArray

    })
})

export default silverRouter;