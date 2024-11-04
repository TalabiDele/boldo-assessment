import React from 'react'
import statsOne from '@/public/images/stats-1.png'
import statsTwo from '@/public/images/stats-2.png'
import statsThree from '@/public/images/stats-3.png'
import top from '@/public/images/top.png'
import Image from 'next/image'
import { HeroImageOneStyle } from '@/utils/styles'

const Stats = () => {
	return (
		<div>
			<div className={HeroImageOneStyle}>
				<div className=' relative w-[2rem] h-[1rem]'>
					<Image src={top} alt='nav' fill style={{ objectFit: 'contain' }} />
				</div>
				<div className=' w-[] h-full relative'>
					<Image src={statsOne} alt='' fill style={{ objectFit: 'contain' }} />
				</div>
			</div>

			<div className='flex justify-between'>
				<div className='bg-white/30 backdrop-blur-md shadow-lg border-white/20 rounded-lg p-[1rem] w-[192.18px]'>
					<div className=' relative w-[2rem] h-[1rem] mb-[1rem]'>
						<Image src={top} alt='nav' fill style={{ objectFit: 'contain' }} />
					</div>
					<div className=''>
						<Image src={statsTwo} alt='' />
					</div>
				</div>
				<div className='bg-white/30 backdrop-blur-md shadow-lg border-white/20 rounded-lg p-[1rem] w-[261.96px]'>
					<div className=' relative w-[2rem] h-[1rem] mb-[1rem]'>
						<Image src={top} alt='nav' fill style={{ objectFit: 'contain' }} />
					</div>
					<div className=''>
						<Image src={statsThree} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stats
