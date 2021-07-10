import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languages = [
    {
      code: 'fr',
      name: 'Français',
    },
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'ru',
      name: 'Русский',
    },
]

export const Settings = () => {
    const { t } = useTranslation();
    let i = 1

    return (
        <>
            <h1>{t('settings')}</h1>
            <p>
                {
                    languages.map(({code, name}) => <span key={i++} onClick={() => i18next.changeLanguage(code)}>{name}</span>)
                }
            </p>
            <h2>{t('language')}</h2>
        </>
    )
}
