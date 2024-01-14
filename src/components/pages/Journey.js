import {Typography} from "antd";
import {Fade} from "react-awesome-reveal";
import "./Journey.css"
import Card from "../blocks/Card";
import __ from "../../config/locale/config.json"
import Title from "../blocks/Title";

function Journey() {
    return (
        <div className={"Journey"}>
            <Title text={__.label.pages[1]}/>
            {
                __.body.journey.map(v => <Card
                    title={v.title}
                    timestamp={v.timestamp}
                    subtitle={v.subtitle}
                    content={v.content}
                />)
            }
        </div>
    )
}

export default Journey