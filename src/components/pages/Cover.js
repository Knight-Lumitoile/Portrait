import {Typography} from "antd";
import Logo from "../icons/Logo";
import "./Cover.css";
import RevealLabel from "../labels/RevealLabel";
import {Fade, Reveal} from "react-awesome-reveal";
import {useContext, useEffect, useState} from "react";
import {AppConfig} from "../App";
import DLL from "../labels/DynamicLanguageLabel";
import {FadeUp} from "../animations";

function Cover({ready, pageId}) {
    const {config} = useContext(AppConfig);

    const [showPrologue, _showPrologue] = useState(false);

    useEffect(() => {
        if (ready) setTimeout(() => _showPrologue(true), 2500);
    }, [ready]);

    return (
        <div className={`Cover ${ready ? "Ready" : ""}`}>
            <Fade>
                <Logo className={`No1 ${ready ? "Ready" : ""}`}/>
                <Logo className={`No2 ${ready ? "Ready" : ""}`}/>
            </Fade>
            {!showPrologue ? (
                <></>
            ) : (
                <div className={"Prologue"}>
                    <Reveal keyframes={FadeUp(20)} cascade damping={1}>
                        {config.content[pageId].map((p, i) => (
                            <Typography key={i}>
                                {p.content ? (
                                    <Fade>
                                        <DLL c={p.content}/>
                                    </Fade>
                                ) : (
                                    <></>
                                )}
                                {p.hidden ? (
                                    <RevealLabel>
                                        <DLL c={p.hidden}/>
                                    </RevealLabel>
                                ) : (
                                    <></>
                                )}
                            </Typography>
                        ))}
                    </Reveal>
                </div>
            )}
        </div>
    );
}

export default Cover;
