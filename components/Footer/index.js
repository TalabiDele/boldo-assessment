import Image from 'next/image'
import React from 'react'
import logo from '@/public/images/logo-dark.png'
import Link from 'next/link'

const Footer = () => {
	const footerItems = [
		{
			header: 'Landings',
			lists: ['Home', 'Products', 'Services'],
		},
		{
			header: 'Company',
			lists: ['Home', 'Careers', 'Services'],
		},
		{
			header: 'Resources',
			lists: ['Blog', 'Products', 'Services'],
		},
	]

	return (
		<div className=' w-[90vw] mx-auto  text-gray text-[1rem] pb-[5rem]'>
			<div className=' flex flex-wrap justify-between'>
				<div className=' w-[20rem]'>
					<div className='relative w-[7rem] h-[4rem] mb-[1rem]'>
						<Image
							src={logo}
							alt='logo'
							fill
							style={{ objectFit: 'contain' }}
						/>
					</div>
					<p className=''>
						Social media validation business model canvas graphical user
						interface launch party creative facebook iPad twitter.
					</p>
				</div>

				{footerItems.map((item, index) => (
					<div className=' flex flex-col pt-[1rem]' key={index}>
						<h3 className=' text-dark-blue font-bold mb-[2rem]'>
							{item.header}
						</h3>
						<div className=' flex flex-col justify-between '>
							{item.lists.map((list) => (
								<Link
									key={index}
									href=''
									className='mb-[1rem] hover:text-green'
								>
									{list}
								</Link>
							))}
						</div>
					</div>
				))}
			</div>

			<p className=''>All rights reserved.</p>
		</div>
	)
}

export default Footer
