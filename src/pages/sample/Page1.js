import {useOutletContext} from "react-router-dom";
import Popup1 from "./Popup1";

function Page1(){
    // Layout의 Outlet context로 모달 팝업 제어 함수 전달
    const [openModalPopup, closeModalPopup] = useOutletContext();

    const onClickPopup1 = () => {
        // 모달 팝업 열기, 하위에서 다시 팝업 열기,닫기 위해 핸들러 전달
        openModalPopup(<Popup1 openPopup={openModalPopup} closePopup={closeModalPopup}/>)
    }

    return <div className="contents">
        <h2>Page1</h2>
        <button onClick={onClickPopup1}>모달 팝업 열기</button>
    </div>
}

export default Page1;