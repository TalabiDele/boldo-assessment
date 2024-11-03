'use client'

import { cn } from '@/utils/styles'
import React from 'react'

const Btn = ({ color, type, text }) => {
	return (
		<button
			className={cn(
				`px-[2rem] py-[0.5rem] text-[1rem] font-semibold rounded-full ${
					color === 'blue' && type === 'fill' && 'bg-dark-blue text-white'
				} ${
					color === 'green' && type === 'fill' && 'bg-green text-dark-blue'
				} ${
					type === 'stroke' && 'bg-transparent border border-white text-white'
				}`
			)}
		>
			{text}
		</button>
	)
}

export default Btn