import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
    /**
     * Icon in a form of component
     */
    icon?: ReactNode;
    /**
     * Button label
     */
    label?: string;
    /**
     * Button edge style
     */
    edge?: 'rounded' | 'pill' | 'default';
    /**
     * onClick callback function
     */
    onClick?: () => void;
    /**
     * Other children node
     */
    children?: ReactNode;
}

export const Button = ({
    icon,
    label = 'Button',
    edge = 'rounded',
    onClick,
    children,
}: ButtonProps) => {
    return (
        <button className={`button ${edge}`} onClick={onClick}>
            {icon}
            {label}
            {children}
        </button>
    );
};
