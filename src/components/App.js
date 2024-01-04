import './App.css';
import PageControl from "./controllers/PageControl";
import {createContext, useState} from "react";
import {ConfigProvider, theme, Typography} from "antd";
import LocaleControl from "./controllers/LocaleControl";
import Cover from "./pages/Cover";
import ScreenLock from "./controllers/ScreenLock";

const AppConfig = createContext(undefined)

function App() {

    const [test, _test] = useState(0)
    const [locale, _locale] = useState("zh_CN")

    const [isAppReady, _isAppReady] = useState(false)
    const [isAnimationCompleted, _isAnimationCompleted] = useState(false)

    const startApp = () => {
        _isAppReady(true)
        setTimeout(() => {
            _isAnimationCompleted(true)
        }, 2000)
    }

    return (
        <>
            <div className="App">

                <div style={{position: "fixed", color: "red", top: 50, zIndex: 9999}} onClick={startApp}>button {test}</div>


                <AppConfig.Provider value={{locale, _locale}}>
                    <ConfigProvider theme={{
                        algorithm: theme.darkAlgorithm
                    }}>
                        <ScreenLock active={!isAnimationCompleted}/>
                        <PageControl.Parent currentPage={test} onChange={console.log} steps={isAnimationCompleted}>
                            <PageControl.Child>
                                <Cover ready={isAppReady}/>
                            </PageControl.Child>
                            <PageControl.Child pageIndex={1}>
                                <Typography.Text>Journey旅程</Typography.Text>
                                <div>666</div>
                            </PageControl.Child>
                            <PageControl.Child pageIndex={2}>
                                <Typography.Text>Creation造物</Typography.Text>
                                <div>666</div>
                            </PageControl.Child>
                            <PageControl.Child pageIndex={3}>
                                <Typography.Text>Interest兴趣</Typography.Text>
                                <div>666</div>
                            </PageControl.Child>
                            <PageControl.Child pageIndex={4}>
                                <Typography.Text>Connect联络</Typography.Text>
                                <div>666</div>
                            </PageControl.Child>
                        </PageControl.Parent>
                        
                        <LocaleControl/>
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
