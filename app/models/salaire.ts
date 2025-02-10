import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Poste from './poste.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'
import * as relations from '@adonisjs/lucid/types/relations'


export default class Salaire extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
// creation des colonne de notre table 
  @column()
  declare montant : number
  @column()
  declare posteId : string

  @belongsTo(() => Poste)
  declare postes: relations.BelongsTo<typeof Poste>
 


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}