type ButtonProps = {
	color?: Color;
	size?: 1 | 2 | 3 | 4 | 5;
};
type Children = {
	children: React.ReactNode;
};

export default function Button(props: ButtonProps & Children) {
	return (
		<button
			style={{
				backgroundColor: props.color || "white",
				padding: `${props.size || 0}rem`,
			}}
		>
			{props.children}
		</button>
	);
}
