import { IMenuItem } from './menu.interface'
import Link from 'next/link'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<Link
			href={item.link}
			className='flex gap-2.5 items-center py-1.5 mt-2 px-layout transition-colors hover:bg-[#d5b080] rounded-lg text-[#805f30]'
		>
			<item.icon className='text-[#61450f]' />
			<span className='text-sm'>{item.name}</span>
		</Link>
	)
}
