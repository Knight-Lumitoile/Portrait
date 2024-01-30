import { Button } from "antd";
import "./ScrollButton.css";

function ScrollButton({ onClick, icon }) {
    return (
        <div className={"ScrollButton"}>
            <Button shape={"circle"} icon={icon} onClick={onClick} />
        </div>
    );
}

export default ScrollButton;
