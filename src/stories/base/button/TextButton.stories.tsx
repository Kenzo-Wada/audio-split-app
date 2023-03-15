import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TextButton } from '~/components/base/button';

export default {
  title: 'Base/Button/TextButton',
  component: TextButton,
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text Button',
};
