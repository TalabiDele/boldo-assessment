import Blog from '@/components/Blog'
import Hero from '@/components/Hero/Index'
import Newsletter from '@/components/Newsletter'
import Services from '@/components/Services/Index'
import Image from 'next/image'

export default function Home() {
	return (
		<div className=''>
			<Hero />
			<Services />
			<Blog />
			<Newsletter />
		</div>
	)
}
