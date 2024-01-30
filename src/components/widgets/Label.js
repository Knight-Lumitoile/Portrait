import { Typography } from "antd";
import { useContext } from "react";
import { Fade, Reveal } from "react-awesome-reveal";
import { AppConfig } from "../App";
import { Flip } from "../animations";
import "./Label.css";

function DynamicLanguageTitle({ text }) {
    const { locale } = useContext(AppConfig);

    return (
        <Fade>
            <Typography.Title className={"DynamicLanguageTitle"}>
                <Reveal keyframes={Flip()} cascade damping={0.05}>
                    {((text ?? {})[locale] ?? "").split("").map((v, i) => (
                        <span key={i}>{v}</span>
                    ))}
                </Reveal>
            </Typography.Title>
        </Fade>
    );
}

function DynamicLanguageLabel({ content, c }) {
    const { locale } = useContext(AppConfig);

    return <>{(c ?? content ?? {})[locale] ?? ""}</>;
}

function RevealLabel({ children }) {
    return <span className={"RevealLabel"}>{children}</span>;
}

export { DynamicLanguageLabel as DLL, DynamicLanguageTitle as DLT, RevealLabel };
