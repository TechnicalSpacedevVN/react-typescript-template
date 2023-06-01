import React from 'react'
import { Button } from '../src/components/Button'

export default {
	title: 'Example/Button',
	component: Button,
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	label: 'Primary Button',
	primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
	label: 'Secondary Button',
	primary: false,
}
