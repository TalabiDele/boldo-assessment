import { bgCircle, heroContainer, heroStyle } from '@/utils/styles'
import React from 'react'
import HeroLeft from '../HeroLeft'
import Stats from '../HeroStats/Index'
import Marquee from '../Marquee/Index'

const Hero = () => {
	return (
		<div className={heroContainer}>
			<div className={bgCircle}></div>
			<div className={heroStyle}>
				<HeroLeft />
				<Stats />
			</div>
			<div className=''>
				<Marquee />
			</div>
		</div>
	)
}

export default Hero
