import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import 'dayjs/locale/en';

import themeConfig from './config/theme.config';

import enTranslation from './locales/en/translation.json';
import enMenu from './locales/en/menu.json';
import ruTranslation from './locales/ru/translation.json';
import ruMenu from './locales/ru/menu.json';

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		resources: {
			ru: {
				translation: ruTranslation,
				menu: ruMenu,
			},
			en: {
				translation: enTranslation,
				menu: enMenu,
			},
		},
		fallbackLng: themeConfig.language,
		lng: themeConfig.language,
		// debug: true,

		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	})
	.then();

export default i18n;
