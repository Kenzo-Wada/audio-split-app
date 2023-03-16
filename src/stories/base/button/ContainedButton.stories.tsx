import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ContainedButton } from '~/components/base/button';

export default {
  title: 'Base/Button/ContainedButton',
  component: ContainedButton,
} as ComponentMeta<typeof ContainedButton>;

const Template: ComponentStory<typeof ContainedButton> = (args) => <ContainedButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Contained Button',
};
