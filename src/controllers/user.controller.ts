// controllers/userController.ts
import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
    // Logic to fetch users
    res.status(200).json({ message: "Fetched all users" });
};

export const createUser = (req: Request, res: Response) => {
    // Logic to create a user
    const { name } = req.body;
    res.status(201).json({ message: `User ${name} created` });
};

export const updateUser = (req: Request, res: Response) => {
    // Logic to update a user
    const { name } = req.body;
    res.status(200).json({ message: `User ${name} updated` });
};

export const deleteUser = (req: Request, res: Response) => {
    // Logic to delete a user
    const { name } = req.body;
    res.status(200).json({ message: `User ${name} deleted` });
};