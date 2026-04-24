import { useI18n } from '../i18n';

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div className="lang-pill" role="group" aria-label="Language switcher">
      <button
        type="button"
        className={`lang-pill__btn ${lang === 'uk' ? 'is-active' : ''}`}
        onClick={() => setLang('uk')}
      >
        UA
      </button>
      <button
        type="button"
        className={`lang-pill__btn ${lang === 'en' ? 'is-active' : ''}`}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  );
}
