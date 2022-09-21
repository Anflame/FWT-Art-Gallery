import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../component/App/App';

export default {
  title: 'App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Primary = Template.bind({});
