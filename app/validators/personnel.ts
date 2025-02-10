import vine from '@vinejs/vine'

export const validationCreationPersonnel = vine.compile(
  vine.object({
    nom: vine.string(),
    postnom: vine.string(),
    prenom: vine.string(),
    email: vine.string(),
    numeroTelephone: vine.string(),
    profile: vine.string().url(), //  comme une obligation pour l'url
    dateNaissance: vine.string(),
    dateEmbauche: vine.string(),
    posteId: vine.number().exists({ table: 'postes', column: 'id' }),
  })
)
