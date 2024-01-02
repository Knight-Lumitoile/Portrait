import Logo from "../icons/logo";
import "./Cover.css"

function Cover({ready}) {
    return (
        <div className={`Cover ${ready ? "Ready" : ""}`}>
            <Logo className={`No1 ${ready ? "Ready" : ""}`}/>
            <Logo className={`No2 ${ready ? "Ready" : ""}`}/>
        </div>
    )
}

export default Cover