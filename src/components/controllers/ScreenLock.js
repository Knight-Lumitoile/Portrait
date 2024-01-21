import "./ScreenLock.css";

function ScreenLock({active}) {
    return <div className={`ScreenLock ${active ? "Active" : ""}`}/>;
}

export default ScreenLock;
