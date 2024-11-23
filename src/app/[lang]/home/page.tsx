import "./style.css";

import Container from "@components/Container";
import { getLocalizations } from "@locales/localization";

import { Locale } from "../../../../next-i18next.config";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const currentLocalizations = await getLocalizations(lang);

  return (
    <Container className="h-full">
      <h1 className="text-4xl font-bold text-center">
        {currentLocalizations.home}
      </h1>
    </Container>
  );
}
