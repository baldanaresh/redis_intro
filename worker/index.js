const express=require("express");
const {createClient}=require("redis");
const app=express();

const client=createClient();

async function getting(req,res) {
    await client.connect();
    while(1){
        const response=await client.brPop("problem",0);
        console.log(response);
        // console.log("prossesd user submission");
    }
    
}
getting();