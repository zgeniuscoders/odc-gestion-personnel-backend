import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Department from '#models/department'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Poste extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare grade: string

  @column()
  declare departmentId: number

  @belongsTo(() => Department)
  declare department: relations.BelongsTo<typeof Department>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
