import Lnb from "../components/Lnb";
import Top from "../components/Top";
import {Outlet} from "react-router-dom";
import {useRef, useState} from "react";
import Modal from "./Modal";

function Layout(){

    /* -------- modal popup 처리 -------- */
    const modalRefresh = useRef(0); // modal popup 갱신용
    const [modalPopup, setModalPop] = useState(<></>); // 모달 팝업 영역안에 들어갈 컴포넌트 내용
    // 아래 핸들러들은 Outlet의 context로 전달된다.
    // 각 페이지에서 사용은 : const [openModalPopup, closeModalPopup] = useOutletContext();
    // 팝업 열기 클릭시 핸들러 (children : 팝업 컴포넌트)
    const openModalPopup = (children) => {
        console.log("openModalPopup");

        setModalPop(<Modal refreshCount={modalRefresh.current++} isOpen={true}>
            {children}
        </Modal>);
    }

    // 팝업 닫기 클릭시 핸들러
    const closeModalPopup = (e) => {
        e?.preventDefault();
        setModalPop(<Modal refreshCount={modalRefresh.current++} isOpen={false}/>);
    }
    /* -------- modal popup 처리 -------- */

    return <div className="wrap">
        <div className="container">
            {/* ---- modal popup 영역이 layout 영역에 있다 ---- */}
            <div id="modal_pop"/>{/*modal_pop 하위에 {modalPopup} 내용이 들어감(ReactDOM.createPortal) */}
            {modalPopup}
            {/* ---- modal popup 영역이 layout 영역에 있다 ---- */}
            <div className="left_area">
                <Lnb/>
            </div>
            <div className="right_area">
                <Top/>
                <div className="contents_area">
                    <Outlet context={[openModalPopup, closeModalPopup]}/> {/* 이 부분이 하위 Route에 매핑된 컴포넌트(page1, page2)로 치환됨 */}
                </div>
            </div>
        </div>
    </div>
}

export default Layout;