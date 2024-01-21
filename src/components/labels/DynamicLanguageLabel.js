import {useContext} from "react";
import {AppConfig} from "../App";

function DynamicLanguageLabel({content, c}) {
    const {locale} = useContext(AppConfig);

    return <>{(c ?? content ?? {})[locale] ?? ""}</>;
}

const DLL = DynamicLanguageLabel;

export default DLL;
