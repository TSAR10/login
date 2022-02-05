const User = require("../models/user.js");
const bcrypt = require('bcrypt')
const saltRounds = 10

const updateEmail = async (req, res) =>
{
    try
    {
        let jsonInp = (req.body);

        console.log(jsonInp);

        const userExistDet = await User.findOne({ _id: jsonInp.id });

        console.log(userExistDet);

        if(userExistDet)
        {
            bcrypt.compare(jsonInp.password, userExistDet.password, async function(err, done)
            {
                if(done)
                {
                    console.log("HI pass");
                    if(jsonInp.email)
                    {
                        let update = await User.findOneAndUpdate({ _id: jsonInp.id }, {email: jsonInp.email});
                    }
                    if(jsonInp.password)
                    {
                        let update = await User.findOneAndUpdate({ _id: jsonInp.id }, {password: jsonInp.newPasssword});
                    }
                }
                else
                {
                    console.log("HI pass err");
                }

                // UserDet["password"] = hash;

                // await User.create(UserDet);

                // mailer(UserDet.username, UserDet.email)

                res.status(200).json
                (
                    {
                        "isOk": true,
                        "message": "Updated Successfully"
                    }
                );
            });
        }
        else
        {
            res.status(500).json
            (
                {
                    "isOk": false,
                    "msg": "User Already Exists"
                }
            );
        }
    }
    catch(error)
    {
        
    }
}

module.exports = updateEmail;