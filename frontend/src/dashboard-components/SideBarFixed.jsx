import React, { useState } from 'react'
import SideBar from './SideBar'
import { MdClose } from 'react-icons/md'

const SideBarFixed = ({ open, onClose }) => {


    return (
        <div style={{
            transitionProperty: "margin-left",
            transitionDuration: ".6s",
            transitionTimingFunction: "ease-out",
            transitionDelay: "0s",
            width: '250px',
            height: '100vh',
            position: "fixed",
            marginLeft: open ? "0px" : "-360px",
            background: "var(--white-color)"
        }} className={`shadow z-1 d-block d-md-none pt-2`}>
            {/* side bar header */}
            <div className='d-flex justify-content-end '>

                <MdClose role='button' onClick={onClose} className='fs-3 mx-1' />

            </div>
            <SideBar onClose={onClose} />
        </div>
    )
}

export default SideBarFixed