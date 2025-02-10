import vine from '@vinejs/vine'

export const validationCreationPersonnel = vine.compile(
    vine.object({
      nom: vine.string(),
     post_nom: vine.string(),
     prenom: vine.string(),
     email: vine.string(),
     numero_de_telephone: vine.string(),
     profil: vine.string().url(),  //  comme une obligation pour l'url
     date_de_naissance: vine.date(),
     date_d_embauche: vine.date(),
     poste_id: vine.number().exists({table:"postes", column:"id"})
     
    })
  )
  