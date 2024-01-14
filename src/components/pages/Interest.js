import {Typography} from "antd";
import {Fade} from "react-awesome-reveal";
import "./Interest.css"

function Interest() {
    return (
        <div className={"Interest"}>
            <Fade >
                <Typography.Title>Interest</Typography.Title>
            </Fade>
            Music
            Painting
            Writing
            Fantasy World
            Game
            Eating

        </div>
    )
}

export default Interest