import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { OutlinedButton } from '../../../components/base/button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Button/OutlinedButton',
  component: OutlinedButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof OutlinedButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OutlinedButton> = (args) => <OutlinedButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Outlined Button",
};
