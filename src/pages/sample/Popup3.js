function Popup3({closePopup}){

    return <div className="pop_inner" style={{width:"100px", height:"100px"}}>
        <div className="pop_content">
            <div className="pop_header">
                Popup3!!!
                <a href={"#close"} className="close" onClick={closePopup}/>
            </div>
            <div className="pop_body">
                Popup3 내용<br/>
                Popup3 내용<br/>
            </div>
        </div>
    </div>
}

export default Popup3;