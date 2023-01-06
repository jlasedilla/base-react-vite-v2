import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/components/common/Button/Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: { onClick: { action: 'clicked' } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: (args) => (
        <div className="m-0 grid h-80 place-items-center">
            <Button {...args} />
        </div>
    ),
    args: {
        onClick: () => console.log('clicked!'),
    },
};
