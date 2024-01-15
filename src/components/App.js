import './App.css';
import PageControl from "./controllers/PageControl";
import {createContext, useState} from "react";
import {ConfigProvider, Typography} from "antd";
import LocaleControl from "./controllers/LocaleControl";
import Cover from "./pages/Cover";
import ScreenLock from "./controllers/ScreenLock";
import {Fade} from "react-awesome-reveal";
import ScrollDemon from "./controllers/ScrollDemon";
import __ from "../config/locale/config.json"
import {PageType} from "../config/enum";
import Wiki from "./pages/Wiki";

const AppConfig = createContext(undefined)

function App() {

    const [test, _test] = useState(0)
    const [locale, _locale] = useState("en_US")

    const [isAppReady, _isAppReady] = useState(false)
    const [isAnimationCompleted, _isAnimationCompleted] = useState(false)

    const startApp = () => {
        _isAppReady(true)
        setTimeout(() => {
            _isAnimationCompleted(true)
        }, 2000)
    }

    const renderPage = (page) => {
        switch (page.type) {
            case PageType.Cover:
                return <Cover ready={isAppReady}/>;
            case PageType.Wiki:
                return <Wiki pageId={page.key}/>;
            case PageType.Footer:
                return <Typography.Text>Connect联络</Typography.Text>;
            default:
                return null;
        }
    }


    return (
        <>
            <div className="App">

                <div style={{position: "fixed", color: "red", top: 50, zIndex: 9999}} onClick={startApp}>button {test}</div>


                <AppConfig.Provider value={{locale, _locale}}>
                    <ConfigProvider>
                        <ScreenLock active={!isAnimationCompleted}/>
                        <PageControl.Parent
                            currentPage={test}
                            onChange={console.log}
                            showSteps={isAnimationCompleted}
                            steps={__.pages}
                        >
                            {
                                __.pages.map((page) =>
                                    <PageControl.Child>
                                        {renderPage(page)}
                                    </PageControl.Child>
                                )
                            }
                        </PageControl.Parent>
                        {
                            isAnimationCompleted ?
                                <Fade delay={3300} triggerOnce>
                                    <LocaleControl/>
                                    <ScrollDemon/>
                                </Fade> : <></>
                        }
                    </ConfigProvider>
                </AppConfig.Provider>
            </div>
        </>
    );
}

export default App;
export {
    AppConfig
}
