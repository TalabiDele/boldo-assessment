import React from 'react'
import Header from '../Header/Index'
import firstImg from '@/public/images/cardImg-1.png'
import secondImg from '@/public/images/connect-img-2.png'
import thirdImg from '@/public/images/blog-img.png'
import chandler from '@/public/images/chandler.png'
import rachael from '@/public/images/rachael.png'
import monica from '@/public/images/monica.png'
import BlogCard from '../BlogCard'
import Btn from '../Buttons/Btn'

const Blog = () => {
	const cardItems = [
		{
			image: firstImg,
			title: 'Category',
			date: 'November 22, 2021',
			description: 'Pitch termsheet backing validation focus release.',
			person: {
				name: 'Chandler Bing',
				image: chandler,
			},
		},
		{
			image: secondImg,
			title: 'Category',
			date: 'November 22, 2021',
			description:
				'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
			person: {
				name: 'Chandler Bing',
				image: rachael,
			},
		},
		{
			image: thirdImg,
			title: 'Category',
			date: 'November 22, 2021',
			description:
				'Beta prototype sales iPad gen-z marketing network effects value proposition',
			person: {
				name: 'Monica Geller',
				image: monica,
			},
		},
	]

	return (
		<div>
			<Header
				smallText={'Our Blog'}
				headerText={'Value proposition accelerator product management venture'}
				align={'center'}
			/>
			<div className=' flex justify-between items-center w-[80vw] gap-5 mx-auto'>
				{cardItems.map((item, index) => (
					<BlogCard
						description={item.description}
						title={item.title}
						date={item.date}
						person={item.person}
						key={index}
						image={item.image}
					/>
				))}
			</div>
			<div className=' text-center my-[3rem]'>
				<Btn text={'Load more'} type={'stroke'} color={'blue'} />
			</div>
		</div>
	)
}

export default Blog
