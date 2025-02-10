import type { HttpContext } from '@adonisjs/core/http'
import { validationCreationPostes } from '#validators/postes'
import Poste from '#models/poste'

export default class PostesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const postes = await Poste.query().preload('department')
    return response.ok({ data: postes })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()
    const donnee_valider = await validationCreationPostes.validate(data)
    const poste = await Poste.create(donnee_valider)
    return response.ok({ data: poste })
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const id = params.id
    const poste = await Poste.findOrFail(id)
    return response.ok({ data: poste })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const id = params.id
    const data = request.all()
    const donnee_valider = await validationCreationPostes.validate(data)
    const poste = await Poste.query().where({ id: id }).update(donnee_valider)
    return response.ok({ data: poste })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const id = params.id
    const poste = await Poste.findOrFail(id)
    await poste.delete()
    return response.ok({ message: 'Poste supprimé' })
  }
}
