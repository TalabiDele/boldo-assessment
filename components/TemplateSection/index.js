import React from 'react'
import Header from '../Header/Index'
import albus from '@/public/images/albus.png'
import snape from '@/public/images/snape.png'
import harry from '@/public/images/harry.png'
import TemplateCard from '../TemplateCard'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import BtnIconLg from '../Buttons/BtnIconLg'

const TemplateSection = () => {
	const cardItems = [
		{
			description:
				'Buyer buzz partner network disruptive non-disclosure agreement business',
			person: {
				image: albus,
				designation: 'Manager @ Howarts',
				name: 'Albus Dumbledore',
			},
		},
		{
			description:
				'Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.',
			person: {
				image: snape,
				designation: 'Manager @ Slytherin',
				name: 'Severus Snape',
			},
		},
		{
			description:
				'Buyer buzz partner network disruptive non-disclosure agreement business',
			person: {
				image: harry,
				designation: 'Team Leader @ Gryffindor',
				name: 'Harry Potter',
			},
		},
	]

	return (
		<div className=' bg-dark-blue mt-[15rem] mb-[5rem] pb-[5rem]'>
			<div className=' w-[90vw] mx-auto'>
				<div className=' flex items-end justify-between mb-[3rem]'>
					<Header
						headerText={
							'An enterprise template to ramp up your company website'
						}
						color={'white'}
					/>
					<div className=' flex gap-5'>
						<BtnIconLg icon={<FaArrowLeft />} />
						<BtnIconLg icon={<FaArrowRight />} />
					</div>
				</div>

				<div className=' flex justify-between flex-wrap gap-5 max-md:justify-center'>
					{cardItems.map((item, index) => (
						<TemplateCard
							key={index}
							description={item.description}
							person={item.person}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default TemplateSection
