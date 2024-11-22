import { Meta, StoryObj } from "@storybook/react";
import Container from ".";

const meta: Meta<typeof Container> = {
  component: Container,
};

type PrimaryStory = StoryObj<typeof meta>;

export const Primary: PrimaryStory = {
  args: {
    children: (
      <div className="bg-neutral-content text-primary w-1/4 mx-auto m-5 h-full text-center p-5 rounded shadow">
        Container Content
      </div>
    ),
  },
};

export default meta;
