import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Heading4Component } from './heading4.component';

export default {
  title: 'Atoms/Typography',
  component: Heading4Component,
  decorators: [
    moduleMetadata({
      declarations: [Heading4Component],
    }),
  ],
} as Meta;

const Template: Story<Heading4Component> = (args: Heading4Component) => ({
  props: args,
});

export const Heading4 = Template.bind({});
Heading4.args = {
  text: 'This is the sub sub heading (H4).',
};
