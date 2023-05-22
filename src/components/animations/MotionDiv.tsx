import React from 'react'
import { motion } from 'framer-motion'

interface MotionDivProps {
	children: [React.ReactElement, React.ReactElement]
	css?: string
}

export function MotionDiv({ children, css }: MotionDivProps) {
	return (
		<motion.div
			className={`space-y-5 flex-1 ${css}`}
			initial={{ opacity: 0, y: 70 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 2, type: 'tween' }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	)
}
