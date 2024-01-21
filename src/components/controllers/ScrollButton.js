import "./ScrollButton.css";
import {Button} from "antd";

function ScrollButton({onClick, icon}) {
    return (
        <div className={"ScrollButton"}>
            <Button shape={"circle"} icon={icon} onClick={onClick}/>
        </div>
    );
}

export default ScrollButton;
