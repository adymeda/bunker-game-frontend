import {useTranslation} from "react-i18next"
import Navbar from "./components/Navbar"
import DefaultAvatar from "./assets/user-icon.png"
import Hero from "./components/ui/Hero"
import SplashArt from "./assets/splash.png"

function App() {
  const { t, i18n } = useTranslation()

  return (
    <>
      <Navbar />
      <Hero image={SplashArt}>
        <h1>The Shelter</h1>
        <div>This is a test description. More text coming soon!</div>
      </Hero>
      <h1>{t("hello")}</h1>
      <img src={DefaultAvatar} alt="" className="avatar" draggable={false}/>
    </>
  )
}

export default App