import Image from 'next/image'
import React from 'react'

const BlogCard = ({ image, title, date, description, person }) => {
	return (
		<div>
			<div className='w-[344px] h-[424px] flex flex-col gap-4 justify-between'>
				<div className=''>
					<div className=' w-full h-[209px] relative rounded-lg mb-[1rem]'>
						<Image
							src={image}
							alt={title}
							fill
							style={{ objectFit: 'cover' }}
							objectPosition='center'
							className='rounded-lg'
						/>
					</div>
					<div className=''>
						<div className=' flex items-center text-[1rem] gap-2 mb-[1rem]'>
							<h3 className=' text-dark-blue font-bold'>{title}</h3>
							<p className=' text-gray'>{date}</p>
						</div>

						<p className=' text-[1.2rem]'>{description}</p>
					</div>
				</div>

				<div className=' flex items-center gap-3 justify-self-end'>
					<div className=' h-[2rem] w-[2rem] rounded-full relative'>
						<Image
							src={person.image}
							alt={person.name}
							fill
							style={{ objectFit: 'cover' }}
							className='rounded-full'
						/>
					</div>

					<p className=' text-dark-blue text-[0.8rem]'>{person.name}</p>
				</div>
			</div>
		</div>
	)
}

export default BlogCard
