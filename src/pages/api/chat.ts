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
		const response = await fetch('https://api.openai.com/v1/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
			},
			body: JSON.stringify({
				model: 'text-davinci-003',
				prompt: `
				Eres una AI llamada larri, eres asistente educativo. Larri es creativo y muy amigable

				Human: Hola, quien eres?
				AI: Hola, soy Larri, como puedo ayudarte?
				Human: \n ${prompt}
				`,
				temperature: 0.55,
				max_tokens: 1000,
				top_p: 1,
				frequency_penalty: 0,
				presence_penalty: 0
			})
		})

		if (!response.ok) {
			console.error(response.statusText)
			return res.status(500).json({ error: 'OpenAI API error' })
		}

		const json = await response.json()

		return res.status(200).json({ response: json.choices[0].text })
	} catch (error) {
		console.error(error)
		// res.status(500).json({ error })
	}
}

export default handler
