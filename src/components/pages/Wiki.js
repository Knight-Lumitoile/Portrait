import { useContext } from "react";
import { AppConfig } from "../App";
import Card from "../widgets/Card";
import { DLT } from "../widgets/Label";
import "./Wiki.css";

function Wiki({ pageId }) {
    const { config } = useContext(AppConfig);

    return (
        <div className={"Wiki"}>
            <DLT text={config.pages.find((v) => v.key === pageId).title} />
            {config.content[pageId].map((v, i) => (
                <Card
                    key={i}
                    title={v.title}
                    timestamp={v.timestamp}
                    subtitle={v.subtitle}
                    content={v.content}
                    links={v.links}
                />
            ))}
        </div>
    );
}

export default Wiki;
