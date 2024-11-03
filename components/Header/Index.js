'use client'

import { cn } from '@/utils/styles'
import React from 'react'

const Header = ({ smallText, headerText, color, align }) => {
	return (
		<div
			className={cn(
				`grid gap-2 pt-[4rem] pb-[2rem] ${
					align === 'center' ? 'text-center' : 'text-left'
				} ${
					color === 'white' ? ' text-white' : 'text-black mx-auto'
				} [&>p]:text-[1rem] [&>p]:text-gray [&>h1]:text-[2.5rem] w-[60%]`
			)}
		>
			{smallText && <p>{smallText}</p>}
			<h1>{headerText}</h1>
		</div>
	)
}

export default Header
