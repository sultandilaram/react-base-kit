import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export function Card(props: CardProps) {

  return (
    <div className="card b1 rounded box-shadow bg-bg-dark overflow-hidden">
      {props.children}
    </div>
  )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export function CardHeader(props: CardHeaderProps) {
  return (
    <div {...props} className={"p-5 d-flex content-between items-center bb1 " + props.className}>
      {props.children}
    </div>
  )
}

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export function CardBody(props: CardBodyProps) {
  return (
    <div {...props} className={"p-5 " + props.className} >
      {props.children}
    </div>
  )
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export function CardFooter(props: CardFooterProps) {
  return (
    <div {...props} className={"p-5 d-flex content-end items-center bt1 " + props.className}>
      {props.children}
    </div>
  )
}