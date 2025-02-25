const { enUS, zhTW, jaJP } = require("../theme/lang");

export function genLocales() {
  const locales = [
    { name: 'English', messages: enUS, base: '/' },
    { name: '中文', messages: zhTW, base: '/zh/' },
    { name: '日本語', messages: jaJP, base: '/ja/' },
  ];

  const ret:any = {};
  for (let ix = 0; ix < locales.length; ix++) {
    const locale = locales[ix];
    ret[locale.base] = {
      selectLanguageName: locale.name,

      selectLanguageText: locale.name,

      logo: "/images/logo.svg",

      messages: locale.messages,

      navbar: [
        { text: locale.messages['nav.ecosystem'], link: `${locale.base}dapps` },
        { text: locale.messages['nav.developers'], link: `${locale.base}developers` },
        { text: locale.messages['nav.network'], link: `${locale.base}network` },
        { text: locale.messages['nav.messenger'], link: `${locale.base}messenger` },
        { text: locale.messages['nav.community'], link: `/community` },
        { text: locale.messages['nav.blog'], link: `${locale.base}blog` },
      ],
    };
  }
  return ret;
}