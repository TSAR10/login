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

        if(userExistDet)
        {
            bcrypt.compare(userExistDet.password, jsonInp.password, async function(err, res)
            {
                if(res)
                {
                    if(jsonInp.email)
                    {
                        let update = await User.findOneAndUpdate({ _id: jsonInp.id }, {email: jsonInp.email});
                    }
                    if(jsonInp.password)
                    {
                        let update = await User.findOneAndUpdate({ _id: jsonInp.id }, {password: jsonInp.newPasssword});
                    }
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