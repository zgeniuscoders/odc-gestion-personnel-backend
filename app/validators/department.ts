import vine from '@vinejs/vine'

export const validationCreationDepartment = vine.compile(
  vine.object({
    nom: vine.string(),
    description: vine.string(),
  })
)
