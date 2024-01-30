import "./App.css";
import PageControl from "./controllers/PageControl";
import { createContext, useEffect, useRef, useState } from "react";
import { ConfigProvider } from "antd";
import LocaleControl from "./controllers/LocaleControl";
import Cover from "./pages/Cover";
import ScreenLock from "./controllers/ScreenLock";
import { Fade } from "react-awesome-reveal";
import ScrollButton from "./controllers/ScrollButton";
import { PageType } from "../config/enum";
import Wiki from "./pages/Wiki";
import "cross-fetch";
import Footer from "./pages/Footer";
import {
    layoutDirection,
    loadLocale,
    localeProvider,
} from "../utilities/locale";
import Remix from "./icons/Remix";
import "../fonts/Font.css";
import BubbleBackground from "./blocks/BubbleBackground";
import * as antColor from "@ant-design/colors";

const AppConfig = createContext(undefined);

function App() {
    const [currentPage, _currentPage] = useState();
    const [locale, _locale] = useState(loadLocale());
    const [config, _config] = useState();
    const [color, _color] = useState();

    const pageControl = useRef();

    const [isAppReady, _isAppReady] = useState(false);
    const [isAnimationStg1, _isAnimationStg1] = useState(false);
    const [isAnimationStg2, _isAnimationStg2] = useState(false);

    const startApp = async () => {
        setTimeout(() => {
            _isAppReady(true);
            setTimeout(() => {
                _isAnimationStg1(true);
                setTimeout(() => {
                    _isAnimationStg2(true);
                }, 3300);
            }, 2000);
        }, 1000);
    };

    const renderPage = (page) => {
        switch (page.type) {
            case PageType.Cover:
                return <Cover ready={isAppReady} pageId={page.key} />;
            case PageType.Wiki:
                return <Wiki pageId={page.key} />;
            case PageType.Footer:
                return <Footer pageId={page.key} />;
            default:
                return null;
        }
    };

    const scrollDown = () => {
        if (currentPage < config.pages.length - 1) {
            pageControl.current.scrollTo(currentPage + 1);
        } else {
            pageControl.current.scrollTo(0);
        }
    };

    const randomColor = () => {
        const colors = [
            antColor.red,
            antColor.volcano,
            antColor.orange,
            antColor.gold,
            antColor.yellow,
            antColor.lime,
            antColor.green,
            antColor.cyan,
            antColor.blue,
            antColor.geekblue,
            antColor.purple,
            antColor.magenta,
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    useEffect(() => {
        _color(randomColor());
        fetch("config.json")
            .then((resp) => resp.json())
            .then((data) => _config(data))
            .then(startApp);
    }, []);

    if (config !== undefined) {
        return (
            <AppConfig.Provider value={{ locale, _locale, config, color }}>
                <ConfigProvider
                    theme={{
                        token: {
                            fontFamily: `Honkai, StarRail-EN, StarRail-ZH, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
                            colorPrimary: color.primary,
                        },
                    }}
                >
                    <ConfigProvider
                        locale={localeProvider[locale]}
                        direction={layoutDirection[locale]}
                    >
                        <BubbleBackground />
                        <div className="App">
                            <ScreenLock active={!isAnimationStg2} />
                            <PageControl.Parent
                                ref={pageControl}
                                // currentPage={targetPage}
                                onChange={_currentPage}
                                showSteps={isAnimationStg1}
                                steps={config.pages}
                            >
                                {config.pages.map((page, i) => (
                                    <PageControl.Child key={i}>
                                        {renderPage(page)}
                                    </PageControl.Child>
                                ))}
                            </PageControl.Parent>
                        </div>
                    </ConfigProvider>
                    {isAnimationStg1 ? (
                        <Fade delay={3300} triggerOnce>
                            <LocaleControl />
                            <ScrollButton
                                onClick={scrollDown}
                                icon={
                                    currentPage === config.pages.length - 1 ? (
                                        <Remix.ArrowUpDouble />
                                    ) : (
                                        <Remix.ArrowDown />
                                    )
                                }
                            />
                        </Fade>
                    ) : (
                        <></>
                    )}
                </ConfigProvider>
            </AppConfig.Provider>
        );
    }
}

export default App;
export { AppConfig };
