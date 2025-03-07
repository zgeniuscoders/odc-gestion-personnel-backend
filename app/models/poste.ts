import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Department from '#models/department'
import * as relations from '@adonisjs/lucid/types/relations'
import Personnel from '#models/personnel'

export default class Poste extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare titre: string

  @column()
  declare description: string

  @column()
  declare salaire: number

  @column()
  declare departmentId: number

  @hasMany(() => Personnel)
  declare personnels: relations.HasMany<typeof Personnel>

  @belongsTo(() => Department)
  declare department: relations.BelongsTo<typeof Department>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
