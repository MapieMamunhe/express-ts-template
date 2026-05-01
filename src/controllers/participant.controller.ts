// controllers/ParticipantController.ts
import IParticipant from '@/models/participant';
import { timeStamp } from 'console';
import { Request, Response } from 'express';
import pool from '../config/db';
import { generateNumericCode } from '../utils/codeGenerator';
export const getParticipants = (_req: Request, res: Response) => {
    // Logic to fetch Participants
    res.status(200).json({ message: "Fetched all Participants" });
};

export const createParticipant = async (req: Request, res: Response) => {
    try {
        const participant = req.body;

        // 1. Prepare data
        const statusParticipante = "NOVO";
        const codigoUnico = `E${generateNumericCode()}`;

        // 2. Fix SQL: Removed trailing comma and added the extra columns
        const sql = `
            INSERT INTO participante 
            (nome, email, telefone, provincia, instituicao, codigo_unico, status) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            participant.nome, 
            participant.email, 
            participant.telefone, 
            participant.provincia, 
            participant.instituicao, 
            codigoUnico, 
            statusParticipante
        ];

        // 3. Await the query (since you are using mysql2/promise)
        await pool.query(sql, values);

        // 4. Return success
        res.status(201).json({ 
            message: `Participant ${participant.nome} created`,
            codigoUnico // Useful to return this so the user knows their code
        });

    } catch (error) {
        console.error("Error creating participant:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateParticipant = (req: Request, res: Response) => {
    // Logic to update a Participant
    const { name } = req.body;
    res.status(200).json({ message: `Participant ${name} updated` });
};

export const deleteParticipant = (req: Request, res: Response) => {
    // Logic to delete a Participant
    const { name } = req.body;
    res.status(200).json({ message: `Participant ${name} deleted` });
};