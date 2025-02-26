import express from "express"
import { diamondArray } from "../data/jewelry.js";

const diamondRouter = express.Router();

diamondRouter.get("/", (req,res) =>{
    res.render("pages/home.ejs", {
        bodyClass:"home",
        head_Title: "home",
        main_content_description: "diamond",
        title:"Welcome to the DiomandsPage",
        welcome_text: "Diamond",
        jewelry_name : diamondArray
       
    })
})

diamondRouter.get("/Diamond_Ring", (req,res) =>{
    let diamondRing = diamondArray[1];
    res.render("pages/home.ejs",{
        head_Title: "home",
        title : "Welcome to DiamondRing",
        bodyClass:"diamond",
        welcome_text: "Diamond - DiamondRing ",
        main_content_description :"jewelry",
        jewelry: diamondRing,
        jewelry_name: diamondArray

    })
})

diamondRouter.get("/Diamond_Bracelet", (req,res) =>{
    let diamondBracelet = diamondArray[2];
    res.render("pages/home.ejs",{
        head_Title: "home",
        title : "Welcome to DiamondBracelet",
        bodyClass:"diamond",
        welcome_text: "Diamond - DiamondBracelet ",
        main_content_description :"jewelry",
        jewelry: diamondBracelet,
        jewelry_name: diamondArray

    })
})

diamondRouter.get("/Diamond_Necklace", (req,res) =>{
    let diamondNecklace = diamondArray[0];
    res.render("pages/home.ejs",{
        head_Title: "home",
        title : "Welcome to DiamondNecklace",
        bodyClass:"diamond",
        welcome_text: "Diamond - DiamondNecklace ",
        main_content_description :"jewelry",
        jewelry: diamondNecklace,
        jewelry_name: diamondArray

    })
})
export default diamondRouter;