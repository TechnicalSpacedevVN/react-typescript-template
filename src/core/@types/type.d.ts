declare type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U
declare type Overwrite3<T1, T2, T3> = Overwrite<Overwrite<T1, T2>, T3>
declare type PrimitiveType = boolean | string | number | undefined | null
declare type JSONObject = Record<string | number, string | boolean | number | undefined | null | JSONObject>

declare type ArrType<Arr> = Arr extends readonly (infer ElementType)[] ? ElementType : never

declare type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>

declare type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

declare type JSXElement = string | number | JSX.Element | null | undefined

declare type TupleObject<U extends string, R extends any[] = []> = {
	[S in U]: Exclude<U, S> extends never ? [...R, S] : TupleUnion<Exclude<U, S>, [...R, S]>
}[U]

type DefaultAtomArg = {
	className?: string
	id?: string
	style?: React.CSSProperties
	children?: any
	name?: string
}

declare type Atom<T1 = {}, T2 = DefaultAtomArg, T3 = {}> = React.FC<
	Overwrite3<
		T3 extends HTMLElement ? React.HTMLAttributes<T3> : T3,
		T2 extends HTMLElement ? React.HTMLAttributes<T2> : T2,
		T1
	>
>

declare type AtomArg<T1 = {}, T2 = DefaultAtomArg, T3 = {}> = Overwrite3<
	T3 extends HTMLElement ? React.HTMLAttributes<T3> : T3,
	T2 extends HTMLElement ? React.HTMLAttributes<T2> : T2,
	T1
>

declare type Optional<T> = {
	[P in keyof T]?: Optional<T[P]>
}

declare type URLGetParams = { [key: string]: PrimitiveType | string[] }
declare type URLSearch = { [key: string]: PrimitiveType | string[] }

type PrefixType<T, Prefix> = {
	[K in keyof T]: K extends `${Prefix}${infer Suffix}` ? K : never
}[keyof T]

declare type PickPrefix<T, Prefix> = Pick<T, PrefixType<T, Prefix>>
declare type OmitPrefix<T, Prefix> = Omit<T, PrefixType<T, Prefix>>

type SuffixType<T, Suffix> = {
	[K in keyof T]: K extends `${infer Prefix}${Suffix}` ? K : never
}[keyof T]
declare type PickSuffix<T, Suffix> = Pick<T, SuffixType<T, Suffix>>
declare type OmitSuffix<T, Suffix> = Omit<T, SuffixType<T, Suffix>>

declare type SuggestObject<T> = T & { [k: string]: any }

declare type PromiseStatus = 'idle' | 'pending' | 'success' | 'error'

declare interface ThunkAction<T = any> {
	data?: T
	success?: () => void
	error?: (error: any) => void
	finally?: () => void
}

declare interface State<T = undefined> {
	(defaultValue?: StateDefaultValue<T>): StateResponse<T>
}

declare type StateDefaultValue<T = undefined> = T | (() => T)
declare type StateSetStateValue = T | ((prevState: T) => T)
declare type StateSetState<T> = (value: StateSetStateValue<T>) => void
declare type StateResponse<T> = [T, StateSetState<T>]

declare interface Store<T = any> {
	(name: string, defaultValue?: StoreDefaultValue<T>): StoreResponse<T>
}

declare type StoreDefaultValue<T = undefined> = T | (() => T)
declare type StoreSetStateValue<T> = Partial<T> | ((prevState: T) => T)
declare type StoreSetState<T> = (value?: StoreSetStateValue<T>) => void
declare type StoreResponse<T> = {
	value: T
	setValue: StoreSetState<T>
	store: T
	setStore: StoreSetState<T>
	snapshot: (value?: T) => void
	isEqualSnapshot: () => boolean
	snapshotData: T
}
