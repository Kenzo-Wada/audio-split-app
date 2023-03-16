import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import CircleLoading from '~/components/base/loading/CircleLoading';

export default {
  title: 'Base/Loading/CircleLoading',
  component: CircleLoading,
} as ComponentMeta<typeof CircleLoading>;

const Template: ComponentStory<typeof CircleLoading> = (args) => <CircleLoading {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
