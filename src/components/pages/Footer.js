import { Button, Typography } from "antd";
import { useContext } from "react";
import { Reveal } from "react-awesome-reveal";
import { openLink } from "../../utilities/link";
import { AppConfig } from "../App";
import { FadeUp } from "../animations";
import { DLL } from "../widgets/Label";
import Remix from "../icons/Remix";
import "./Footer.css";

function Footer({ pageId }) {
    const { config } = useContext(AppConfig);

    return (
        <div className={"Footer"}>
            <Typography.Paragraph align={"center"}>
                <Reveal keyframes={FadeUp(20)} cascade damping={0.1}>
                    <Typography.Text className={"ContactName"} strong>
                        <DLL c={config.content[pageId].name} />
                    </Typography.Text>
                    <Typography.Text className={"ContactTitle"} italic>
                        <DLL c={config.content[pageId].title} />
                    </Typography.Text>
                    <Typography.Text className={"ContactAddress"}>
                        <DLL c={config.content[pageId].address} />
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
                            icon={<Remix.Meta />}
                            size={"small"}
                            onClick={() => openLink(config.content[pageId].link["meta"])}
                        />
                        <Button
                            type={"text"}
                            shape={"circle"}
                            icon={<Remix.Twitter />}
                            size={"small"}
                            onClick={() => openLink(config.content[pageId].link["twitter"])}
                        />
                        <Button
                            type={"text"}
                            shape={"circle"}
                            icon={<Remix.Linkedin />}
                            size={"small"}
                            onClick={() => openLink(config.content[pageId].link["linkedin"])}
                        />
                        <Button
                            type={"text"}
                            shape={"circle"}
                            icon={<Remix.Github />}
                            size={"small"}
                            onClick={() => openLink(config.content[pageId].link["github"])}
                        />
                    </div>
                </Reveal>
            </Typography.Paragraph>
        </div>
    );
}

export default Footer;
