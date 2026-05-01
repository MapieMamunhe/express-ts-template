// controllers/userController.ts
import { Request, Response } from 'express';
import pool from '../config/db';
import bcrypt from 'bcrypt';
import IUser from '@/models/user';
import { QueryResult, RowDataPacket } from 'mysql2';
import { generateAccessToken } from '../utils/jwt';

interface IUserRow extends RowDataPacket {
    id: number;
    email: string;
    password: string;
}
export const getUsers = (req: Request, res: Response) => {
    // Logic to fetch users
    res.status(200).json({ message: "Fetched all users" });
};
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body as IUser;

    const sql = 'SELECT * FROM user WHERE email = ?';

    const [rows] = await pool.query<IUserRow[]>(sql, [email]);

    const user = rows[0] ;

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateAccessToken({
        id: user.id,
        email: user.email
    });

    return res.status(200).json({
        message: "Login successful",
        token
    });};

export const createUser = async (req: Request, res: Response) => {
    // Logic to create a user
    const user = req.body as IUser;
    const saltRounds = 10;
    
    // This generates a salt and hashes the password together
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    const sql = 'INSERT INTO user (nome, email, password) VALUES (?, ?, ?)';

    var result =pool.query(sql, [user.nome, user.email, hashedPassword]);

    console.log(result);

    res.status(201).json({ message: `User ${user.nome} created` });
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