import React, { useState } from 'react'
import SideBar from './SideBar'

const SideBarRelative = ({ open }) => {

    return (
        <div style={{
            transitionProperty: "width",
            transitionDuration: ".4s",
            transitionTimingFunction: "linear",
            transitionDelay: "0s",
            width: open ? '300px' : "80px",
            background: "var(--white-color)",
            height: "100vh"
        }} className={` d-none d-md-block pt-2`}>
            <SideBar open={open} />
        </div>
    )
}

export default SideBarRelative