import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TextParagraphComponent } from './text-paragraph.component';

export default {
  title: 'Atoms/Typography',
  component: TextParagraphComponent,
  decorators: [
    moduleMetadata({
      declarations: [TextParagraphComponent],
    }),
  ],
} as Meta;

const Template: Story<TextParagraphComponent> = (args: TextParagraphComponent) => ({
  props: args,
});

export const RegularParagraph = Template.bind({});
RegularParagraph.args = {
  text: 'This is a regular paragraph.',
  opening: false,
};

export const OpeningParagraph = Template.bind({});
OpeningParagraph.args = {
  text: 'This is the opening paragraph.',
  opening: true,
};
