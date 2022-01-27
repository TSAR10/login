const express = require("express")
const app = express()
const port = 3000

var connectDB = require('./db/connect');
require("dotenv").config();

// routers
const signupRouter = require("./routes/signup");

app.use(express.json());

app.use("/api/v1/signup", signupRouter);

app.get('/', (req, res) =>
{
    res.send("User Will register and email will be sent")
})

const startDB = async () => 
{
   try
   {
        await connectDB(process.env.MONGO_URI);

        app.listen(port, () =>
        {
            console.log(`Example app listening on port ${port}`)
        })
   }
   catch (error)
   {
        console.log(error)
   }
}

startDB();