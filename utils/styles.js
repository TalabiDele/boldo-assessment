'use client'

import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs) => {
	return twMerge(clsx(inputs))
}

// Navigation menu style
export const navStyle = clsx(
	'flex justify-between items-center w-[90vw] absolute left-0 right-0 mx-auto py-[1rem] [&>ul]:flex [&>ul]:gap-10 [&>ul]:items-center z-[4]'
)

// Navigation list style
export const listStyle = clsx(
	'font-medium text-[1rem] text-white hover:border-b hover:border-white transition-all ease-in-out duration-75'
)

// Hero background circle style
export const bgCircle = clsx(
	'bg-[#1C3D5B] h-[1293px] w-[1293px] absolute left-[777px] -top-[789px] rounded-full z-3 overflow-x-hidden'
)

// Navigation button style
export const navButtonStyle = clsx(
	'bg-white text-dark-blue px-[2rem] py-[0.5rem] font-semibold rounded-full hover:opacity-[0.8] transition-all ease-in-out duration-100'
)

export const btnTextStyle = clsx(
	'text-dark-blue font-semibold text-[1rem] pb-[0.5rem] border-b border-dark-blue flex items-center gap-3 hover:text-green hover:border-green transition-all ease-in-out duration-75'
)

// Hero section style
export const heroContainer = clsx('bg-dark-blue w-[100vw] h-[100vh]')

export const heroStyle = clsx(
	'flex items-center justify-between w-[90vw] mx-auto pt-[8rem] pb-[4rem] relative z-[2] flex-wrap'
)

export const heroLeftStyle = clsx(
	'[&>h1]:text-white [&>h1]:text-[3rem] [&>p]:text-light-gray [&>p]:text-[1rem] w-[35.438rem] grid gap-[1.5rem]'
)

export const HeroImageOneStyle = clsx(
	'bg-white/30 backdrop-blur-md shadow-lg border-white/20 rounded-lg p-[1rem] w-[493.86px] h-[231.9px] mb-[1rem]'
)

export const HeaderStyle = clsx('text-sm text-gray text-center')
