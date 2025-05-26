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
		<input
			type='checkbox'
			id={id}
			{...rest}
			className={`defaultCheckbox relative inline-flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center justify-center rounded-md border border-[#c0a77e] transition ease-linear checked:border-none text-white/0 outline-none  checked:bg-[red-600] hover:cursor-pointer`}
		/>
	)
}
