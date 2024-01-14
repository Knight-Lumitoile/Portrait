import "./Creation.css"
import Title from "../blocks/Title";
import __ from "../../config/locale/config.json";
import Card from "../blocks/Card";

function Creation() {
    return (
        <div className={"Creation"}>
            <Title text={__.label.pages[2]}/>
            {
                __.body.creation.map(v => <Card
                    title={v.title}
                    timestamp={v.timestamp}
                    subtitle={v.subtitle}
                    content={v.content}
                />)
            }
        </div>
    )
}

export default Creation