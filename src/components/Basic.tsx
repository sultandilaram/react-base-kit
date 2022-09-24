import React from 'react'

interface TooltipProps {
  position?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
  children: React.ReactNode
}
export function Tooltip(props: TooltipProps) {
  return (<div className={"tooltip " + (props.position || "bottom") + " " + props.className} >{props.children}</div>)
}

interface DropdownProps {
  label: string;
  children: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
  dropDownClassName?: string
  onHover?: boolean;
}
export function Dropdown(props: DropdownProps) {
  const [show, setShow] = React.useState(false)
  const toggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!props.onHover && e.target === e.currentTarget) {
      setShow(!show);
    }
  }
  return (
    <>
      {(show && !props.onHover) && <div className="fixed top0 left0 vh100 vw100" onClick={toggle} />}
      <div
        className={"relative " + props.className}
        onMouseEnter={() => props.onHover && setShow(true)}
        onMouseLeave={() => props.onHover && setShow(false)}
        onClick={toggle}
      >
        {props.label}
        <div className={"dropdown " + (props.position || "bottom") + " " + (show ? "show " : "") + props.dropDownClassName} >{props.children}</div>
      </div>
    </>
  )
}