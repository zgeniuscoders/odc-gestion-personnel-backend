import vine from '@vinejs/vine'

export const validationCreationPostes = vine.compile(
  vine.object({
    name: vine.string(),
    grade: vine.string(),
    departmentId: vine.number().unique({ table: 'departements', column: 'id' }),
  })
)
