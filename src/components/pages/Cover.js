import {Typography} from "antd";
import Logo from "../icons/Logo";
import "./Cover.css"
import RevealLabel from "../labels/RevealLabel";
import {Fade} from "react-awesome-reveal";

function Cover({ready}) {
    return (
        <div className={`Cover ${ready ? "Ready" : ""}`}>
            <Fade>
                <Logo className={`No1 ${ready ? "Ready" : ""}`}/>
                <Logo className={`No2 ${ready ? "Ready" : ""}`}/>
            </Fade>
            {
                ready ?
                    <div className={"Prologue"}>
                        <Fade cascade delay={2500} damping={1} triggerOnce>
                            <Typography>
                                <Fade>
                                    {"你好！我是洪琛。"}
                                </Fade>
                                <RevealLabel>
                                    {"单身，未婚。"}
                                </RevealLabel>
                            </Typography>
                            <Typography>
                                <Fade>
                                    {"一个乐观、天真、内向、传统的大男孩。"}
                                </Fade>
                                <RevealLabel>
                                    {"不可否认，我确实有些自私、懒惰。"}
                                </RevealLabel>
                            </Typography>
                            <Typography>
                                <Fade>
                                    {"简介的话，我想不出该写些什么，所以就不写了。"}
                                </Fade>
                                <Fade>
                                    {"想要了解我更多的话，向下滚动就好啦！"}
                                </Fade>
                                <RevealLabel>
                                    <Typography.Text delete>{"其实我就是懒得写"}</Typography.Text>
                                </RevealLabel>
                            </Typography>
                        </Fade>
                    </div>
                    :
                    <></>
            }
        </div>
    )
}

export default Cover