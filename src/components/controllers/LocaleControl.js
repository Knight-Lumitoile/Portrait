import {Dropdown, FloatButton} from "antd";
import "./LocaleControl.css"

import __ from "../../config/locale/options.json"
import {useContext} from "react";
import {AppConfig} from "../App";
import {Fade} from "react-awesome-reveal";

function LocaleControl() {
    const {_locale} = useContext(AppConfig)
    return (
        <span className={"LocaleControl"}>

        <Fade>
            <Dropdown
                arrow
                menu={{items: __.map(item => ({...item})), onClick: value => _locale(value.key)}}
                placement={"topRight"}
            >

                    <FloatButton />
            </Dropdown>

        </Fade>
        </span>

    )
}

export default LocaleControl