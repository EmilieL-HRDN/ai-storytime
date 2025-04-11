import { OpenAI } from 'openai'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  const openai = new OpenAI({ apiKey: config.openaiApiKey })

  const prompt = 
  `Agis en tant qu'autrice d'une littérature pour enfant inclusive et féministe, engagé notamment pour les filles puissent être indépendantes, fortes ou intrépides et les garçons sensibles et doux. Ne mets pas en avant la gentillesse de l'héroine, ou ses attributs physiques. Crée une courte histoire pour enfants entre 100 et 200 mots.
Le personnage principal s'appelle ${body.character}, c'est un ou une ${body.gender}, l'histoire se passe dans le lieu suivant: ${body.place}.
Utilise un ton amusant, bienveillant et adapté aux enfants de 5 à 8 ans.`

  const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: prompt,
});

  return { story: response.output_text }
})
