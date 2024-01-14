import {Typography} from "antd";
import {Fade} from "react-awesome-reveal";
import DLL from "../labels/DynamicLanguageLabel";

function Title({text}) {
    return (
        <Fade direction={"up"}>
            <Typography.Title style={{textAlign: "center", margin: "50px 0", fontSize: '4em', fontVariant: 'small-caps', fontWeight: 'normal'}}>
                <DLL c={text}/>
            </Typography.Title>
        </Fade>
    )
}

export default Title