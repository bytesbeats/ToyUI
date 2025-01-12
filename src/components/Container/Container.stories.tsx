import type { Meta, StoryObj } from "@storybook/react";
import Container from ".";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 620,
      },
    },
  },
  decorators: [
    (Story: React.FC) => {
      return (
        <div className="bg-neutral-content w-500 h-screen inset-x-0 inset-y-0">
          <Story />
        </div>
      );
    },
  ],
};

type ContainerStory = StoryObj<typeof meta>;

export const Default: ContainerStory = {
  args: {
    className:
      "bg-neutral text-neutral-content h-96 text-center p-5 rounded shadow",
    children: "Default Container Content",
  },
};

export const Full: ContainerStory = {
  args: {
    className: "bg-neutral text-neutral-content h-96 text-center p-5 shadow",
    children: "Full Container Content",
    full: true,
  },
};

export default meta;
