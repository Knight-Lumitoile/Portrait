import {Typography} from "antd";
import {Fade, Reveal} from "react-awesome-reveal";
import {Flip} from "../animations";
import {useContext} from "react";
import {AppConfig} from "../App";
import "./Title.css";

function Title({text}) {
    const {locale} = useContext(AppConfig);

    return (
        <Fade>
            <Typography.Title className={"Title"}>
                <Reveal keyframes={Flip()} cascade damping={0.05}>
                    {((text ?? {})[locale] ?? "").split("").map((v, i) => (
                        <span key={i}>{v}</span>
                    ))}
                </Reveal>
            </Typography.Title>
        </Fade>
    );
}

export default Title;
