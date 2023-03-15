import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import DefaultTextField from '~/components/base/textfiled/DefaultTextField';

export default {
  title: 'Base/TextField/DefaultTextField',
  component: DefaultTextField,
} as ComponentMeta<typeof DefaultTextField>;

const Template: ComponentStory<typeof DefaultTextField> = (args) => <DefaultTextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'label',
  defaultValue: 'defaultValue',
  style: {},
};
