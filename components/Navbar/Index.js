import React from 'react'
import logo from '@/public/images/boldo_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LIST } from '@/utils/constants'
import { listStyle, navStyle } from '@/utils/styles'
import clsx from 'clsx'
import BtnNav from '../Buttons/BtnNav'

const Navbar = () => {
	return (
		<div>
			<div className={navStyle}>
				<Link href='/'>
					<Image priority alt='Boldo Logo' src={logo} />
				</Link>

				<ul className=''>
					{NAV_LIST?.map((item, index) =>
						item.isButton ? (
							<BtnNav text={item.title} key={index} />
						) : (
							<li className={listStyle} key={index}>
								<Link href={item.link}>{item.title}</Link>
							</li>
						)
					)}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
