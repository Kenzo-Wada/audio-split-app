import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import DefaultTextField from '../../../components/base/textfiled/DefaultTextField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/TextField/DefaultTextField',
  component: DefaultTextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DefaultTextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DefaultTextField> = (args) => <DefaultTextField {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "label",
  defaultValue: "defaultValue",
  style: { },
};