import express from "express"

const silverRouter = express.Router();

silverRouter.get("/", (req,res) =>{
    res.render("pages/home.ejs",{
        bodyClass: "silver",
        headTitle : "jewellery website",
        title: "Welcome to silverPage",
        subtitle : "Here we can see about silvercoins and silvergifts"

    })
})

silverRouter.get("/silverGifts", (req,res) =>{
    res.send("shows different models of silverGifts")
})

silverRouter.get("/silverCoins", (req,res) =>{
    res.send("shows different models of silverCoins")
})

export default silverRouter;