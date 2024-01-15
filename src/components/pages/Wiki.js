import "./Wiki.css"
import Card from "../blocks/Card";
import __ from "../../config/locale/config.json"
import Title from "../labels/Title";

function Wiki({pageId}) {
    return (
        <div className={"Wiki"}>
            <Title text={__.pages.find(v => v.key === pageId).title}/>
            {
                __.content[pageId].map(v => <Card
                    title={v.title}
                    timestamp={v.timestamp}
                    subtitle={v.subtitle}
                    content={v.content}
                />)
            }
        </div>
    )
}

export default Wiki