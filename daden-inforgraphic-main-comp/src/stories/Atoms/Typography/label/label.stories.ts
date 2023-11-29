import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { labelComponent } from './label.component';

export default {
  title: 'Atoms/Typography',
  component: labelComponent,
  decorators: [
    moduleMetadata({
      declarations: [labelComponent],
    }),
  ],
} as Meta;

const Template: Story<labelComponent> = (args: labelComponent) => ({
  props: args,
});

export const label = Template.bind({});
label.args = {
  text: 'This is label that is used in buttons',
};
