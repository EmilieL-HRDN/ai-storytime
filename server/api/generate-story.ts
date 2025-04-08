import { OpenAI } from 'openai'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  const openai = new OpenAI({ apiKey: config.openaiApiKey })

  const prompt = `Crée une courte histoire pour enfants entre 100 et 200 mots.
Le personnage s'appelle ${body.character}, l'histoire se passe dans ${body.place}, et un objet magique appelé ${body.object} joue un rôle important.
Utilise un ton amusant, bienveillant et adapté aux enfants de 5 à 8 ans.`

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  })

  return { story: completion.choices[0].message.content }
})
