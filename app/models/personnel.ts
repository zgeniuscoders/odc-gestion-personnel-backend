import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'
import Poste from './poste.js'

export default class Personnel extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare posteId: number

  @column()
  declare nom: string

  @column()
  declare postnom: string

  @column()
  declare prenom: string

  @column()
  declare email: number

  @column()
  declare numeroTelephone: string

  @column()
  declare profile: string

  @column.date()
  declare dateNaissance: DateTime

  @column.date()
  declare dateEmbauche: DateTime

  @belongsTo(() => Poste)
  declare poste: relations.BelongsTo<typeof Poste>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
