import React from 'react'
import SectionHeader from '../SectionHeader'
import Image from 'next/image'
import connectOne from '@/public/images/connect-img-1.png'
import connectTwo from '@/public/images/connect-img-2.png'
import chart from '@/public/images/chart-connect.png'
import pie from '@/public/images/pie-graph.png'
import check from '@/public/images/list-check.svg'
import Btn from '../Buttons/Btn'
import { FiFeather } from 'react-icons/fi'
import { FiEye } from 'react-icons/fi'
import { BsBrightnessHigh } from 'react-icons/bs'

const Connect = () => {
	const list = [
		'We connect our customers with the best.',
		'Advisor success customer launch party.',
		'Business-to-consumer long tail.',
	]

	const listIcon = [
		{
			icon: <FiFeather />,
			text: 'We connect our customers with the best.',
		},
		{
			icon: <FiEye />,
			text: 'Advisor success customer launch party.',
		},
		{
			icon: <BsBrightnessHigh />,
			text: 'Advisor success customer launch party.',
		},
	]

	return (
		<div className='w-[90vw] mx-auto grid gap-[10rem]'>
			<div className=' flex justify-between items-end max-lg:justify-start max-lg:gap-5 max-md:flex-col-reverse max-md:w-full max-md:items-start'>
				<div className=''>
					<div className=' relative w-[494px] max-lg:w-auto'>
						<div className=' w-full h-[506px] relative max-lg:w-[350px] max-md:w-[80vw]'>
							<Image
								src={connectOne}
								alt=''
								fill
								className=' object-contain max-md:object-cover rounded-lg'
							/>
						</div>
						<div className=' absolute bg-white shadow-lg p-[2rem] rounded-lg right-[3rem] -bottom-[5rem] max-lg:left-[5rem] max-md:w-[15rem] mx-auto'>
							<div className=' relative h-[227.21px] w-[170px] max-lg:w-[140px] max-lg:h-[200px]'>
								<Image
									src={chart}
									alt='chart'
									fill
									style={{ objectFit: 'contain' }}
								/>
							</div>
							<h2 className='text-dark-blue text-[1.2rem] font-semibold mt-[1rem]'>
								30%
							</h2>
							<p className=' text-dark-blue text-[0.8rem]'>
								More income in June
							</p>
						</div>
					</div>
				</div>

				<div className=' flex flex-col gap-10 max-lg:w-[50vw] max-md:w-full max-md:gap-4 max-md:mb-[3rem]'>
					<SectionHeader
						text={
							'We connect our customers with the best, and help them keep up-and stay open.'
						}
					/>

					<ul className=''>
						{list.map((item, index) => (
							<li className=' flex items-center gap-3 mb-[1rem]' key={index}>
								<Image src={check} priority alt='checkmark' />
								{item}
							</li>
						))}
					</ul>

					<Btn text={'Start now'} color={'blue'} type={'fill'} />
				</div>
			</div>

			<div className=' flex justify-between items-end max-lg:justify-start max-lg:gap-5 max-md:flex-col max-md:w-full max-md:items-start'>
				<div className=' flex flex-col gap-10 '>
					<SectionHeader
						text={
							'We connect our customers with the best, and help them keep up-and stay open.'
						}
					/>

					<ul className=''>
						{listIcon.map((list, index) => (
							<li
								className=' flex items-center gap-3 shadow-lg rounded-sm mb-[1rem] p-[1rem] bg-white hover:bg-dark-blue hover:text-white transition-all duration-100 ease-in-out'
								key={index}
							>
								<span className=' hover:text-white'>{list.icon}</span>
								<span className=' text-[1rem] font-semibold'>{list.text}</span>
							</li>
						))}
					</ul>
				</div>

				<div className=''>
					<div className=' relative w-[494px] max-lg:w-auto'>
						<div className=' w-[494px] h-[506px] relative max-lg:w-[350px] max-md:w-[80vw]'>
							<Image
								src={connectTwo}
								alt=''
								fill
								className=' object-contain max-md:object-cover rounded-lg'
							/>
						</div>
						<div className=' absolute bg-white shadow-lg p-[2rem] rounded-lg left-[4rem] -bottom-[10rem] grid gap-[0.5rem]'>
							<div className=' relative h-[227.21px] w-[170px]'>
								<Image
									src={pie}
									alt='chart'
									fill
									style={{ objectFit: 'contain' }}
								/>
							</div>
							<div className=' flex items-center gap-3'>
								<div className=' h-[0.5rem] w-[0.5rem] rounded-full bg-[#0DBBFC]'></div>
								<p className=''>35% - Agile Development</p>
							</div>
							<div className=' flex items-center gap-3'>
								<div className=' h-[0.5rem] w-[0.5rem] rounded-full bg-green'></div>
								<p className=''>30% - Investor bandwidth</p>
							</div>
							<div className=' flex items-center gap-3'>
								<div className=' h-[0.5rem] w-[0.5rem] rounded-full bg-[#C4C4C4]'></div>
								<p className=''>35% - A/B testing </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Connect
