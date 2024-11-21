import React from "react";
import Link from ".";
import Icon, { IconSize } from "../Icon";
import type { Meta, StoryObj } from "@storybook/react";

const LinkAction = {
  onJumpBefore: async () => {
    console.log("onJumpBefore");
  },
  onJumpAfter: async () => {
    console.log("onJumpAfter");
  },
};

const meta: Meta<typeof Link> = {
  component: Link,
};

type LinkStory = StoryObj<typeof meta>;

export const Primary: LinkStory = {
  args: {
    ...LinkAction,
    children: "link",
    href: "",
    icon: <Icon name="x_guanzhu" size={IconSize.MD} />,
  },
};

export default meta;
