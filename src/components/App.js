import './App.css';
import {Pages, Page} from "./_library/Pages";
import {useState} from "react";
import {ConfigProvider, theme, Typography} from "antd";

function App() {

    const [test,_test]=useState(0)
    return (
        <div className="App">
            <ConfigProvider theme={{
                algorithm:theme.darkAlgorithm
            }}>
                <div style={{position:"fixed"}} onClick={()=>_test(v=>(v+1)%5)}>button {test}</div>
                <Pages currentPage={test} onChange={_test} steps={[
                    "Portrait肖像",
                    "Journey旅程",
                    "Creation造物",
                    "Interest兴趣",
                    "Connect联络"
                ]}>
                    <Page pageIndex={0}>
                        <Typography.Text>Portrait肖像</Typography.Text>
                        <div>666</div>
                    </Page>
                    <Page pageIndex={1}>
                        <Typography.Text>Journey旅程</Typography.Text>
                        <div>666</div>
                    </Page>
                    <Page pageIndex={2}>
                        <Typography.Text>Creation造物</Typography.Text>
                        <div>666</div>
                    </Page>
                    <Page pageIndex={3}>
                        <Typography.Text>Interest兴趣</Typography.Text>
                        <div>666</div>
                    </Page>
                    <Page pageIndex={4}>
                        <Typography.Text>Connect联络</Typography.Text>
                        <div>666</div>
                    </Page>
                </Pages>
            </ConfigProvider>
        </div>
    );
}

export default App;
