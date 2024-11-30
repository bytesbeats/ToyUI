"use client";

import { useLocalizations } from "@stores/hooks";

export default function CookiePlanPage() {
  const localizations = useLocalizations();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-12">
        {localizations?.cookingPlan?.title}
      </h1>
    </div>
  );
}
