import React from 'react'
import presto from '@/public/images/presto.png'
import boldo from '@/public/images/boldo.png'
import Image from 'next/image'

const Marquee = () => {
	return (
		<div class=' animate-marquee whitespace-nowrap flex w-[90vw] mx-auto relative items-center justify-between'>
			<span className=' absolute bg-gradient-to-r from-dark-blue to-transparent w-[40rem] h-[5rem] z-10 left-0'></span>
			<span class='w-[9rem] h-[3rem] relative mx-4'>
				<Image src={boldo} alt='' fill objectFit='contain' />
			</span>
			<span class='w-[9rem] h-[3rem] relative mx-4'>
				<Image src={presto} alt='' fill objectFit='contain' />
			</span>
			<span class='w-[9rem] h-[3rem] relative mx-4'>
				<Image src={boldo} alt='' fill objectFit='contain' />
			</span>
			<span class='w-[9rem] h-[3rem] relative mx-4'>
				<Image src={presto} alt='' fill objectFit='contain' />
			</span>
			<span class='w-[9rem] h-[3rem] relative mx-4'>
				<Image src={boldo} alt='' fill objectFit='contain' />
			</span>
			<span class='w-[9rem] h-[3rem] relative mx-4'>
				<Image src={presto} alt='' fill objectFit='contain' />
			</span>
			<span class='w-[9rem] h-[3rem] relative mx-4'>
				<Image src={boldo} alt='' fill objectFit='contain' />
			</span>
			<span className=' absolute bg-gradient-to-l from-dark-blue to-transparent w-[40rem] h-[5rem] z-4 right-0'></span>
		</div>
	)
}

export default Marquee
