import CookiePlanPage from "@app/components/Pages/cookie-plan";
import Container from "@components/Layout/Container";

export default async function CookingPlan() {
  return (
    <Container className="p-3">
      <CookiePlanPage />
    </Container>
  );
}
