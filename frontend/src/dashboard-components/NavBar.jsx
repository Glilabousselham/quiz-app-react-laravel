import React from 'react'
import { MdMenu } from "react-icons/md"

export default function NavBar({ onToggleSideBar }) {
    return (
        <div className='m-primary-bg m-black-color w-100 py-1 px-1 d-flex justify-content-between align-items-center'>



            {onToggleSideBar && <MdMenu onClick={onToggleSideBar} className='fs-3' role='button' />}



            <div className='d-flex justify-content-end gap-2 align-items-center'>
                <div>Hamza borosya</div>
                <div className='bg-light' style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%"
                }}>
                    {/* person icon */}
                </div>
            </div>



        </div>
    )
}
