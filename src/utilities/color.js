import * as color from "@ant-design/colors";
const colorSchema = ["magenta", "red", "volcano", "orange", "green", "cyan", "blue", "geekblue", "purple"];

const randomColor = () => {
    const colors = [
        color.red,
        color.volcano,
        color.orange,
        color.gold,
        color.yellow,
        color.lime,
        color.green,
        color.cyan,
        color.blue,
        color.geekblue,
        color.purple,
        color.magenta,
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

export { colorSchema, randomColor };

