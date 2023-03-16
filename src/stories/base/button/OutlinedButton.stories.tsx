import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { OutlinedButton } from '~/components/base/button';

export default {
  title: 'Base/Button/OutlinedButton',
  component: OutlinedButton,
} as ComponentMeta<typeof OutlinedButton>;

const Template: ComponentStory<typeof OutlinedButton> = (args) => <OutlinedButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Outlined Button',
};
