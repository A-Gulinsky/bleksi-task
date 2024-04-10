import { AuthMenu } from "./AuthMenu/AuthMenu"
import { Navbar } from "./Navbar/Navbar"

export const Header = () => {

  return (
    <header>
      <Navbar />
      <AuthMenu />
    </header>
  )
}