import {useTranslation} from "react-i18next"
import Navbar from "./components/Navbar"
import DefaultAvatar from "./assets/user-icon.png"
import Splash from "./components/landing/Splash"

function App() {
  const { t, i18n } = useTranslation()

  return (
    <>
      <Navbar />
      <Splash />
      <h1>{t("hello")}</h1>
      <img src={DefaultAvatar} alt="" className="avatar" draggable={false}/>
    </>
  )
}

export default App