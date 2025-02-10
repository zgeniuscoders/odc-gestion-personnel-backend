import type { HttpContext } from '@adonisjs/core/http'
import Department from '#models/department'
import { validationCreationDepartment } from '#validators/department'

export default class DepartementsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const departments = await Department.all()
    return response.ok({ data: departments })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()
    const donnee_valider = await validationCreationDepartment.validate(data)
    const department = await Department.create(donnee_valider)
    return response.ok({ data: department })
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const id = params.id
    const department = await Department.findOrFail(id)
    department.load('postes')

    return response.ok({ data: department })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const id = params.id
    const data = request.all()

    const department = await Department.query().where({ id: id }).update(data)

    return response.ok({ data: department })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const id = params.id
    const department = await Department.findOrFail(id)
    await department.delete()

    return response.ok({ data: 'okay' })
  }
}
