import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import StartIcon from '~/components/base/icon/StartIcon';

export default {
  title: 'Base/Icon/StartIcon',
  component: StartIcon,
} as ComponentMeta<typeof StartIcon>;

const Template: ComponentStory<typeof StartIcon> = (args) => <StartIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
