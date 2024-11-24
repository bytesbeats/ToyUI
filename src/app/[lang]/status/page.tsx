import Container from "@components/Container";

export default function Status() {
  return (
    <Container className="flex justify-center items-center">
      <button className="btn btn-success border-1 border-dashed border-success-content active:btn-active">
        Status
      </button>
    </Container>
  );
}
