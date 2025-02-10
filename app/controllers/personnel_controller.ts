import type { HttpContext } from '@adonisjs/core/http'
import Personnel from '#models/department'
import { validationCreationPersonnel } from '#validators/personnel'

export default class PersonnelController {

  async index ({response}:HttpContext){
    const personnel = await Personnel.query().preload('postes')

    return response.ok({data:personnel})
  }
    //  cette fonction  permet de recuperer tout les personelles 
    async store ({request, response}:HttpContext){
        const data = request.all()
        const valid_data = await validationCreationPersonnel.validate(data)
        const personnel = await Personnel.create(valid_data)
        return response.ok({ data: personnel })
    }

    async show({ params, response }: HttpContext) {
        const id = params.id
        const personnel = await Personnel.findOrFail(id)
        personnel.load('postes')
    
        return response.ok({ data: personnel })
      }

// UNE fonction pour modifier ou mettre a jour  les employes 
      async update({ params, request, response }: HttpContext) {
          const id = params.id
          const data = request.all()
      
          const personnel = await Personnel.query().where({ id: id }).update(data)
      
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