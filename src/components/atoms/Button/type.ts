export interface ButtonProps {
	className?: string
	type?: 'default' | 'primary' | 'link' | 'red'
	disabled?: boolean
	size?: 'small' | 'default' | 'large'
	outline?: boolean
	onClick?: () => void
}
