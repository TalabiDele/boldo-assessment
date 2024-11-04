import Image from 'next/image'
import React from 'react'
import BtnText from '../Buttons/BtnText'

const Cards = ({ image, title, description }) => {
	return (
		<div className=' w-[300px]'>
			<div className='w-full h-[354px] relative mb-[1rem]'>
				<Image src={image} alt={title} fill objectFit='contain' />
			</div>
			<h2 className=' text-black font-semibold text-[1.5rem] mb-[1rem]'>
				{title}
			</h2>
			<p className=' mb-[1rem] text-[1rem] text-gray'>{description}</p>

			<BtnText text={'Explore page'} />
		</div>
	)
}

export default Cards
