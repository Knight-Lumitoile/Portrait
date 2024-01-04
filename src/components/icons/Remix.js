import AntIcon from '@ant-design/icons';
import "./Remix.css"


const Icon = (svg) => {
    return (props) => <AntIcon component={svg} {...props} />
}

const Remix = {
    Shining: Icon(() => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 8L23.5 12L16 16L12 23.5L8 16L0.5 12L8 8L12 0.5L16 8ZM19.25 12L14.5217 9.47826L12 4.75L9.47826 9.47826L4.75 12L9.47826 14.5217L12 19.25L14.5217 14.5217L19.25 12Z" fill="currentColor"></path></svg>)),
    Translate: Icon(() => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 15V17C5 18.0544 5.81588 18.9182 6.85074 18.9945L7 19H10V21H7C4.79086 21 3 19.2091 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.8852L15.753 16H18.245L17 12.8852ZM8 2V4H12V11H8V14H6V11H2V4H6V2H8ZM17 3C19.2091 3 21 4.79086 21 7V9H19V7C19 5.89543 18.1046 5 17 5H14V3H17ZM6 6H4V9H6V6ZM10 6H8V9H10V6Z" fill="currentColor"></path></svg>
    )),


    // Shining: Icon(() => (
    // )),

}

export default Remix