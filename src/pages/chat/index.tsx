import React from 'react'

import { Layout } from '@/layout/Layout'
import { ChatForm } from '@/components/Chat/ChatForm'
import { Message } from '@/components/Chat/Message'

export default function index() {
	const messages = [
		{
			id: '1',
			ai: false,
			message: 'Que son las IA?'
		},
		{
			id: '2',
			ai: true,
			message:
				'La Inteligencia Artificial (IA) es la habilidad de una máquina para simular la inteligencia y el comportamiento humano. Esto se logra mediante el uso de algoritmos, estructuras de datos y programación para permitir que la máquina sea capaz de razonar, aprender y tomar decisiones. La IA se utiliza para desarrollar sistemas autónomos, robots y software que pueden tomar decisiones inteligentes basadas en los datos que reciben. Los algoritmos de IA también se utilizan para analizar grandes volúmenes de datos y descubrir patrones ocultos o para predecir comportamientos futuros?'
		}
	]

	return (
		<div className='w-full h-screen relative'>
			<Layout title='Larri AI - Chat'>
				<div className='flex flex-col h-full flex-1'>
					{messages.map((entry) => (
						<Message key={entry.id} message={entry.message} ai={entry.ai} />
					))}
					<ChatForm />
				</div>
			</Layout>
		</div>
	)
}
