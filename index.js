const express=require("express");

const port=3000;
const app=express();


const users=[{
    name:"john",
    kidneys:[{
        health:true
    },{
        health:false
    }]
}]


app.use(express.json());

app.get("/",(req,res)=>{
    const johnKidneys=users[0].kidneys;
    const totalKidneys=johnKidneys.length;
    let healthKidneys=0;
    for (let index = 0; index < totalKidneys; index++) {
        if(johnKidneys[index].health){
            healthKidneys ++;

        }
    }
    const unhealthyKidney=totalKidneys-healthKidneys;     

    res.json({
        totalKidneys,
        healthKidneys,
        unhealthyKidney
    })


    
})

app.post('/',(req,res)=>{
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        health:ishealthy
    });

    res.json({
        msg:"done"
    })
})


app.put("/",(req,res)=>{
    const johnKidneys=users[0].kidneys
    for (let index = 0; index <johnKidneys.length ; index++) {
        if(!johnKidneys[index].health){
            johnKidneys[index].health=true;

        }
    
        
    }

    res.json({
        msg:"done!"
    })
})


app.listen(port,()=>{
    console.log(`server at port ${port}`);
})