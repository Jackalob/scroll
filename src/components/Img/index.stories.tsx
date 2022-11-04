/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Img from './index';
import 'react-loading-skeleton/dist/skeleton.css';

export default {
  title: 'Img',
  component: Img,
} as ComponentMeta<typeof Img>;

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const NoUrl = Template.bind({});

NoUrl.args = {};

export const WithUrl = Template.bind({});

WithUrl.args = { src: 'https://picsum.photos/id/1/800/500' };
