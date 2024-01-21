import en_US from "antd/locale/en_US";
import zh_CN from "antd/locale/zh_CN";
import fr_FR from "antd/locale/fr_FR";
import it_IT from "antd/locale/it_IT";
import ja_JP from "antd/locale/ja_JP";
import pt_PT from "antd/locale/pt_PT";
import ru_RU from "antd/locale/ru_RU";
import ko_KR from "antd/locale/ko_KR";
import es_ES from "antd/locale/es_ES";
import ar_EG from "antd/locale/ar_EG";
import hi_IN from "antd/locale/hi_IN";
import {loadCache, saveCache} from "./cache";

const localeProvider = {
    en_US: en_US,
    zh_CN: zh_CN,
    fr_FR: fr_FR,
    it_IT: it_IT,
    ja_JP: ja_JP,
    pt_PT: pt_PT,
    ru_RU: ru_RU,
    ko_KR: ko_KR,
    es_ES: es_ES,
    ar_EG: ar_EG,
    hi_IN: hi_IN,
};

const layoutDirection = {
    en_US: "ltr",
    zh_CN: "ltr",
    fr_FR: "ltr",
    it_IT: "ltr",
    ja_JP: "ltr",
    pt_PT: "ltr",
    ru_RU: "ltr",
    ko_KR: "ltr",
    es_ES: "ltr",
    ar_EG: "rtl",
    hi_IN: "ltr",
};

const loadLocale = () => {
    const cachedLocale = loadCache("locale");
    if (cachedLocale && localeProvider[cachedLocale]) {
        return cachedLocale;
    }
    const browserLocale = navigator.language || navigator.userLanguage;
    const matchingLocale = Object.keys(localeProvider).find((locale) =>
        browserLocale.includes(locale)
    );
    return matchingLocale || "en_US";
};

const saveLocale = (value) => {
    saveCache("locale", value);
};

export {localeProvider, layoutDirection, loadLocale, saveLocale};
