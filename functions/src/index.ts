import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';  
import * as express from 'express';
import * as cors from 'cors';
import { routes } from './router';

//=================== Firebase Credenciales =====================// 
admin.initializeApp(functions.config().firebase);

//=================== Firebase Base de Datos =====================//
const db = admin.firestore(); //Base de datos de collections & documents
db.settings({ignoreUndefinedProperties : true, timestampsInSnapshot: true});

//=================== Servidor EXPRESS =====================//
const server = express();
server.use(cors({origin: true}));

//=================== RUTAS =====================//
routes(server);

//=================== Exportacion del Servidor =====================//
export { db };
export const api = functions.https.onRequest(server);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });