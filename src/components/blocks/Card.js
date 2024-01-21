import {Typography} from "antd";
import "./Card.css";
import {Fade, Reveal} from "react-awesome-reveal";
import {blue} from "@ant-design/colors";
import RevealLabel from "../labels/RevealLabel";
import DLL from "../labels/DynamicLanguageLabel";
import {FadeUp} from "../animations";

function Card({title, timestamp, subtitle, content}) {
    return (
        <Fade>
            <div className={"Card"}>
                <Typography.Paragraph>
                    <Reveal keyframes={FadeUp(20)} cascade damping={0.1}>
                        <Typography.Title level={3} style={{color: blue.primary}}>
                            {<DLL c={title}/>}
                        </Typography.Title>
                        <Typography.Paragraph>
                            {timestamp ? (
                                <Typography.Text strong>
                                    <DLL c={timestamp}/>
                                </Typography.Text>
                            ) : null}
                            {timestamp && subtitle ? <br/> : null}
                            {subtitle ? (
                                <Typography.Text italic style={{color: blue.primary}}>
                                    <DLL c={subtitle}/>
                                </Typography.Text>
                            ) : null}
                        </Typography.Paragraph>
                        {content.map((p,i) =>
                            p.hidden ? (
                                <RevealLabel key={i}>
                                    <Typography.Paragraph>
                                        <DLL c={p.text}/>
                                    </Typography.Paragraph>
                                </RevealLabel>
                            ) : (
                                <Typography.Paragraph key={i}>
                                    <DLL c={p.text}/>
                                </Typography.Paragraph>
                            )
                        )}
                    </Reveal>
                </Typography.Paragraph>
            </div>
        </Fade>
    );
}

export default Card;
