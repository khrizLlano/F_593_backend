import { Request, Response } from "express";
import { db } from "../index";
import { Jugador } from "../models/jugador_models";
import { Respuesta } from "../models/respuesta";

export async function listJugadores(req: Request, res: Response) {       
    try {        
        let snapshot = await db.collection("Jugadores").get();
        return res.status(200).json(snapshot.docs.map(doc => Jugador(doc.data(), doc.id)));                 
    } catch (err) {
        return handleError(res, err);
    }       
};

export async function consultarJugador(req: Request, res: Response) {       
    try {        
        let id = req.params.id;
        let snapshot = await db.collection("Jugadores").where("idEquipo","==",id).get();
        return res.status(200).json(snapshot.docs.map(doc => Jugador(doc.data(), doc.id)));                
    } catch (err) {
        return handleError(res, err);
    }       
};

export async function createJugador(req: Request, res: Response) {           
    try{                    
        const newJugador = Jugador(req.body);
        const JugadorAdded = await db.collection("Jugadores").add(newJugador);                                    
        return res.status(201).json(Respuesta(`Jugador agregado para el equipo ${newJugador.idEquipo}`, `El Jugador fue agregado correctamente con el id ${JugadorAdded.id}`, newJugador, 201));
    }
    catch(err){
        return handleError(res, err);
    }
}

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}