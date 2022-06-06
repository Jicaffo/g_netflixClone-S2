import express from 'express';
import { check } from 'express-validator';
import profileController from '../controllers/profileController.js';
import { validateToken } from '../middlewares/index.js';

const router = express.Router()

// === Endpoint: /api/profiles (obtiene req.userId desde validateToken) ===

// Obtiene todos los perfiles
router.get('/',
    validateToken,
    profileController.getAllProfiles
)

// Obtiene un perfil
router.get('/:profileId',
    validateToken,
    profileController.getProfile
)

// Crea un perfil
router.post('/',
    validateToken,
    [check('name')
        .isLength({min:3})
        .withMessage('El perfil debe tener 3 caracteres como mínimo')],
    profileController.postProfile
)

// Actualiza los datos de un perfil
router.patch('/:profileId',
    validateToken,
    profileController.patchProfile
)

// Borra un perfil
router.delete('/:profileId',
    validateToken,
    profileController.deleteProfile
)



// === Endpoint: api/profiles/:profileid/lists ===
 
// DELETE /users/:userid/profiles/:profileid/lists/:listName/:mediaId/  

// Obtiene todas las listas del perfil
router.get('/:profileId/lists',
    validateToken,
    profileController.getAllProfileLists
)

// Obtiene una lista // TOFIX: Con errores en la implementación
// router.get('/:profileId/lists/:listName',
//     validateToken,
//     profileController.getOneList
// )

// Agrega una lista al perfil
router.post('/:profileId/lists',
    validateToken,
    profileController.postList
)

// Obtiene todos los recursos multimedia de una lista
router.get('/:profileId/lists/:listName',
    validateToken,
    profileController.getAllMediaFromList
)

// Obtiene un recurso multimedia de una lista // TODO: Es necesario en alguna situación?
router.get('/:profileId/lists/:listName/:mediaId/',
    validateToken,
    profileController.getOneMediaFromList
)

// Elimina un recurso multimedia de una lista
router.delete('/:profileId/lists/:listName/:mediaId/',
    validateToken,
    profileController.deleteOneMediaFromList
)

// Agrega un recurso multimedia a una lista dentro del perfil
router.post('/:profileId/lists/:listName/:mediaId/',
    validateToken,
    profileController.postMediaToList
)


export { router }