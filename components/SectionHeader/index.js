import React from 'react'

const SectionHeader = ({ text }) => {
	return (
		<h1 className=' text-black text-[2rem] w-[30rem] max-lg:w-[50vw] max-lg:text-[1.6rem] max-md:w-[80vw]'>
			{text}
		</h1>
	)
}

export default SectionHeader
