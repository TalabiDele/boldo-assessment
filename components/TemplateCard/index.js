import Image from 'next/image'
import React from 'react'

const TemplateCard = ({ description, person }) => {
	return (
		<div>
			<div className=' bg-white shadow-md rounded-lg w-[350px] p-[2rem] max-md:w-[80vw] max-md:mx-auto'>
				<div className=' text-[1.5rem] mb-[1rem]'>"{description}"</div>
				<div className=' flex items-center gap-3'>
					<div className=' w-[3rem] h-[3rem] relative rounded-full'>
						<Image
							src={person.image}
							alt={person.name}
							fill
							style={{ objectFit: 'cover' }}
							className='rounded-full'
						/>
					</div>

					<div className=' text-dark-blue'>
						<h3 className=' text-[1rem] font-bold'>{person.name}</h3>
						<p className='text-[0.8rem]'>{person.designation}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TemplateCard
