import React from 'react'
import Header from '../Header/Index'
import Btn from '../Buttons/Btn'

const Newsletter = () => {
	return (
		<div className='w-[90vw] mx-auto my-[5rem] bg-dark-blue rounded-lg pb-[2rem] relative overflow-hidden'>
			<div className='bg-[#1C3D5B] h-[1293px] w-[1293px] rounded-full overflow-hidden absolute left-[30rem] bottom-[7rem]'></div>
			<div className=''>
				<div className='flex justify-center relative z-[3]'>
					<Header
						headerText={
							'An enterprise template to ramp up your company website'
						}
						align={'center'}
						color={'white'}
					/>
				</div>
				<form action='' className=' flex gap-4 justify-center'>
					<input
						type='text'
						className='rounded-full px-[1rem] w-[30rem]'
						placeholder='Your email address'
					/>
					<Btn color={'green'} text={'Start now'} type={'fill'} />
				</form>
			</div>
		</div>
	)
}

export default Newsletter
