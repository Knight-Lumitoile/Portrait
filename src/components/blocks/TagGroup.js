import {Space, Tag} from "antd";
import {useState} from "react";
import "./TagGroup.css"
import Remix from "../icons/Remix";

const COLOR_SCHEMA = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple"
]

function TagGroup({tags}) {
    const [usedColors, _usedColors] = useState([]);

    const openLink = (link) => {
        window.open(link).focus();
    };

    const getRandomColor = () => {
        const availableColors = COLOR_SCHEMA.filter(color => !usedColors.includes(color));
        if (availableColors.length === 0) {
            _usedColors([]);
            return COLOR_SCHEMA[Math.floor(Math.random() * COLOR_SCHEMA.length)];
        } else {
            return availableColors[Math.floor(Math.random() * availableColors.length)];
        }
    };

    const Icon = ({name}) => {
        if (Remix.hasOwnProperty(name)){
            const Cpn = Remix[name]
            return <Cpn/>
        }else{
            return <></>
        }
    }

    return (
        <Space.Compact size={10} className={"TagGroup"}>
            {
                tags.map(t => (
                    <Tag
                        key={t.name}
                        className={"Tag"}
                        onClick={() => openLink(t.link)}
                        color={getRandomColor()}
                        icon={<Icon name={t.name}/>}
                    >
                        {t.name}
                    </Tag>
                ))
            }
        </Space.Compact>
    );
}

export default TagGroup;