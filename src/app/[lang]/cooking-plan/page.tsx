import CookiePlanPage from "@app/components/Pages/cookie-plan";
import Container from "@components/Container";
import { PageProps } from "@constants/common.constant";
import React from "react";

export default async function CookingPlan(_props: PageProps) {
  return (
    <Container className="p-3">
      <CookiePlanPage />
    </Container>
  );
}
