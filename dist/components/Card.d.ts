import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
export declare function CardHeader(props: CardHeaderProps): JSX.Element;
interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
export declare function CardBody(props: CardBodyProps): JSX.Element;
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
export declare function CardFooter(props: CardFooterProps): JSX.Element;
export {};
