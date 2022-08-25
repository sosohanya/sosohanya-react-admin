import Lnb from "../components/Lnb";
import Top from "../components/Top";
import {Outlet} from "react-router-dom";

function Layout(){
    return <div className="wrap">
        <div className="container">
            {/* ---- modal popup 영역이 layout 영역에 있다 ---- */}
            <div className="pop_layout" style={{zIndex:1001}}>
                <div className="pop_inner">
                    <div className="pop_content">
                        <div className="pop_header">
                            팝업 제목
                            <a href={"/#close"} className="close"/>
                        </div>
                        <div className="pop_body">
                             팝업 내용<br/>
                             팝업 내용<br/>
                             팝업 내용<br/>
                             팝업 내용<br/>
                             팝업 내용<br/>
                             팝업 내용<br/>
                             팝업 내용<br/>
                             팝업 내용<br/>
                             팝업 내용<br/>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---- modal popup 영역이 layout 영역에 있다 ---- */}
            <div className="left_area">
                <Lnb/>
            </div>
            <div className="right_area">
                <Top/>
                <div className="contents_area">
                    <Outlet/> {/* 이 부분이 하위 Route에 매핑된 컴포넌트(page1, page2)로 치환됨 */}
                </div>
            </div>
        </div>
    </div>
}

export default Layout;