import {Application} from 'express';
import { listEquipos, consultarEquipo, createEquipo } from './controllers/equipo_controllers';
import { listJugadores, createJugador, consultarJugador } from './controllers/jugador_controllers';
import { registro } from './controllers/autenticacion_controllers';

export function routes(app:Application) {
    app.get('/api/equipo', listEquipos);
    app.get('/api/equipo/:id', consultarEquipo);
    app.post('/api/equipo', createEquipo);

    app.get('/api/jugador', listJugadores);
    app.post('/api/jugador', createJugador);
    app.get('/api/jugador/:id', consultarJugador);

    app.post('/api/registro', registro);
}