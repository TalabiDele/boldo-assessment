import React from 'react'

const BtnIconSm = ({ icon }) => {
	return (
		<button className=' bg-dark-blue text-white h-[2rem] w-[2rem] rounded-full flex justify-center items-center'>
			{icon}
		</button>
	)
}

export default BtnIconSm
