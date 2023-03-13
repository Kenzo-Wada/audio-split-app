import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import DefaultSlider from '../../../components/base/slider/DefaultSlider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Slider/DefaultSlider',
  component: DefaultSlider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DefaultSlider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DefaultSlider> = (args) => <DefaultSlider {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};