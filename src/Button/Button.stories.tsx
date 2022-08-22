import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import img from '../images/cardImg.jpg';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    disabled: false,
    text: '>',    
    mixClass: 'expandBtn',
    outlined: true

};