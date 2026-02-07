import {useTranslation} from "react-i18next"

function App() {
  const { t, i18n } = useTranslation()

  return (
    <>
      <h1>{t("hello")}</h1>
      <img src="/user_icon.png" alt="" className="avatar" draggable={false}/>
    </>
  )
}

export default App
