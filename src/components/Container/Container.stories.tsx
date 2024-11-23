import { Meta, StoryObj } from "@storybook/react";

import Container from ".";

const meta: Meta<typeof Container> = {
  component: Container,
  decorators: [
    // MARK: 当需要进行自定义Block容器时 在此处定义
    (Story) => {
      return (
        <div className="bg-neutral-content w-screen h-screen inset-x-0 inset-y-0">
          <Story />
        </div>
      );
    },
  ],
};

type ContainerStory = StoryObj<typeof meta>;

export const Normal: ContainerStory = {
  args: {
    className:
      "bg-neutral text-neutral-content h-96 text-center p-5 rounded shadow",
    children: "Normal Container Content",
  },
};

export const Full: ContainerStory = {
  args: {
    className:
      "bg-neutral text-neutral-content h-96 text-center p-5 rounded shadow",
    children: "Full Container Content",
    full: true,
  },
};

export default meta;
