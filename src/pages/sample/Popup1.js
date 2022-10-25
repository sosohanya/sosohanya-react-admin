import Popup2 from "./Popup2";

function Popup1({openPopup, closePopup}){
    const onClickInnerPopup = () => {
        // 모달 팝업 열기, 하위에서 다시 팝업 열기,닫기 위해 핸들러 전달
        openPopup(<Popup2 openPopup={openPopup} closePopup={closePopup}/>)
    }

    return <div className="pop_inner" style={{width:"500px", height:"500px"}}>
        <div className="pop_content">
            <div className="pop_header">
                Popup1!!!
                <a href={"/#close"} className="close" onClick={closePopup}/>
            </div>
            <div className="pop_body">
                Popup1 내용<br/>
                Popup1 내용<br/>
                Popup1 내용<br/>
                Popup1 내용<br/>
                Popup1 내용<br/>
                Popup1 내용<br/>
                Popup1 내용<br/>
                Popup1 내용<br/>
                Popup1 내용<br/>
                <button onClick={onClickInnerPopup}>팝업2 열기</button>
            </div>
        </div>
    </div>
}

export default Popup1;