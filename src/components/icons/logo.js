function Logo({className}) {
    return (
        <svg className={`Logo ${className ?? ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="-80 -80 160 160">
            <g className={"Base"}>
                <path d="M 80 0 A 4 4 90 0 0 -80 0 A 4 4 90 0 0 80 0 M 74 0 A 4 4 90 0 1 -74 0 A 4 4 90 0 1 74 0 "/>
                <path d="M 48 60 C 8 48 -20 48 -52 56 C -36 80 12 88 48 60 Z"/>
            </g>
            <g className={"Furina"}>
                <path d="M -8 -5 C -19 -5 -31 -36 -48 -36 C -53 -36 -22 1 -19 13 C -18 16 -20 39 -25 49 C -11 47 4 48 16 50 C 13 40 8 26 10 21 C 14 10 59 -4 59 -8 C 59 -12 53 -12 49 -11 C 35 -8 20 3 8 -1 C 17 -2 32 -6 35 -13 C 21 -9 32 -26 26 -38 C 22 -46 9 -51 -6 -45 C -25 -52 -19 -64 -6 -68 C -27 -67 -37 -47 -10 -41 C -16 -36 -12 -28 -23 -33 C -23 -17 -13 -10 -8 -5"/>
                <path d="M 21 -64 L 15 -50 C 21 -49 27 -44 30 -38 L 43 -47 L 35 -49 L 36 -61 L 25 -57 Z"/>
            </g>
            <g className={"Stars"}>
                <path d="M -68 9 L -60 6 L -57 -4 L -54 6 L -46 9 L -54 12 L -57 22 L -60 12 Z"/>
                <path d="M -54 28 L -44 24 L -40 12 L -36 24 L -26 28 L -36 32 L -40 44 L -44 32 Z"/>
                <path d="M -40 -12 L -42 -5 L -48 -3 L -42 -1 L -40 6 L -38 -1 L -32 -3 L -38 -5 Z"/>
            </g>
            <g className={"Knight"}>
                <path d="M 44 12 L 36 22 L 26 20 L 32 28 L 26 38 L 38 34 L 46 44 L 46 32 L 56 26 L 46 24"/>
                <path d="M 47 17 C 48 20 50 22 53 23 L 58 20 L 55 19 L 56 14 L 51 15 L 50 12"/>
            </g>
        </svg>
    )
}


export default Logo
