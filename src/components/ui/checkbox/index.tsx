import { Input } from '../input'

export const CheckBox = (props: {
	id?: string
	extra?: string
	color?:
		| 'red'
		| 'blue'
		| 'green'
		| 'yellow'
		| 'purple'
		| 'orange'
		| 'pink'
		| 'teal'
		| 'cyan'
		| 'gray'
		| 'black'
		| 'white'
		| 'indigo'
		| 'violet'
	[x: string]: any
}) => {
	const { extra, color, id, ...rest } = props
	return (
		<Input
			id={id}
			{...rest}
			className={`defaultCheckbox relative inline-flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none mt-2 items-center justify-center rounded-md border border-[#c0a77e] bg-white/0 p-3 text-base outline-none placeholder:text-[#c0a77e] placeholder:font-normal duration-500 transition-colors focus:border-[#9d865d] checked:border-none checked:text-white checked:bg-[#a3a85e] hover:cursor-pointer`}
		/>
	)
}
