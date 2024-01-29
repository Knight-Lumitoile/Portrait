import "./Wiki.css";
import Card from "../blocks/Card";
import Title from "../labels/Title";
import {useContext} from "react";
import {AppConfig} from "../App";

function Wiki({pageId}) {
    const {config} = useContext(AppConfig);

    return (
        <div className={"Wiki"}>
            <Title text={config.pages.find((v) => v.key === pageId).title}/>
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
