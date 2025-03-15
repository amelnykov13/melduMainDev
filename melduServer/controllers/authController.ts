import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Account from '../models/mainModel.js'
import { Request, Response, NextFunction } from "express";


export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;
        const user = await Account.findOne({ email });
        
        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.status(401).json({message: 'Invalid credentials'})
            return; 
        }


            // 🛑 Check if JWT_SECRET is set
        if (!process.env.JWT_SECRET) {
            throw new Error("Missing JWT_SECRET in environment variables");
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "5d"})
        
        res.status(201).json({ token, user });
        res.redirect('/'); 
    } catch(err) {
        next(err);
    }
}

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { fullname, username, email, password, initialType } = req.body;
        const userUsername = await Account.findOne({ username });
        const userEmail = await Account.findOne({ email });

        if (userUsername) {
            res.status(400).json({message: "Username already exists. Pick another one"})
            return;
        }

        if (userEmail) {
            res.status(400).json({message: "There is already an account using this email address"})
            return;
        }

        
        
        const newUser = new Account({ fullname, username, email, password, initialType });
        await newUser.save();

        res.status(201).json({message: "Account has been created"});
        res.redirect('/home'); //! Fix to add the type
    } catch(err) {
        next(err);
    }
}

export const register2nd = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

    } catch(err) {

    }
}

export const logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "strict" });
        res.status(200).json({ message: "Succesful logout" });
        res.redirect('/login')
        return;
    } catch(err) {
        next(err);
    }
}