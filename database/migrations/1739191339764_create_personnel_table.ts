import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'personnel'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nom').notNullable()
      table.string('postnom').notNullable()
      table.string('prenom').notNullable()
      table.string('email').notNullable()
      table.string('numero_telephone').notNullable()

      table.string('profile').notNullable()

      table.date('date_naissance').notNullable()
      table.date('date_embauche').notNullable()

      table.integer('poste_id').unsigned().references('postes.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
