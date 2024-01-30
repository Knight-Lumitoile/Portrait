import React, { useState, useEffect } from "react";
import "./BubbleBackground.css";
import { theme } from "antd";


const BubbleBackground = ({
    backgroundColor = "#ffffff",
    bubbleColor = "rgb(190 248 255)",
    bubbleCount = 10,
    speed = 10,
}) => {
    const [bubbles, setBubbles] = useState([]);
    const {token} = theme.useToken();

    useEffect(() => {
        const createBubble = (index) => ({
            id: index,
            left: `${(index / bubbleCount) * 100}vw`,
            animationDuration: `${(Math.random() * 0.5 + 0.75) * speed}s`, // Adjusted speed variation
        });

        setBubbles(
            Array.from({ length: bubbleCount }, (_, index) =>
                createBubble(index)
            )
        );
    }, [bubbleCount, speed]);

    return (
        <div className="BubbleBackground">
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="Bubble"
                    style={{
                        left: bubble.left,
                        backgroundColor: token.colorPrimary,
                        animation: `rise ${bubble.animationDuration} linear infinite`,
                    }}
                />
            ))}
        </div>
    );
};

export default BubbleBackground;
