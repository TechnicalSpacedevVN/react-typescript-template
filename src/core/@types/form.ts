export interface Rule {}

export interface FormItemChildrenProp<T, Value, Element> {
	onChange?(value: T, element: Element): void
	value?: Value
	error?: { name: string; message: string }
}
