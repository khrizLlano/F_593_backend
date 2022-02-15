import { Request, Response } from "express";
import { db } from "../index";
import { Equipo } from "../models/equipo_models";
import { Respuesta } from "../models/respuesta";

export async function listEquipos(req: Request, res: Response) {       
    try {        
        let snapshot = await db.collection("Equipos").get();
        return res.status(200).json(snapshot.docs.map(doc => Equipo(doc.data(), doc.id)));                 
    } catch (err) {
        return handleError(res, err);
    }       
};

export async function consultarEquipo(req: Request, res: Response) {           
    try{
        const doc = await db.collection("Equipos").doc(req.params.id).get();
        if(!doc) {
            return res.status(404).json(Respuesta('Equipo no encontrado', `Equipo con el id ${req.params.id} no encontrado`, { req }, 404));               
        }        
        return res.status(200).json(Equipo(doc.data(), doc.id));
    }
    catch(err){
        return handleError(res, err);
    }
}

export async function createEquipo(req: Request, res: Response) {           
    try{                    
        const newEquipo = Equipo(req.body);
        const EquipoAdded = await db.collection("Equipos").add(newEquipo);                            
        return res.status(201).json(Respuesta('Equipo agregado', `El Equipo fue agregado correctamente con el id ${EquipoAdded.id}`, newEquipo, 201));
    }
    catch(err){
        return handleError(res, err);
    }
}

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}