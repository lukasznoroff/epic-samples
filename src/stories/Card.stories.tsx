import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../components/Card';
import image from '../images/bg-hero-image.jpg';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardExample = Template.bind({});
CardExample.args = {
  image: image,
  title: 'Title',
  text: 'Genres',
};
