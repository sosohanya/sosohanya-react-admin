import logo from "../assets/images/logo.png";

function Lnb(){
    return <div className="lnb">
        <div className="logo">
            <img src={logo} alt={"sosohanya logo"} />
        </div>
        <div className="menus">
            <p className="tit">Menu 1</p>
            <ul>
                <li>
                    <a href={"/#"}>Sub 1</a>
                </li>
                <li className={"on"}>
                    <a href={"/#"}>Sub 2</a>
                </li>
                <li>
                    <a href={"/#"}>Sub 3</a>
                </li>
            </ul>
        </div>
    </div>
}

export default Lnb;