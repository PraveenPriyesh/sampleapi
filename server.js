const express= require('express');
const app=express();
app.use(express.json());
const Port=2000;
const information=[
    name1={
        "Status":"Api created successfully",
        "Addition infor":"None"
    },
    name3={
        "Status1":"Data2 is working",
        "Addition infor1":"none"
    }
];
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
