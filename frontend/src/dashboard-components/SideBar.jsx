import React, { useState } from 'react'
import "./SideBar.css"
import { useLocation, useNavigate } from 'react-router-dom'
const SideBar = ({ open = true }) => {



    return (
        <div className=' my-side-bar w-100'>


            <div className='text-center py-5 fs-1 fw-bold text-primary'>
                {open ? "QUIZEE" : "Q"}
            </div>
            {/* side bar items */}
            <div className=' d-flex flex-column gap-2 fw-medium text-dark  px-1'>

                <SideBarMenuItem open={open} link={"/dashboard"}>Dashboard</SideBarMenuItem>
                <SideBarMenuItem open={open} link={"/dashboard/tests"}>Tests</SideBarMenuItem>
                <SideBarMenuItem open={open} link={"/dashboard/new-test"}>New Test</SideBarMenuItem>
                <SideBarMenuItem open={open} link={"/dashboard/current-tests"}>Current Tests</SideBarMenuItem>

            </div>

        </div>
    )
}

export default SideBar


function SideBarMenuItem({ children, link, open }) {

    const loc = useLocation()
    const reg = /(^\/|\/$)/

    const active = loc.pathname.replace(reg, "") === link.replace(reg, "") ? "side-bar-manu-item-active" : ""

    const n = useNavigate()
    return (

        <div onClick={() => {
            n(link)
        }} className={`d-flex gap-2  side-bar-manu-item ${active}`}>
            <div className={`fw-bolder text-center  ${!open && "w-100"}`}>
                {/* icom */}ic
            </div>
            {/* text */}
            {open && <div className={`overflow-hidden`}>{children}</div>}

        </div >

    )
}