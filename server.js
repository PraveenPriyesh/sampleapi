const express= require('express');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());
const Port=2000;
const information=require('./data.json');
app.get("/api/information",(req,res)=>{
    res.json(information);
})
app.get('/api/information/2',(req,res)=>{
    res.json(information[1]);
})
// app.listen(Port,()=>{
//     console.log(`Successfully running on http://localhost:${Port}/api/information`);
// })
module.exports= app
