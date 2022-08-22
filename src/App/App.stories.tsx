import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import img from '../images/cardImg.jpg';
import { App } from './App';

export default {
  title: 'App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Primary = Template.bind({});

Primary.args = {

};