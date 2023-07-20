import React from 'react'
import SideBarRelative from './SideBarRelative'
import NavBar from './NavBar'

const DashboardLayout = ({ children }) => {
    return (
        <div className='d-flex p-0 m-0'>

            <SideBarRelative />


            <div className="w-100">
                <div className="w-100">
                    <NavBar />
                </div>
                {/* content */}
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout