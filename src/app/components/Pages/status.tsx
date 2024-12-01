"use client";

import Container from "@components/Container";
import { useLanguage } from "@stores/hooks";

export default function StatusPage() {
  const [language, localizations] = useLanguage();

  console.log(language);

  return (
    <Container className="flex justify-center items-center">
      <button className="btn btn-success border-1 border-dashed border-success-content active:btn-active">
        {localizations?.status?.title}
      </button>
    </Container>
  );
}
