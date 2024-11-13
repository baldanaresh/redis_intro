const express = require("express");
const { createClient } = require("redis");

const client=createClient();
client.connect();

const app=express();
app.use(express.json());
app.post("/submit",async (req,res)=>{
    const {prblemid,code,language}=req.body;
    await client.lPush("problem",JSON.stringify({prblemid,code,language}));
    res.json({
        message:"client recieved"
    })

});

app.listen(4000,()=>{
    console.log("server running on port 4000");
})