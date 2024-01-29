import {Button, Typography} from "antd";
import "./Footer.css";
import {Reveal} from "react-awesome-reveal";
import {FadeUp} from "../animations";
import {useContext} from "react";
import {AppConfig} from "../App";
import DLL from "../labels/DynamicLanguageLabel";
import Remix from "../icons/Remix";

function Footer({pageId}) {
    const {config} = useContext(AppConfig);

    const openLink = (id) => {
        window.open(config.content[pageId].link[id]).focus();
    };

    return (
        <div className={"Footer"}>
            <Typography.Paragraph align={"center"}>
                <Reveal keyframes={FadeUp(20)} cascade damping={0.1}>
                    <Typography.Text className={"ContactName"} strong>
                        <DLL c={config.content[pageId].name}/>
                    </Typography.Text>
                    <Typography.Text className={"ContactTitle"} italic>
                        <DLL c={config.content[pageId].title}/>
                    </Typography.Text>
                    <Typography.Text className={"ContactAddress"}>
                        <DLL c={config.content[pageId].address}/>
                    </Typography.Text>
                    <Typography.Link
                        underline
                        className={"ContactEmail"}
                        href={`mailto:${config.content[pageId].email}`}
                    >
                        {config.content[pageId].email}
                    </Typography.Link>
                    <div className={"ContactLink"}>
                        <Button
                            type={"text"}
                            shape={"circle"}
                            icon={<Remix.Meta/>}
                            size={"small"}
                            onClick={() => openLink("meta")}
                        />
                        <Button
                            type={"text"}
                            shape={"circle"}
                            icon={<Remix.Twitter/>}
                            size={"small"}
                            onClick={() => openLink("twitter")}
                        />
                        <Button
                            type={"text"}
                            shape={"circle"}
                            icon={<Remix.Linkedin/>}
                            size={"small"}
                            onClick={() => openLink("linkedin")}
                        />
                        <Button
                            type={"text"}
                            shape={"circle"}
                            icon={<Remix.Github/>}
                            size={"small"}
                            onClick={() => openLink("github")}
                        />
                    </div>
                </Reveal>
            </Typography.Paragraph>
        </div>
    );
}

export default Footer;
