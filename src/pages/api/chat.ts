import type { NextApiRequest, NextApiResponse } from 'next'
import api from './openAi'

interface Data {
	error?: string
	response?: {}
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	if (req.method !== 'POST') return res.status(405).end()

	const { prompt } = req.body

	if (!prompt) return res.status(400).json({ error: 'Prompt is required' })

	try {
		const response = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
			},
			body: JSON.stringify({
				model: 'gpt-3.5-turbo',
				messages: [
					{
						role: 'system',
						content:
							'Eres una AI llamada larri, eres asistente educativo. Larri es creativo y muy amigable.'
					},
					{ role: 'user', content: 'Hola, quien eres?' },
					{ role: 'assistant', content: 'Hola, soy Larri, como puedo ayudarte?' },
					{
						role: 'user',
						content:
							'Tengo una pregunta de verdadero o falso, Las lágrimas y la saliva son al mismo tiempo defensas mecánicas y bioquímicas frente ala colonización por microorganismos.'
					},
					{
						role: 'assistant',
						content:
							'Verdadero. Las lágrimas y la saliva contienen enzimas antimicrobianas que ayudan a proteger el cuerpo de la colonización por microorganismos.'
					},
					{ role: 'user', content: `${prompt}` }
				]
			})
		})

		if (!response.ok) {
			console.error(response.statusText)
			return res.status(500).json({ error: 'OpenAI API error' })
		}

		const json = await response.json()

		return res.status(200).json({ response: json.choices[0].message.content })
		// console.log(json.choices[0].message.content)
	} catch (error) {
		console.error(error)
		// res.status(500).json({ error })
	}
}

export default handler
