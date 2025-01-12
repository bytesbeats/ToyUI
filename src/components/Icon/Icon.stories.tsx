import { Meta, StoryObj } from "@storybook/react";
import Icon, { IconColor, IconSize } from ".";

const meta: Meta<typeof Icon> = {
  component: Icon,
};

type IconStory = StoryObj<typeof meta>;

export const Primary: IconStory = {
  globals: {},
  parameters: {
    layout: "centered",
    docs: {
      story: {
        inline: false,
        iframeHeight: 100,
      },
    },
  },
  args: {
    name: "x_guanzhu",
    color: IconColor.PRIMARY,
    size: IconSize.MD,
  },
};

export default meta;
