import Popup3 from "./Popup3";

function Popup2({openPopup, closePopup}){

    const onClickInnerPopup = () => {
        // 모달 팝업 열기, 팝업 닫기 위해 핸들러 전달
        openPopup(<Popup3 closePopup={closePopup}/>)
    }

    return <div className="pop_inner" style={{width:"300px", height:"300px"}}>
        <div className="pop_content">
            <div className="pop_header">
                Popup2!!!
                <a href={"/#close"} className="close" onClick={closePopup}/>
            </div>
            <div className="pop_body">
                Popup2 내용<br/>
                Popup2 내용<br/>
                Popup2 내용<br/>
                Popup2 내용<br/>
                Popup2 내용<br/>
                Popup2 내용<br/>
                <button onClick={onClickInnerPopup}>팝업3 열기</button>
            </div>
        </div>
    </div>
}

export default Popup2;