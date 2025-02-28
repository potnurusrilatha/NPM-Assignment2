import express from "express"
import { goldArray, jewelryArray} from "../data/jewelry.js";
 
const goldRouter = express.Router();

goldRouter.get("/", (req,res) =>{
    res.render("pages/home.ejs", {
        bodyClass:"home",
        head_Title: "home",
        title : "Welcome to GoldPage",
        main_content_description : "Gold",
        welcome_text: "Gold",
        jewelry_name : goldArray
    })
})

goldRouter.get("/Gold_Necklace", (req,res) =>{
    let goldNecklace = goldArray[0];
    res.render("pages/home.ejs",{
        head_Title: "home",
        title : "Welcome to GoldNecklace",
        bodyClass:"Gold",
        welcome_text: "gold - GoldNecklace ",
        main_content_description :"jewelry",
        jewelry: goldNecklace,
        jewelry_name: goldArray

    })
})

goldRouter.get("/Gold_Ring", (req,res) =>{
    let goldRing = goldArray[1];
    res.render("pages/home.ejs",{
        head_Title: "home",
        title: "Welcome to GoldRing",
        bodyClass:"gold",
        welcome_text: "Gold - GoldRing",
        main_content_description :"jewelry",
        jewelry: goldRing,
        jewelry_name: goldArray
    })
})


goldRouter.get("/Gold_Bracelet", (req,res) =>{
    let goldBracelet = goldArray[2];
    res.render("pages/home.ejs",{
        bodyClass: "gold",
        head_Title : "home",
        title: "Welcome to GoldBracelet",
        welcome_text: "Gold - GoldBracelet",
        main_content_description: "jewelry",
        jewelry: goldBracelet,
        jewelry_name: goldArray
    })
})


export default goldRouter;