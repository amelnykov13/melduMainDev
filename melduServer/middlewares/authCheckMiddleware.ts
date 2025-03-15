import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
    user?: any;
}

interface TypeRequest extends Request {
    type?: any;
}

export const verifyToken = (req:AuthRequest, res:Response, next:NextFunction) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({message: "Access Denied: No Token"});
    }

    try {
        const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET as string); //Verify the token
        req.user = verified; //add the info to request object
        next(); //move to next middleware
    } catch(err) {
        res.status(403).json({message: "Invalid Token"});
    }
}

export const verifyType = async (req:TypeRequest, res: Response, next: NextFunction):Promise<void> => {

}