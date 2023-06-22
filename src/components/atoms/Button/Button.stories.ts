import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Component/Button',
	component: Button,
	tags: ['autodocs'],

	// argTypes: {
	// 	type: {
	// 		options: ['primary', 'secondary'],
	// 		control: { type: 'radio' },
	// 	},
	// },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Type: Story = {
	args: {
		type: 'default',
		children: 'Button',
	},
}

// export const Primary: Story = {
// 	args: {
// 		type: 'primary',
// 		children: 'Button',
// 	},
// }

// export const Red: Story = {
// 	args: {
// 		type: 'red',
// 		children: 'Button',
// 	},
// }
