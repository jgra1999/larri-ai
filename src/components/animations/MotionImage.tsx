import React from 'react'
import { motion } from 'framer-motion'

interface MotionImageProps {
	imgUrl: string
	imgAlt: string
}

export function MotionImage({ imgUrl, imgAlt }: MotionImageProps) {
	return (
		<>
			<motion.img
				initial={{ opacity: 0, y: 70 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 2, type: 'tween' }}
				viewport={{ once: true }}
				src={imgUrl}
				alt={imgAlt}
				width='675.6'
				height='380'
				className='sm:h-[460px] md:h-auto'
				loading='lazy'
			/>
		</>
	)
}
