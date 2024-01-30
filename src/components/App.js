import { ConfigProvider } from "antd";
import "cross-fetch";
import { createContext, useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import "../fonts/Font.css";
import { randomColor } from "../utilities/color";
import { layoutDirection, loadLocale, localeProvider } from "../utilities/locale";
import { sleep } from "../utilities/time";
import BubbleBackground from "./animations/BubbleBackground";
import BGM from "./widgets/BGM";
import LocaleControl from "./widgets/LocaleControl";
import PageControl from "./widgets/PageControl";
import ScreenLock from "./widgets/ScreenLock";
import ScrollButton from "./widgets/ScrollButton";
import Remix from "./icons/Remix";
import Cover from "./pages/Cover";
import Footer from "./pages/Footer";
import Wiki from "./pages/Wiki";

const AppConfig = createContext(undefined);

function App() {
    const pageControl = useRef();

    const [currentPage, _currentPage] = useState();
    const [locale, _locale] = useState(loadLocale());
    const [config, _config] = useState();
    const [color, _color] = useState();

    const [isAppReady, _isAppReady] = useState(false);
    const [isAnimationStg1, _isAnimationStg1] = useState(false);
    const [isAnimationStg2, _isAnimationStg2] = useState(false);

    const startApp = async () => {
        await sleep(1);
        _isAppReady(true);
        await sleep(2);
        _isAnimationStg1(true);
        await sleep(3.3);
        _isAnimationStg2(true);
    };

    const renderPage = (page) => {
        switch (page.type) {
            case "cover":
                return <Cover ready={isAppReady} pageId={page.key} />;
            case "wiki":
                return <Wiki pageId={page.key} />;
            case "footer":
                return <Footer pageId={page.key} />;
            default:
                return null;
        }
    };

    const onPageScroll = () => {
        if (currentPage < config.pages.length - 1) {
            pageControl.current.scrollTo(currentPage + 1);
        } else {
            pageControl.current.scrollTo(0);
        }
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
                    <ConfigProvider locale={localeProvider[locale]} direction={layoutDirection[locale]}>
                        <BubbleBackground />
                        <BGM start={isAnimationStg2} url={"bgm/Take the Journey.ogg"} />
                        <div className="App">
                            <ScreenLock active={!isAnimationStg2} />
                            <PageControl.Parent
                                ref={pageControl}
                                onChange={_currentPage}
                                showSteps={isAnimationStg1}
                                steps={config.pages}
                            >
                                {config.pages.map((page, i) => (
                                    <PageControl.Child key={i}>{renderPage(page)}</PageControl.Child>
                                ))}
                            </PageControl.Parent>
                        </div>
                    </ConfigProvider>
                    {isAnimationStg1 ? (
                        <Fade delay={3300} triggerOnce>
                            <LocaleControl />
                            <ScrollButton
                                onClick={onPageScroll}
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

