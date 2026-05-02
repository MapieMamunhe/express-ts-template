import pool from "../config/db";
import IEvento from "../models/evento";
import { Request, Response } from "express";
import { ResultSetHeader } from 'mysql2/promise';

export const getEventos = async (req: Request, res: Response) => {
    try {
        const sql = "SELECT * FROM evento";

        const [rows] = await pool.query<IEvento[]>(sql);

        return res.status(200).json({
            message: "Fetched all eventos",
            data: rows
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const createEvento = async (req: Request, res: Response) => {
    try {
        const evento = req.body as IEvento & { bilhetes: number };
        const user = (req as any).user;
        console.log(user)
        const sql = `
            INSERT INTO evento 
            (nome, data_evento, hora_evento, preco, descricao, local, user_id)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await pool.query<ResultSetHeader>(sql, [
            evento.nome,
            evento.data_evento,
            evento.hora_evento,
            evento.preco,
            evento.descricao,
            evento.local,
            user.id
        ]);

        const eventoId = result.insertId;

        const createBilheteSQL = `
            INSERT INTO bilhete (codigo_bilhete, evento_id,  status, expira_em)
            VALUES (?, ?, ?, ?)
        `;

        // Better: batch insert instead of loop
        const bilhetesPromises = [];

        for (let i = 0; i < evento.bilhetes; i++) {
            bilhetesPromises.push(
                pool.query(createBilheteSQL, [
                    `BILHETE-${eventoId}-${i + 1}`,
                    eventoId,
                    'AVAILABLE',
                    evento.data_evento
                ])
            );
        }

        await Promise.all(bilhetesPromises);

        return res.status(201).json({
            message: "Evento created successfully",
            eventoId
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getEvento = (req: Request, res: Response) => {
    // Logic to fetch a single evento
    const { id } = req.params;
    res.status(200).json({ message: `Fetched evento ${id}` });
};

export const updateEvento = (req: Request, res: Response) => {
    // Logic to update a evento
    const { id } = req.params;
    res.status(200).json({ message: `Evento ${id} updated` });
};

export const deleteEvento = (req: Request, res: Response) => {
    // Logic to delete a evento
    const { id } = req.params;
    res.status(200).json({ message: `Evento ${id} deleted` });
};
