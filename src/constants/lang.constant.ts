import { TLang } from '../types/lang.type';

export type ILang = {
	[key in TLang]: {
		text: string;
		lng: TLang;
		icon: string;
	};
};

const LANG: ILang = {
	en: {
		text: 'English',
		lng: 'en',
		icon: 'CustomUsa',
	},
	ru: {
		text: 'Russian',
		lng: 'ru',
		icon: 'CustomUsa',
	},
};

export default LANG;
