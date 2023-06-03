import { FC } from 'react'

export const Button: FC<{ children?: any; onClick?: () => void; type?: 'primary' | 'secondary' }> = props => {
	return (
		<button className='button' onClick={props.onClick}>
			{props.children}
		</button>
	)
}
