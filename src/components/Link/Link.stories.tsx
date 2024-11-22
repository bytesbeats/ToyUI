import React, { useState } from "react";
import Link from ".";
import Icon, { IconColor, IconSize } from "../Icon";
import type { Meta, StoryObj } from "@storybook/react";
import { useTranslation } from "react-i18next";
import Container from "../Container";
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
  parameters: {},
};

type LinkStory = StoryObj<typeof meta>;

export const Primary: LinkStory = {
  args: {
    ...LinkAction,
    href: "",
    icon: (
      <Icon name="x_guanzhu" size={IconSize.MD} color={IconColor.PRIMARY} />
    ),
  },
  render: (args) => {
    const { t } = useTranslation();
    return (
      <Container
        className={`flex justify-center text-center items-center zpix`}
      >
        <Link {...args}>
          测试123
          <div className="flex items-center space-x-2 text-base text-info hover:text-info-content zpix">
            <span>{t("Normal")}</span>
            <span>{t("Click me")}</span>
          </div>
        </Link>
      </Container>
    );
  },
};

export const ButtonLink: LinkStory = {
  args: {
    ...LinkAction,
    href: "",
  },
  render: (args) => {
    const { t } = useTranslation();
    const [address, setAddress] = useState(args.href.toString());
    console.log('t("Click me")', t("Click me"));
    return (
      <Container
        className={`flex flex-col gap-2 justify-center text-center items-center font-zpix`}
      >
        <label className="input input-bordered flex items-center gap-2">
          http(s)://
          <input
            type="text"
            className="grow"
            placeholder="Type url here"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <Link {...args} href={address} shallow className="self-end">
          <button className="btn btn-primary">
            {t("Click me")}
            <Icon name="x_guanzhu" color={IconColor.DANGER} />
          </button>
        </Link>
      </Container>
    );
  },
};

export default meta;
