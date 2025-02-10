import type { HttpContext } from '@adonisjs/core/http'
import { validationCreationPersonnel } from '#validators/personnel'
import Personnel from '#models/personnel'

export default class PersonnelController {
  //  cette fonction  permet de recuperer tout les personelles
  async index({ response }: HttpContext) {
    const personnels = await Personnel.query().preload('poste')
    return response.ok({ data: personnels })
  }

  async store({ request, response }: HttpContext) {
    const data = request.all()
    const donneeValider = await validationCreationPersonnel.validate(data)
    const personnel = await Personnel.create(donneeValider)
    return response.ok({ data: personnel })
  }

  async show({ params, response }: HttpContext) {
    const id = params.id
    const personnel = await Personnel.findOrFail(id)
    personnel.load('poste')

    return response.ok({ data: personnel })
  }

  // UNE fonction pour modifier ou mettre a jour  les employes
  async update({ params, request, response }: HttpContext) {
    const id = params.id
    const data = request.all()

    const donneeValider = await validationCreationPersonnel.validate(data)
    const personnel = await Personnel.query().where({ id: id }).update(donneeValider)

    return response.ok({ data: personnel })
  }

  // Fonction pour supprimer les personnels
  async destroy({ params, response }: HttpContext) {
    const id = params.id
    const personnel = await Personnel.findOrFail(id)
    await personnel.delete()

    return response.ok({ data: 'le personnel a été suprime avec succes' })
  }
}
