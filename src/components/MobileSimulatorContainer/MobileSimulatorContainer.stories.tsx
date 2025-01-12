import { Meta, StoryObj } from "@storybook/react";

import MobileSimulatorContainer from ".";

const meta: Meta<typeof MobileSimulatorContainer> = {
  component: MobileSimulatorContainer,
  argTypes: {
    dark: {
      type: "boolean",
      control: {
        type: "boolean",
      },
    },
    battery: {
      type: "number",
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
    wifi: {
      type: "number",
      control: {
        type: "range",
        min: 1,
        max: 3,
      },
    },
    time: {
      type: "string",
      control: {
        type: "date",
      },
    },
  },
  decorators: [
    // MARK: 当需要进行自定义Block容器时 在此处定义
    (Story) => {
      return (
        <div className="w-full min-h-96 mx-auto flex justify-center items-center">
          <Story />
        </div>
      );
    },
  ],
};

type MobileSimulatorContainerStory = StoryObj<typeof meta>;

export const Light: MobileSimulatorContainerStory = {
  args: {
    dark: false,
    children: "",
    battery: 100,
    wifi: 3,
    time: new Date(),
  },
};

export const Dark: MobileSimulatorContainerStory = {
  args: {
    dark: true,
    children: "",
    battery: 100,
    wifi: 3,
    time: new Date(),
  },
};

export default meta;
