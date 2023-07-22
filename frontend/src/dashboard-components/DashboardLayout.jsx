import React, { useState } from 'react'
import SideBarRelative from './SideBarRelative'
import NavBar from './NavBar'
import SideBarFixed from './SideBarFixed'

const DashboardLayout = ({ children }) => {


    const [open, setOpen] = useState(true);
    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div className='d-flex p-0 m-0' style={{
            height: "100vh",
            color: "var(--black-color)"
        }}>

            <SideBarRelative open={open} />
            <SideBarFixed open={open} onClose={toggle} />


            <div className="w-100 d-flex flex-column " style={{
                height: "100vh"
            }}>
                <div className="w-100">
                    <NavBar onToggleSideBar={toggle} />
                </div>
                {/* content */}
                <div style={{ backgroundColor: "var(--bg-dashboard-color)" }} className='p-1 h-100' >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout