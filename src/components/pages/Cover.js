import { Typography } from "antd";
import Logo from "../icons/Logo";
import "./Cover.css"
import RevealLabel from "../labels/RevealLabel";

function Cover({ ready }) {
    return (
        <div className={`Cover ${ready ? "Ready" : ""}`}>
            <Logo className={`No1 ${ready ? "Ready" : ""}`} />
            <Logo className={`No2 ${ready ? "Ready" : ""}`} />
            <Typography.Text style={{textAlign:"center"}}>
                你好！我是洪琛。
                <br/>
                一个乐观、天真、内向、传统的大男孩。
                <br/>
                <RevealLabel>
                也有些自私、懒惰、懦弱。
                </RevealLabel>
                
                <br/>
                简介的话，我想不出该写些什么，所以就不写了。想要了解我更多的话，向下滚动就好啦！
                <br/>
                <RevealLabel>
                其实我就是懒得写。
                </RevealLabel>
                <br/>
                
                
                
            </Typography.Text>
        </div>
    )
}

export default Cover