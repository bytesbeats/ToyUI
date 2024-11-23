import type { Meta, StoryObj } from "@storybook/react";

import PixelLoading from ".";

const meta: Meta<typeof PixelLoading> = {
  component: PixelLoading,
};

type PixelLoadingStory = StoryObj<typeof meta>;

export const Primary: PixelLoadingStory = {
  args: {
    times: 10,
  },
};

export default meta;
