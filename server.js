let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());



app.get("/srikanth",(req,res) =>{  
    let movieArray =["Rajkumar","Rao"];
    res.json(movieArray);
});

app.listen(1234,()=>{
    console.log("Listening to port 1234")
});