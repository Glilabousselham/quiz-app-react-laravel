import React, { useState } from 'react'
import SideBar from './SideBar'

const SideBarRelative = () => {
    const [open, setOpen] = useState(true);
    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div style={{
            transitionProperty: "width",
            transitionDuration: ".4s",
            transitionTimingFunction: "linear",
            transitionDelay: "0s",
            width: open ? '300px' : "80px",
        }} className={` d-none d-md-block pt-2`}>
            {/* side bar header */}
            <div className='d-flex justify-content-end '>
                <button onClick={toggle} className='btn btn-sm btn-primary mx-1'>
                    toggle
                </button>
            </div>
            <SideBar open={open} />
        </div>
    )
}

export default SideBarRelative