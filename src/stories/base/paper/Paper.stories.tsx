import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Paper from '~/components/base/paper/Paper';

export default {
  title: 'Base/Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args}>Paper component</Paper>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'outlined',
};
