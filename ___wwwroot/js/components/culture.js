//let currentCulture;
//let cultureInfo;
const cultureInfo = currentCulture => {
  var cultureName, decimalSeparator = '.', groupSeparator = ',', currency = 'EUR';
  switch(currentCulture) {
    case 'af':
      cultureName = 'Afrikaans';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'am':
      cultureName = 'Amharic';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ar-sa':
      cultureName = 'Arabic (Saudi Arabia)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'as':
      cultureName = 'Assamese';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'az-Latn':
      cultureName = 'Azerbaijani (Latin)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'be':
      cultureName = 'Belarusian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'bg':
      cultureName = 'Bulgarian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'bn-BD':
      cultureName = 'Bangla (Bangladesh)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'bn-IN':
      cultureName = 'Bangla (India)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'bs':
      cultureName = 'Bosnian (Latin)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ca':
      cultureName = 'Catalan Spanish';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ca-ES-valencia':
      cultureName = 'Valencian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'cs':
      cultureName = 'Czech';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'cy':
      cultureName = 'Welsh';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'da':
      cultureName = 'Danish';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'de':
      cultureName = 'German (Germany)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'de-de':
      cultureName = 'German (Germany)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'el':
      cultureName = 'Greek';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'en-GB':
      cultureName = 'English (United Kingdom)';
      currency = 'GBP';
      decimalSeparator = '.';
      groupSeparator = ',';
      break;
    case 'en-US':
      cultureName = 'English (United States)';
      currency = 'USD';
      decimalSeparator = '.';
      groupSeparator = ',';
      break;
    case 'es':
      cultureName = 'Spanish (Spain)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'es-ES':
      cultureName = 'Spanish (Spain)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'es-US':
      cultureName = 'Spanish (United States)';
      currency = 'USD';
      decimalSeparator = '.';
      groupSeparator = ',';
      break;
    case 'es-MX':
      cultureName = 'Spanish (Mexico)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'et':
      cultureName = 'Estonian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'eu':
      cultureName = 'Basque';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'fa':
      cultureName = 'Persian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'fi':
      cultureName = 'Finnish';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'fil-Latn':
      cultureName = 'Filipino';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'fr':
      cultureName = 'French (France)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'fr-FR':
      cultureName = 'French (France)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'fr-CA':
      cultureName = 'French (Canada)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ga':
      cultureName = 'Irish';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'gd-Latn':
      cultureName = 'Scottish Gaelic';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'gl':
      cultureName = 'Galician';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'gu':
      cultureName = 'Gujarati';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ha-Latn':
      cultureName = 'Hausa (Latin)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'he':
      cultureName = 'Hebrew';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'hi':
      cultureName = 'Hindi';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'hr':
      cultureName = 'Croatian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'hu':
      cultureName = 'Hungarian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'hy':
      cultureName = 'Armenian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'id':
      cultureName = 'Indonesian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ig-Latn':
      cultureName = 'Igbo';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'is':
      cultureName = 'Icelandic';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'it':
      cultureName = 'Italian (Italy)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'it-it':
      cultureName = 'Italian (Italy)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ja':
      cultureName = 'Japanese';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ka':
      cultureName = 'Georgian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'kk':
      cultureName = 'Kazakh';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'km':
      cultureName = 'Khmer';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'kn':
      cultureName = 'Kannada';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ko':
      cultureName = 'Korean';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'kok':
      cultureName = 'Konkani';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ku-Arab':
      cultureName = 'Central Kurdish';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ky-Cyrl':
      cultureName = 'Kyrgyz';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'lb':
      cultureName = 'Luxembourgish';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'lt':
      cultureName = 'Lithuanian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'lv':
      cultureName = 'Latvian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'mi-Latn':
      cultureName = 'Maori';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'mk':
      cultureName = 'Macedonian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ml':
      cultureName = 'Malayalam';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'mn-Cyrl':
      cultureName = 'Mongolian (Cyrillic)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'mr':
      cultureName = 'Marathi';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ms':
      cultureName = 'Malay (Malaysia)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'mt':
      cultureName = 'Maltese';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'nb':
      cultureName = 'Norwegian (Bokmål)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ne':
      cultureName = 'Nepali (Nepal)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'nl':
      cultureName = 'Dutch (Netherlands)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'nl-BE':
      cultureName = 'Dutch (Netherlands)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'nn':
      cultureName = 'Norwegian (Nynorsk)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'nso':
      cultureName = 'Sesotho sa Leboa';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'or':
      cultureName = 'Odia';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'pa':
      cultureName = 'Punjabi (Gurmukhi)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'pa-Arab':
      cultureName = 'Punjabi (Arabic)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'pl':
      cultureName = 'Polish';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'prs-Arab':
      cultureName = 'Dari';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'pt-BR':
      cultureName = 'Portuguese (Brazil)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'pt-PT':
      cultureName = 'Portuguese (Portugal)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'qut-Latn':
      cultureName = 'K\’iche\’';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'quz':
      cultureName = 'Quechua (Peru)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ro':
      cultureName = 'Romanian (Romania)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ru':
      cultureName = 'Russian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'rw':
      cultureName = 'Kinyarwanda';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'sd-Arab':
      cultureName = 'Sindhi (Arabic)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'si':
      cultureName = 'Sinhala';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'sk':
      cultureName = 'Slovak';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'sl':
      cultureName = 'Slovenian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'sq':
      cultureName = 'Albanian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'sr-Cyrl-BA':
      cultureName = 'Serbian (Cyrillic, Bosnia and Herzegovina)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'sr-Cyrl-RS':
      cultureName = 'Serbian (Cyrillic, Serbia)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'sr-Latn-RS':
      cultureName = 'Serbian (Latin, Serbia)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'sv':
      cultureName = 'Swedish (Sweden)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'sw':
      cultureName = 'Kiswahili';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ta':
      cultureName = 'Tamil';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'te':
      cultureName = 'Telugu';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'tg-Cyrl':
      cultureName = 'Tajik (Cyrillic)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'th':
      cultureName = 'Thai';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ti':
      cultureName = 'Tigrinya';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'tk-Latn':
      cultureName = 'Turkmen (Latin)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'tn':
      cultureName = 'Setswana';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'tr':
      cultureName = 'Turkish';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'tt-Cyrl':
      cultureName = 'Tatar (Cyrillic)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ug-Arab':
      cultureName = 'Uyghur';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'uk':
      cultureName = 'Ukrainian';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'ur':
      cultureName = 'Urdu';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'uz-Latn':
      cultureName = 'Uzbek (Latin)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'vi':
      cultureName = 'Vietnamese';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'wo':
      cultureName = 'Wolof';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'xh':
      cultureName = 'isiXhosa';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'yo-Latn':
      cultureName = 'Yoruba';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'zh-Hans':
      cultureName = 'Chinese (Simplified)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'zh-Hant':
      cultureName = 'Chinese (Traditional)';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
    case 'zu':
      cultureName = 'isiZulu';
      currency = 'EUR';
      decimalSeparator = ',';
      groupSeparator = '.';
      break;
  }
  return {
    currentCulture: currentCulture,
    name: cultureName,
    decimalSeparator: decimalSeparator,
    currency: currency
  }
};
