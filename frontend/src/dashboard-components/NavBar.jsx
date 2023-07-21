import React from 'react'

export default function NavBar({ onToggleSideBar }) {
    return (
        <div className='m-primary-bg m-black-color w-100 py-1 px-1 d-flex justify-content-between align-items-center'>
            {onToggleSideBar && <div onClick={onToggleSideBar} className='btn btn-sm btn-primary'>toggle</div>}
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
