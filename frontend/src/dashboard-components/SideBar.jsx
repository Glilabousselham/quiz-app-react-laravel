import React, { useState } from 'react'
import "./SideBar.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { MdAdd, MdAddCircle, MdChecklist, MdDashboard, MdTimer } from 'react-icons/md'
import { IoMdListBox } from "react-icons/io"
const SideBar = ({ open = true, onClose = null }) => {



    return (
        <div className=' my-side-bar w-100'>


            <div className='text-center py-5 fs-1 fw-bold text-primary'>
                {open ? "QUIZEE" : "Q"}
            </div>
            {/* side bar items */}
            <div className=' d-flex flex-column gap-2 fw-medium text-dark  px-1'>

                <SideBarMenuItem onClose={onClose} open={open} icon={<MdDashboard />} link={"/dashboard"}>Dashboard</SideBarMenuItem>
                <SideBarMenuItem onClose={onClose} open={open} icon={<IoMdListBox />} link={"/dashboard/tests"}>Tests</SideBarMenuItem>
                <SideBarMenuItem onClose={onClose} open={open} icon={<MdAddCircle />} link={"/dashboard/new-test"}>New Test</SideBarMenuItem>
                <SideBarMenuItem onClose={onClose} open={open} icon={<MdTimer />} link={"/dashboard/current-tests"}>Current Tests</SideBarMenuItem>

            </div>

        </div>
    )
}

export default SideBar


function SideBarMenuItem({ children, link, open, icon, onClose }) {

    const loc = useLocation()
    const reg = /(^\/|\/$)/

    const active = loc.pathname.replace(reg, "") === link.replace(reg, "") ? "side-bar-manu-item-active" : ""

    const n = useNavigate()
    return (

        <div
            onClick={() => {
                n(link)
                if (onClose !== null) onClose();
            }}
            className={`d-flex justify-content-start align-items-center gap-2  side-bar-manu-item ${active}`}
        >
            <div className={`fw-bolder text-center fs-5 ${!open && "w-100"}`}>
                {icon}
            </div>
            {/* text */}
            {open && <div className={`overflow-hidden`}>{children}</div>}

        </div >

    )
}