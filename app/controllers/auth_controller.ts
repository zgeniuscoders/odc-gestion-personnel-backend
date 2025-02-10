// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { createUserValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'
import User from '#models/user'

@inject()
export default class AuthController {
  async login({ request, response }: HttpContext) {
    const { email, password } = request.all()

    // verifie si l'utilisateur existe et si le mot de passe est correct'
    const user = await User.verifyCredentials(email, password)

    // permet de cree une cle d'access
    const authToken = await User.accessTokens.create(user)

    return response.ok({ data: authToken })
  }

  // methode pour deconnecter un utilisateur et supprimer sa session
  async logout({ auth, response }: HttpContext) {
    // permet de recuperer l'utilisateur connecter
    const user = auth.getUserOrFail()
    const token = auth.user?.currentAccessToken.identifier

    if (!token) {
      return response.badRequest({ message: 'Token not found' })
    }

    // supprime le token de l'utilisateur dans la base de donnees'
    await User.accessTokens.delete(user, token)

    return response.ok({ message: 'Token deleted' })
  }

  // enregistre un utilusateur dans la base de donnees
  async register({ request, response }: HttpContext) {
    const data = request.all()
    const donneValider = await createUserValidator.validate(data)
    const utilisateur = User.create(donneValider)
    return response.created({ data: utilisateur })
  }
}
