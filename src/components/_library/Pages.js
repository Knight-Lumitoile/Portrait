import "./Pages.css"
import {Children, cloneElement, forwardRef, useEffect, useRef, useState} from 'react';
import {ConfigProvider, Steps} from "antd";

function getPageIndex(pageIndex) {
    if (pageIndex === undefined) {
        return "Page"
    } else {
        return `Page-${pageIndex}`
    }
}

function Pages({children, currentPage = 0, onChange, steps = []}) {

    const child = useRef([]);
    const self = useRef(undefined)

    const [index, _index] = useState(currentPage)
    const [stepItems, _stepItems] = useState([])

    const scrollTo = (pageIndex) => {
        if (pageIndex !== undefined)
            child.current[pageIndex].scrollIntoView({behavior: 'smooth'})
    }

    useEffect(() => {
        _index(currentPage)
    }, [currentPage]);

    useEffect(() => {
        if (steps && steps.length > 0)
            _stepItems(steps)
    }, [steps])

    useEffect(() => {
        scrollTo(index)
        if (typeof onChange === "function")
            onChange(index)
    }, [index])

    useEffect(() => {
        const handleScroll = () => {
            const difference = window.innerHeight / 2
            if (window.scrollY < difference) {
                _index(0)
                return
            }
            if (self.current.scrollHeight - window.innerHeight - window.scrollY < difference) {
                _index(child.current.length - 1)
                return
            }
            let targetPageIndex = child.current.findIndex(page => window.scrollY < page.offsetTop - difference)
            if (targetPageIndex > 0 && targetPageIndex - 1 !== index) {
                _index(targetPageIndex - 1)
            }
        };
        window.addEventListener('wheel', handleScroll);
        window.addEventListener('touchstart', handleScroll);
        window.addEventListener('touchmove', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
        };
    }, []);

    return (
        <ConfigProvider theme={{
            components:{
                Steps:{
                    navArrowColor:"#ffffff"
                }
            },
            theme:{
                colorPrimary:"#ffffff"
            }
        }}>
            <div className={"Pages"} ref={self}>
                {Children.map(children, (c, i) =>
                    cloneElement(c, {
                        ref: el => (child.current[i] = el),
                    })
                )}
                <div className={"Stepper"}>
                    <Steps
                        current={index}
                        onChange={_index}
                        type={"inline"}
                        items={stepItems.map((v, i) => ({title: v, status: i === index ? "process" : "wait"}))}
                    />
                </div>
            </div>
        </ConfigProvider>
    );
}

const Page = forwardRef(({children}, ref) => {
        return (
            <div className={"Page"} ref={ref}>
                {children}
            </div>
        )
    }
);

export {Pages, Page};
