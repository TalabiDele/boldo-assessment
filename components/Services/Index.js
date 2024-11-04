import React from 'react'
import Header from '../Header/Index'
import { CARD_LIST } from '@/utils/constants'
import Cards from '../Card'
import Connect from '../Connect'
import TemplateSection from '../TemplateSection'

const Services = () => {
	return (
		<div>
			<div className=''>
				<Header
					smallText='Our Services'
					headerText='Handshake infographic mass market crowdfunding iteration.'
					align={'center'}
				/>
				<div className=' flex justify-between w-[90vw] mx-auto'>
					{CARD_LIST.map((card, index) => (
						<Cards
							key={index}
							title={card.title}
							description={card.description}
							image={card.image}
						/>
					))}
				</div>
			</div>

			<div className=' my-[8rem]'>
				<Connect />
			</div>

			<TemplateSection />
		</div>
	)
}

export default Services
