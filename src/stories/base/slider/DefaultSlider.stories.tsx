import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import DefaultSlider from '~/components/base/slider/DefaultSlider';

export default {
  title: 'Base/Slider/DefaultSlider',
  component: DefaultSlider,
} as ComponentMeta<typeof DefaultSlider>;

const Template: ComponentStory<typeof DefaultSlider> = (args) => <DefaultSlider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
