const User = require("../models/user.js");
const mailer = require("../config/mailer");
const bcrypt = require('bcrypt')
const saltRounds = 10

const createUser = async (req, res) =>
{
    try
    {
        let jsonInp = (req.body);

        console.log(jsonInp);

        let UserDet = 
        {
            "user_name" : jsonInp.username,
            "password" : jsonInp.password,
            "email" : jsonInp.email
        }

        // let base64Pass = Buffer.from(jsonInp.password).toString('base64');

        const userExistDet = await User.findOne({ email: UserDet.email });

        if(!userExistDet)
        {
            bcrypt.hash(UserDet.password, saltRounds, async function(err, hash)
            {
                UserDet["password"] = hash;

                await User.create(UserDet);

                mailer(UserDet.username, UserDet.email)

                res.status(200).json
                (
                    {
                        "isOk": true,
                        "username": UserDet.username,
                        "password": UserDet.password
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

module.exports = createUser;