import React from "react";
import Link, { LinkProps } from "./Link";

export default {
  component: Link,
  title: "Link",
};

const Template = (args: LinkProps) => <Link {...args}>{args.children}</Link>;

export const Default = Template.bind({});

Default.arguments = {
  children: "Link",
};

export const WithComponent = Template.bind({});

WithComponent.arguments = {
  children: <div>Link</div>,
  onClick: () => {
    console.log("clicked");
  },
};

export const WithEvent = Template.bind({});

WithEvent.arguments = {
  ...Default.arguments,
  children: "Link",
  bindClick: () => {
    console.log("with Event clicked");
  },
  onClick: (e: MouseEvent) => {
    WithEvent.arguments?.bindClick?.(e);
  },
};
