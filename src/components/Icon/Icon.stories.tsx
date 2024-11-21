import { Meta, StoryObj } from "@storybook/react";
import Icon, { IconColor, IconSize } from ".";

const meta: Meta<typeof Icon> = {
  component: Icon,
};

type IconStory = StoryObj<typeof meta>;

const getCaptionForLocale = (locale: string) => {
  return locale === "zh" ? "你好" : "Hello";
};

export const Primary: IconStory = {
  parameters: {},
  args: {
    name: "x_guanzhu",
    color: IconColor.PRIMARY,
    size: IconSize.MD,
  },
  render: (args, { globals: { locale } }) => {
    console.log("locale", locale);
    const caption = getCaptionForLocale(locale);
    return <p>${caption}</p>;
  },
};

export default meta;
