import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    render: (args: ChatOptions) => {
        setup(): {};
        template: string;
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Fullscreen: Story;
export declare const Windowed: Story;
