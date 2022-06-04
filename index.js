import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { router as apiRouter } from './routes/apiRouter.js';

const app = express()

// Configuración a la Base de datos
dotenv.config({path: '.env'});
connectDB();

// Settings
// Setea la variable de entorno como prioridad
const PORT = process.env.PORT || 4000;
app.set("port", PORT);
const corsOptions = {}

// Configura CORS abierto para habilitar acceso desde cualquier URL
app.use(cors());

// Establece comunicación cliente/servidor en formato JSON
app.use(express.json({ extender: true}))

// Agrega un middleware que loguea cada petición (para realizar pruebas en etapa de desarrollo)
app.use(morgan('dev'));

// Rutas
app.use('/api', apiRouter)
//app.use('/api/v2', apiRouterV2) // Si hubiera más versiones


app.listen(app.get("port"), () =>{
    console.log(`Server running on port ${app.get("port")}`)
})


// Ruta de Películas en Netflix Original: /watch/81111324?trackId=253448517&tctx=5%2C0%...sarasa
// NTH: Unificar declaración de variables en la parte superior de todos los controladores con los parametros recibidos por url.
// NTH: Unificar formato de peticiones (idealmente refactorizar en funciones).
// NTH: Revisar try-catch y si están bien implementados los if con returns de responses.
// NTH: getRecommendedMedia, searchBy (query parameters), validaciones,
// NTH: unificar uso de bcryptjs (userController y authController) / bcrypt (último, implementado en models/User) y desinstalar el otro.
// NTH: Deberíamos poder revocar los permisos del JWT ante logout o eliminar usuario para que no pueda acceder más. blacklist?

// TODO: Simplificar URLs. Queda ver de Lists en adelante
// TODO: Repasar y definir modelos User / Profile / List entre front y back