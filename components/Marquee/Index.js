import React from 'react'
import presto from '@/public/images/presto.png'
import boldo from '@/public/images/boldo.png'
import Image from 'next/image'

const Marquee = () => {
	return (
		<div className=' animate-marquee whitespace-nowrap flex w-[90vw] mx-auto relative items-center justify-between max-md:w-[150vw]'>
			<span className=' absolute bg-gradient-to-r from-dark-blue to-transparent w-[40rem] h-[5rem] z-10 left-0 max-md:w-[10rem]'></span>
			<span className='w-[9rem] max-md:w-[14rem] h-[3rem] relative mx-4'>
				<Image src={boldo} alt='' fill style={{ objectFit: 'contain' }} />
			</span>
			<span className='w-[9rem] max-md:w-[14rem] h-[3rem] relative mx-4'>
				<Image src={presto} alt='' fill style={{ objectFit: 'contain' }} />
			</span>
			<span className='w-[9rem] max-md:w-[14rem] h-[3rem] relative mx-4'>
				<Image src={boldo} alt='' fill style={{ objectFit: 'contain' }} />
			</span>
			<span className='w-[9rem] max-md:w-[14rem] h-[3rem] relative mx-4'>
				<Image src={presto} alt='' fill style={{ objectFit: 'contain' }} />
			</span>
			<span className='w-[9rem] max-md:w-[14rem] h-[3rem] relative mx-4'>
				<Image src={boldo} alt='' fill style={{ objectFit: 'contain' }} />
			</span>
			<span className='w-[9rem] max-md:w-[14rem] h-[3rem] relative mx-4'>
				<Image src={presto} alt='' fill style={{ objectFit: 'contain' }} />
			</span>
			<span className='w-[9rem] max-md:w-[14rem] h-[3rem] relative mx-4'>
				<Image src={boldo} alt='' fill style={{ objectFit: 'contain' }} />
			</span>
			<span className=' absolute bg-gradient-to-l from-dark-blue to-transparent w-[40rem] h-[5rem] z-4 right-0 max-md:w-[10rem]'></span>
		</div>
	)
}

export default Marquee
