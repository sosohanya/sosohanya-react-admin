import React from 'react';
import {useEffect, useState} from "react";
import ReactDOM from "react-dom";

// dimmed 처리
function ModalDimmed({zIndex}){
    return ReactDOM.createPortal(<div className="modal-dimmed" style={{zIndex:zIndex}}/>, document.getElementById("modal-dimmed"))
}

// Modal Count 만큼 표시, zIndex로 dimmed 처리 되도록
function CreateDiv({children, modalIdx}){
    const zIndex = 1000 + (modalIdx * 10);
    return <div className="pop_layout" style={{display:"block", zIndex:zIndex+1}}>
        {children}
        <ModalDimmed zIndex={zIndex} />
    </div>
}

// 모달 팝업 추가/삭제 및 표시
function Modal({children, refreshCount, isOpen}){
    const modal_pop = document.getElementById("modal_pop"); // createPortal로 제어할 DOM Element
    const [modalchildren, setModalchildren] = useState([]); // Modal에 표시할 children(component) array

    useEffect(()=>{
        if(isOpen) {
            setModalchildren(curr => [...curr, children]); // Modal에 표시할 내용 추가
        }else{
            setModalchildren(curr => curr.splice(0, curr.length -1)); // Modal에 표시할 내용 제거
        }

    }, [children, refreshCount, isOpen]);

    if(modalchildren.length > 0){
        return ReactDOM.createPortal(
            modalchildren.map((item, idx) => (<CreateDiv key={idx} children={item} modalIdx={idx} />)),
            modal_pop
        )

    }

    return <></>
}

export default Modal;