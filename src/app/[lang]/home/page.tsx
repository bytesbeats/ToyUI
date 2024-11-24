import "server-only";
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
    <Container>
      <h1 className="text-4xl font-bold text-center">
        {currentLocalizations?.home.title}
      </h1>
      <div className="hero">
        <section className="hero-content text-center flex-col">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            inventore similique facere vel, corporis et. Perspiciatis iste in
            ut, omnis explicabo nisi dicta iusto quo sunt dolores dolore error
            nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            inventore similique facere vel, corporis et. Perspiciatis iste in
            ut, omnis explicabo nisi dicta iusto quo sunt dolores dolore error
            nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            inventore similique facere vel, corporis et. Perspiciatis iste in
            ut, omnis explicabo nisi dicta iusto quo sunt dolores dolore error
            nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            inventore similique facere vel, corporis et. Perspiciatis iste in
            ut, omnis explicabo nisi dicta iusto quo sunt dolores dolore error
            nam.
          </p>
        </section>
      </div>
    </Container>
  );
}
