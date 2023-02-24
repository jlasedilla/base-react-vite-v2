import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
     * Other children node
     */
    children?: ReactNode;
}

export const Button = ({
    icon,
    label = 'Button',
    edge = 'rounded',
    children,
    ...props
}: ButtonProps) => {
    return (
        <button className={`button ${edge}`} {...props}>
            {icon}
            {label}
            {children}
        </button>
    );
};
