import AntIcon from "@ant-design/icons";
import "./index.css";

function Icon(svg) {
    return (props) => <AntIcon component={svg} {...props} />;
}

export default Icon;
