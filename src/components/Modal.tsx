import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useTransition, animated } from 'react-spring';

interface ModalProps {
  buttonText: string;
  btnClass?: string;
  title?: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode
}
export function Modal(props: ModalProps) {
  const state = React.useState(false);
  return (
    <>
      <button className={"btn " + props.btnClass} onClick={() => state[1](true)}>{props.buttonText}</button>
      <ModalWrapper showState={state}>
        <ModalHeader showState={state} title={props.title}>{props.header}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
        {props.footer ? (<ModalFooter>{props.footer}</ModalFooter>) : null}
      </ModalWrapper>
    </>
  )
}

interface ModalWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  showState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  children?: React.ReactNode;
  className?: string;
}
export function ModalWrapper(props: ModalWrapperProps) {

  const modalTransition = useTransition(props.showState[0], {
    from: { opacity: 0, marginTop: "-10%" },
    enter: { opacity: 1, marginTop: "0" },
    leave: { opacity: 0, marginTop: "-10%" },
  });

  const dismissHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      props.showState[1](false);
    }
  }

  return modalTransition((style, item) => item && (
    <animated.div
      style={style}
      className={"modal-wrapper fixed top0 left0 vh100 vw100 mask-light children-center z-modal " + props.className}
      onClick={dismissHandler}
      {...props}
    >
      <div className="modal relative w100 max-w500px b1 rounded box-shadow bg-bg-dark overflow-hidden">
        {props.children}
      </div>
    </animated.div>
  ))
}

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  title?: string;
  children?: React.ReactNode;
}
export function ModalHeader(props: ModalHeaderProps) {
  return (
    <div className={"p-5 d-flex content-between items-center bb1 " + props.className} {...props}>
      <div>
        {props.title ? (<h3>{props.title}</h3>) : null}
        {props.children}
      </div>
      <FaTimes
        className="modal-close clickable"
        onClick={() => props.showState[1](false)}
      />
    </div>
  )
}

interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export function ModalBody(props: ModalBodyProps) {
  return (
    <div className={"p-5 bg-bg " + props.className} {...props} >
      {props.children}
    </div>
  )
}

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export function ModalFooter(props: ModalFooterProps) {
  return (
    <div className={"p-5 d-flex content-end items-center bt1 " + props.className} {...props}>
      {props.children}
    </div>
  )
}