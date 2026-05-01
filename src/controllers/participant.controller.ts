// controllers/ParticipantController.ts
import { Request, Response } from 'express';

export const getParticipants = (_req: Request, res: Response) => {
    // Logic to fetch Participants
    res.status(200).json({ message: "Fetched all Participants" });
};

export const createParticipant = (req: Request, res: Response) => {
    // Logic to create a Participant
    const { name } = req.body;
    res.status(201).json({ message: `Participant ${name} created` });
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