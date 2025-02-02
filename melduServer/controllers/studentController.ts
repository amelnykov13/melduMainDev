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
        res.status(200).json({message: query})
    } catch(err) {
        next(err);
    }
}

