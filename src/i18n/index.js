import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import locale_en from "./locales/en.json"
import locale_ru from "./locales/ru.json"

let lang = localStorage.getItem("pref_lang")
if(!lang) lang = navigator.language.slice(0,2)

i18next.use(initReactI18next).init({
    fallbackLng: "en",
    lng: lang,
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: { translation: locale_en },
        ru: { translation: locale_ru}
    }
})

export default i18next