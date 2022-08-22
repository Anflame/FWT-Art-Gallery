import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardList } from './CardList';
import img from '../images/cardImg.jpg';

export default {
  title: 'cardList',
  component: CardList,
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    painters: [
        {
            name: 'Painter',
            title: 'Painter',
            img: img
        },
        {
            name: 'Painter',
            title: 'Painter',
            img: img
        },
        {
            name: 'Painter',
            title: 'Painter',
            img: img
        },
        {
            name: 'Painter',
            title: 'Painter',
            img: img
        },
        {
            name: 'Painter',
            title: 'Painter',
            img: img
        }
    ]
};