import { render, fireEvent } from '@testing-library/react'
import { Button } from '..'
require('@testing-library/jest-dom')

describe('Button', () => {
	it('renders label', () => {
		const label = 'Click me'
		const { getByText } = render(<Button>{label}</Button>)
		expect(getByText(label)).toBeInTheDocument()
	})

	it('calls onClick when clicked', () => {
		const onClick = jest.fn()
		const { getByText } = render(<Button onClick={onClick}>Click me</Button>)
		fireEvent.click(getByText('Click me'))
		expect(onClick).toHaveBeenCalled()
	})
})
