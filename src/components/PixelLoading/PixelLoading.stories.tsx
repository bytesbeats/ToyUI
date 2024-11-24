import type { Meta, StoryObj } from "@storybook/react";

import PixelLoading from ".";

const meta: Meta<typeof PixelLoading> = {
  component: PixelLoading,
  decorators: [
    (Story) => {
      return (
        <div className="w-full min-h-96 mx-auto flex justify-center items-center">
          <Story />
        </div>
      );
    },
  ],
};

type PixelLoadingStory = StoryObj<typeof meta>;

export const Loading: PixelLoadingStory = {
  args: {},
};

export default meta;
