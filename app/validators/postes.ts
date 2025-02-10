import vine from '@vinejs/vine'

export const validationCreationPostes = vine.compile(
  vine.object({
    titre: vine.string(),
    salaire: vine.string(),
    description: vine.string(),
    departmentId: vine.number().exists({ table: 'departments', column: 'id' }),
  })
)
