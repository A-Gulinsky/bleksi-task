import { AuthMenu } from "./AuthMenu/AuthMenu"
import { Container } from "./Header.styled"
import { Navbar } from "./Navbar/Navbar"

export const Header = () => {

  return (
    <header>
      <Container>
        <Navbar />
        <AuthMenu />
      </Container>
    </header>
  );
}