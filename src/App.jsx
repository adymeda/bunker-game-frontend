import {useTranslation} from "react-i18next"
import i18n from "i18next"

function App() {
  const { t, i18n } = useTranslation()
  
  console.log(i18n.store.data)
  console.log(i18n.language)

  return (
    <>
      <h1>{t("hello")}</h1>
      <img src="/user_icon.png" alt="" className="avatar" draggable={false}/>
    </>
  )
}

export default App
