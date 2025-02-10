import vine from '@vinejs/vine'

export const validationCreationDepartment = vine.compile(
  vine.object({
    name: vine.string(),
  })
)
