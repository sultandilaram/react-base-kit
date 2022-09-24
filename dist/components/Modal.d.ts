import React from 'react';
interface ModalProps {
    buttonText: string;
    btnClass?: string;
    title?: string;
    header?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}
export declare function Modal(props: ModalProps): JSX.Element;
interface ModalWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    showState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    children?: React.ReactNode;
    className?: string;
}
export declare function ModalWrapper(props: ModalWrapperProps): JSX.Element;
interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    showState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    title?: string;
    children?: React.ReactNode;
}
export declare function ModalHeader(props: ModalHeaderProps): JSX.Element;
interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
export declare function ModalBody(props: ModalBodyProps): JSX.Element;
interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
export declare function ModalFooter(props: ModalFooterProps): JSX.Element;
export {};
