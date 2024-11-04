'use client'

import { cn } from '@/utils/styles'
import React from 'react'

const Btn = ({ color, type, text }) => {
	return (
		<button
			className={cn(
				`px-[2rem] py-[0.5rem] text-[1rem] font-semibold rounded-full transition-all ease-in-out duration-75 ${
					color === 'blue' &&
					type === 'fill' &&
					'bg-dark-blue text-white w-[9rem] hover:opacity-[0.8]'
				} ${
					color === 'green' &&
					type === 'fill' &&
					'bg-green text-dark-blue hover:opacity-[0.8]'
				} ${
					type === 'stroke' &&
					'bg-transparent border-2 border-white text-white hover:border-green hover:text-green'
				} ${
					type === 'stroke' &&
					color === 'blue' &&
					'bg-transparent border-2 border-dark-blue text-dark-blue'
				}`
			)}
		>
			{text}
		</button>
	)
}

export default Btn
