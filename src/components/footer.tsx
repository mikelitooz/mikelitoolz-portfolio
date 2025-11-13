import Container from "./Container";

export function Footer() {
  return (
    <footer className="py-6 px-4">
      <Container>
        <p className="text-foreground text-center text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </Container>
    </footer>
  );
}
