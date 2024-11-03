import { navButtonStyle } from '@/utils/styles'
import React from 'react'

const BtnNav = ({ text }) => {
	return <button className={navButtonStyle}>{text}</button>
}

export default BtnNav
