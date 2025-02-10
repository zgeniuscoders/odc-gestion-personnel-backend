import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'personnel'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string("Nom").notNullable()
      table.string("post_nom").notNullable()
      table.string("prenom").notNullable()
      table.integer("age").notNullable()
      table.string("genre").notNullable()
      table.string("nationalité").notNullable()

      table.integer('poste_id').unsigned().references("postes.id")



      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}