import Image from 'next/image'
import React from 'react'
import image from '@/public/images/connect-img.jpeg'
import SectionHeader from '../SectionHeader'
import BtnIconSm from '../Buttons/BtnIconSm'
import { IoChevronDown } from 'react-icons/io5'

const FaqSection = () => {
	const faqItems = [
		'We connect our customers with the best?',
		'Android research & development rockstar?',
	]

	return (
		<div className='w-[90vw] mx-auto mb-[5rem]'>
			<div className=' w-full h-[403px] relative mb-[2rem]'>
				<Image
					src={image}
					alt='image'
					fill
					style={{ objectFit: 'cover' }}
					className='rounded-lg'
				/>
			</div>

			<div className=' flex justify-between max-md:flex-col max-md:gap-4'>
				<SectionHeader
					text={
						'We connect our customers with the best, and help them keep up-and stay open.'
					}
				/>

				<div className=''>
					{faqItems.map((item, index) => (
						<div
							className=' flex items-center justify-between w-[25rem] max-md:w-full mb-[1rem] pb-[1rem] border-b border-[#C4C4C4]'
							key={index}
						>
							<p className=''>{item}</p>
							<BtnIconSm icon={<IoChevronDown />} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default FaqSection
