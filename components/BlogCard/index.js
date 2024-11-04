import Image from 'next/image'
import React from 'react'

const BlogCard = ({ image, title, date, description, person }) => {
	return (
		<div>
			<div className='w-[300px] h-[424px] flex flex-col gap-4 justify-between max-lg:gap-1 max-sm:h-[450px] max-lg:h-[400px] max-lg:mb-[1rem] max-md:w-[80vw]'>
				<div className=''>
					<div className=' w-full h-[209px] max-md:h-[250px] relative rounded-lg mb-[1rem]'>
						<Image
							src={image}
							alt={title}
							fill
							objectPosition='center'
							className='rounded-lg max-md:object-top object-cover'
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
