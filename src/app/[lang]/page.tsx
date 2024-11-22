import Container from "@app/components/Container";
import { Locale } from "../../../next-i18next.config";
import { getLocalizations } from "@app/locales/localization";

export default async function Home({ params }: { params: { lang: Locale } }) {
  console.log(params.lang);
  const currentLocalizations = await getLocalizations(params.lang);
  return (
    <Container size="md" className="min-w-full">
      {currentLocalizations.home}
    </Container>
  );
}
