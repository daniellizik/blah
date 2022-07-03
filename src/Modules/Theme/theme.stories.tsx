import { Story, Meta } from '@storybook/react';
import * as React from 'react';

function ThemeStory(): JSX.Element {
  return <div />;
}

const Template: Story<React.ComponentProps<typeof ThemeStory>> = () => (
  <ThemeStory />
);

export default {
  title: 'Theme',
  component: ThemeStory
} as Meta;

export const Default = Template.bind({});
