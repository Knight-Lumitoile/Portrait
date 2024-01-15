import {useContext} from "react";
import {AppConfig} from "../App";

function DynamicLanguageLabel({content, c}) {

    const {locale} = useContext(AppConfig)

    return (
        <>
            {(c ?? content ?? {})[locale] ?? ""}
        </>
    )
}

function DynamicLanguageLabelSpan({content, c}) {

    const {locale} = useContext(AppConfig)

    return (
        <>
            {
                ((c ?? content ?? {})[locale] ?? "").split('').map((v) => <div>{v}</div>)
            }
        </>
    )
}

const DLL = DynamicLanguageLabel
const DLLS = DynamicLanguageLabelSpan

export default DLL
export {
    DLLS
}