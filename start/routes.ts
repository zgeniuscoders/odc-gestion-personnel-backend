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
import PersonnelController from '#controllers/personnel_controller'
import AuthController from '#controllers/auth_controller'
import { middleware } from '#start/kernel'

router.post('login', [AuthController, 'login'])
router.post('register', [AuthController, 'register'])

router
  .group(() => {
    router.post('logout', [AuthController, 'logout'])

    router.resource('departements', DepartementsController)
    router.resource('postes', PostesController)
    router.resource('personnels', PersonnelController)
  })
  .use(middleware.auth({ guards: ['api'] }))
