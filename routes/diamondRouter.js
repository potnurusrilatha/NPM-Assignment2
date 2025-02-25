import express from "express"

const diamondRouter = express.Router();

diamondRouter.get("/", (req,res) =>{
    res.render("pages/jewelery_info", {
        bodyClass:" diamond",
        headTitle: "jewellary website",
        title:"Welcome to the DiomandsPage",
        subtitle:"Here we can see  Bangles and Pendents"
    })
})

diamondRouter.get("/bangles", (req,res) =>{
    res.send("shows different models of bangles")
})

diamondRouter.get("/pendents", (req,res) =>{
    res.send("shows different models of pendents")
})

export default diamondRouter;