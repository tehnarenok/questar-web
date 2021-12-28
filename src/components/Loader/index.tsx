interface LoaderProps extends React.HTMLAttributes<HTMLDialogElement> {
	center?: boolean,
	size?: 'sm' | 'md' | 'lg'
}

const Loader = (props: LoaderProps) => {
	const {
		center,
		size,
		...divProps
	} = props
	return (
		<div
			{...divProps}
		>
		</div>
	)
}

export default Loader