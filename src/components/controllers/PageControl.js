import "./PageControl.css";
import {Children, cloneElement, forwardRef, useEffect, useImperativeHandle, useRef, useState,} from "react";
import {Button, Tooltip} from "antd";
import DLL from "../labels/DynamicLanguageLabel";
import {Fade} from "react-awesome-reveal";
import ScrollArea from "./ScrollArea";

const Pages = forwardRef(({children, onChange, steps, showSteps}, ref) => {
    const child = useRef([]);
    const self = useRef(undefined);

    const [index, _index] = useState(0);
    const [step, _step] = useState(0);

    const scrollTo = (pageIndex) => {
        if (pageIndex !== undefined) {
            child.current[pageIndex].scrollIntoView({behavior: "smooth"});
        }
    };

    const onScroll = (event) => {
        const hasScrolled = event.target.scrollTop;
        const screenHeight = window.innerHeight;
        if (hasScrolled < screenHeight / 4) {
            _index(0);
            return;
        }
        if (
            self.current.scrollHeight - screenHeight - hasScrolled <
            screenHeight / 4
        ) {
            _index(child.current.length - 1);
            return;
        }
        let targetPageIndex = child.current.findIndex(
            (page) => hasScrolled < page.offsetTop - screenHeight / 3
        );
        if (targetPageIndex > 0 && targetPageIndex - 1 !== index) {
            _index(targetPageIndex - 1);
        }
    };

    useEffect(() => {
        _step(index);
        if (typeof onChange === "function") onChange(index);
    }, [index]);

    useImperativeHandle(ref, () => ({scrollTo}));

    return (
        <>
            <div className={"Pages"}>
                <ScrollArea onScroll={onScroll} ref={self}>
                    {Children.map(children, (c, i) =>
                        cloneElement(c, {
                            ref: (el) => (child.current[i] = el),
                        })
                    )}
                </ScrollArea>
            </div>
            <div className={"Stepper"}>
                {showSteps ? (
                    <Fade delay={3300} triggerOnce>
                        <div className={"Steps"}>
                            {steps.map((v, i) => (
                                <Tooltip
                                    title={<DLL c={v.title}/>}
                                    placement={"left"}
                                    color={"white"}
                                    overlayInnerStyle={{
                                        color: "#666",
                                    }}
                                >
                                    <div>
                                        <Button
                                            shape={"circle"}
                                            type={i === step ? "primary" : "default"}
                                            onClick={() => scrollTo(i)}
                                        />
                                    </div>
                                </Tooltip>
                            ))}
                        </div>
                    </Fade>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
});

const Page = forwardRef(({children, ...props}, ref) => {
    return (
        <div className={"Page"} ref={ref} {...props}>
            {children}
        </div>
    );
});

const PageControl = {Parent: Pages, Child: Page};

export default PageControl;
