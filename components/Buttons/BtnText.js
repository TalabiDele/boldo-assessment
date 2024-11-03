import { btnTextStyle } from '@/utils/styles'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const BtnText = ({ text }) => {
	return (
		<button className={btnTextStyle}>
			{text} <FaArrowRight />
		</button>
	)
}

export default BtnText
