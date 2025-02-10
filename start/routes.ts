/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import DepartementsController from '#controllers/departements_controller'
import PostesController from '#controllers/postes_controller'

router.resource('departements', DepartementsController)
router.resource('postes', PostesController)
