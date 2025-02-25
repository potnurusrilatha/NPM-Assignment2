import express from "express"
import { goldArray, jewelryArray} from "../data/jewelery";

const goldRouter = express.Router();

goldRouter.get("/", (req,res) =>{
    res.render("pages/jewelery_info", {
        style_file_name : "home",
        bodyClass:"home",
        header_class: "home",
        main_content_page : "home",
        welcome_text: "Gold",
        jewelry_names : goldArray
       
    })
})

goldRouter.get("/earrings", (req,res) =>{
    res.send("It has different models of earrings")
})

goldRouter.get("/chains", (req,res) =>{
    res.send("shows different models of chains")
})

export default goldRouter;