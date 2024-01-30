import { Corner, Root, Scrollbar, Thumb, Viewport } from "@radix-ui/react-scroll-area";
import { forwardRef } from "react";
import "./ScrollArea.css";

const ScrollArea = forwardRef(({ children, onScroll }, ref) => {
    return (
        <Root className={"ScrollArea"}>
            <Viewport className={"Viewport"} onScroll={onScroll} ref={ref}>
                {children}
            </Viewport>
            <Scrollbar orientation={"vertical"}>
                <Thumb />
            </Scrollbar>
            <Scrollbar orientation={"horizontal"}>
                <Thumb />
            </Scrollbar>
            <Corner />
        </Root>
    );
});

export default ScrollArea;
