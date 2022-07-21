import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// bcrypt is async
// jwt is synchronous

export const signIn = async (req, res) =>{
    const {email, password} = req.body
    try {
        const existingUser = await User.findOne({email});
        if (!existingUser) return res.status(404).json({message: "User does not exist."});
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Password is incorrect."});
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, "PRV_KEY", {expiresIn: "1h"});
        return res.status(200).json({user: existingUser, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong."})
    }
}

export const signUp = async (req, res) =>{
    const {firstName, lastName, email, password, confirmPassword} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({message: "User already exists."});
        if (password !== confirmPassword) return res.status(400).json({message: "Passwords do not match."});
        const hashedPassword = await bcrypt.hash(password, 12); 
        const user = await User.create({firstName, lastName, email, password: hashedPassword});
        const token = jwt.sign({email: user.email, id: user._id}, "PRV_KEY", {expiresIn: "1h"});
        return res.status(200).json({user, token})
    } catch (error) {
        res.status(500).json({message: "Something went wrong."})
    }
}

export const findUserByUserId = async (id) => {
    try {
        const user = await User.findOne({_id: id})
        return user
    } catch (error) {
        throw new Error({message: "Something went wrong."})
    }
}

