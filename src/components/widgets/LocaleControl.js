import { Dropdown, FloatButton } from "antd";
import "./LocaleControl.css";
import { useContext } from "react";
import { AppConfig } from "../App";
import { Fade } from "react-awesome-reveal";
import Remix from "../icons/Remix";
import { saveLocale } from "../../utilities/locale";

function LocaleControl() {
    const { config, locale, _locale } = useContext(AppConfig);
    return (
        <span className={"LocaleControl"}>
            <Fade>
                <Dropdown
                    arrow
                    menu={{
                        items: config.locale.map((item) => ({ ...item })),
                        onClick: (value) => {
                            _locale(value.key);
                            saveLocale(value.key);
                        },
                        selectedKeys: [locale],
                    }}
                    placement={"topRight"}
                >
                    <FloatButton icon={<Remix.Translate />} />
                </Dropdown>
            </Fade>
        </span>
    );
}

export default LocaleControl;
