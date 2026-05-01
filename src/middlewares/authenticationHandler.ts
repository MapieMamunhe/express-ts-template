import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import jwt from "jsonwebtoken";

export const authenticationHandler = (req: Request, res: Response, next: NextFunction): void => {
    // 1. Skip logic for auth routes
    if (req.path === "/user/login" || req.path === "/user/register" || req.path === "/participantes/register") {
        return next();
    }

    // 2. Extract the Bearer token
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return next(createError(401, "Access token required"));
    }

    // 3. Verify the token
    try {
        const secret = process.env.JWT_SECRET || "your-fallback-secret";
        const decoded = jwt.verify(token, secret);
        
        // Optionally attach user data to the request object
        (req as any).user = decoded; 
        
        next();
    } catch (error) {
        next(createError(403, "Invalid or expired token"));
    }
};