import Account from '../models/mainModel.js'
import { Request, Response, NextFunction } from "express";

export const getHomeInfoStudent = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {

    } catch(err) {
        next(err);
    }
}
export const getChatsInfoStudent = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {

    } catch(err) {
        next(err);
    }
}
export const getChatStudent = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {

    } catch(err) {
        next(err);
    }
}
export const getNotificationsStudent = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {

    } catch(err) {
        next(err);
    }
}
export const getAccountInfoStudent = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {

    } catch(err) {
        next(err);
    }
}
export const getEducationInfoStudent = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {

    } catch(err) {
        next(err);
    }
}

export const searchStudent = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {
        const { query } = req.query;

        if(!query || typeof query !== 'string') {
            res.status(400).json({ message: "Invalid Search Query" });
            return;
        }
        const foundAcc = await Account.find({ username: { $regex: query, $options: 'i' } });

        if (foundAcc.length === 0) {
            res.status(404).json({ message: "No accounts were found" });
            return;
        }

        res.status(200).json({ message: foundAcc })
    } catch(err) {
        //next(err);
        console.log(err);
        res.status(500).json({ message: "Internal error" });
    }
}

