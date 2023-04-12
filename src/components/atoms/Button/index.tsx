import { FC } from 'react'

export const Button: FC<{ label?: string; onClick?: () => void }> = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.label}
    </button>
  )
}
