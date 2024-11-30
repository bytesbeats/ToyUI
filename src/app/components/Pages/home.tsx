"use client";
import Container from "@components/Container";
import { useLocalizations } from "@stores/hooks";

export default function HomePage() {
  const localizations = useLocalizations();

  return (
    <Container>
      <h1 className="text-4xl font-bold text-center">{localizations?.home?.title}</h1>
      <div className="box">
        <section className="hero-content text-center flex-col">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore
            similique facere vel, corporis et. Perspiciatis iste in ut, omnis explicabo
            nisi dicta iusto quo sunt dolores dolore error nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore
            similique facere vel, corporis et. Perspiciatis iste in ut, omnis explicabo
            nisi dicta iusto quo sunt dolores dolore error nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore
            similique facere vel, corporis et. Perspiciatis iste in ut, omnis explicabo
            nisi dicta iusto quo sunt dolores dolore error nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore
            similique facere vel, corporis et. Perspiciatis iste in ut, omnis explicabo
            nisi dicta iusto quo sunt dolores dolore error nam.
          </p>
        </section>
      </div>
    </Container>
  );
}
