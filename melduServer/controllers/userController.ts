import { Request, Response, NextFunction } from "express";
import Account from "../models/mainModel.js";

export const getUserProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const username = req.body.username;
        const user = await Account.findOne({ username });

        if (!user) {
            res.status(404).json({ message: "User was not found" });
            return;
        }



    } catch (err) {
        next(err);
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

        const username = req.body.username;
        const user = await Account.findOne({ username });

        if (!user) {
            res.status(404).json({ message: "User was not found" });
            return;
        }

    } catch (err) {
        next(err);
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const username = req.params.username;
        const user = await Account.findOne({ username });

        if (!user) {
            res.status(404).json({ message: "User was not found" });
            return;
        }

        await Account.deleteOne({ username });


    } catch (err) {
        next(err);
    }
} 