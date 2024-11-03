'use client'

import { heroLeftStyle } from '@/utils/styles'
import React from 'react'
import Btn from './Buttons/Btn'

const HeroLeft = () => {
	return (
		<div className={heroLeftStyle}>
			<h1>Save time by building fast with Boldo Template</h1>
			<p>
				Funding handshake buyer business-to-business metrics iPad partnership.
				First mover advantage innovator success deployment non-disclosure.
			</p>
			<div className=' flex gap-4'>
				<Btn text='Buy template' color='green' type='fill' />
				<Btn text='Explore' type='stroke' />
			</div>
		</div>
	)
}

export default HeroLeft
