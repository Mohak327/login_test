const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;

        // check if name is entered
        if(!name) {
            return res.json({
                error: 'Name is required.'
            })
        }

        // check if password is valid
        if(!password || password.length < 6) {
            return res.json({
                error: 'Password is required. (Minimum 6 characters)'
            })
        }

        // check if email already exists
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Email is already taken.'
            })
        }

        const hashedPassword = await hashPassword(password);
        // create user in mongodb
        const user = await User.create({
            name, email, password: hashedPassword
        })

        return res.json(user);
    } catch(error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        // check if user exists
        if (!user) {
            return res.json({
                error: 'No user found with this email.'
            })
        }

        // check if passwords match
        const match = await comparePassword(password, user.password);
        if (match) {
            // assign jwt token for login
            jwt.sign(
                {email: user.email, id: user._id, name: user.name}, 
                process.env.JWT_SECRET,
                {},
                (err, token) => {
                    if(err) throw err;
                    res.cookie('token', token).json(user);
                }
            )
        } else {
            res.json({
                error: "Invalid Password."
            })
        }

    } catch (error) {
        console.log(error);
    }
}

const getProfile = async (req, res) => {
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user);
        })
    } else {
        res.json(null);
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}