import "./RevealLabel.css"

function RevealLabel({ children }) {
    return (
        <span className={"RevealLabel"}>
            {children}
        </span>
    )
}

export default RevealLabel