import Container from "@components/Container";
import { PageProps } from "@constants/common.constant";
import { getLocalizations } from "@locales/localization";
import React from "react";

export default async function CookingPlan(props: PageProps) {
  const { lang } = await props.params;
  const currentLocalizations = await getLocalizations(lang);
  return (
    <Container className="p-3">
      <h1 className="text-4xl font-bold text-center py-12">
        {currentLocalizations?.cookingPlan?.title}
      </h1>
    </Container>
  );
}
