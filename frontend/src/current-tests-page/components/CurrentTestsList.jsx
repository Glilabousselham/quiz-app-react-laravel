import React from 'react'
import { currentTests } from '../../fake-data/current-tests'
import moment from "moment"
import { useNavigate } from "react-router-dom"

const cardHeight = "150px"

const CurrentTestsList = () => {
    return (
        <div className='row p-0 m-0'>
            {
                currentTests.map(test => (
                    <TestCard key={test.name} item={test} />
                ))
            }

            <NewTestButton />
        </div>
    )
}

export default CurrentTestsList


function TestCard({ item }) {
    return (
        <div className='col-md-4 col-lg-3 p-1'>
            <div className='p-2 shadow-sm'
                style={{ height: cardHeight, background: "var(--white-color)", borderRadius: "var(--border-radius)" }}>

                <div style={{ fontSize: "1.1rem" }} className='mb-1 fw-medium '>{item.name}</div>


                <div className='' style={{ fontSize: ".87rem" }}>


                    <div className='d-flex justify-content-between'>
                        <span style={{ color: "var(--text-secondary-color)" }} className=''>duration:</span>
                        <span style={{ color: "var(--tertiary-color)" }}>{item.duration} min</span>
                    </div>


                    <div className='d-flex justify-content-between'>
                        <span style={{ color: "var(--text-secondary-color)" }} className=''>created:</span>
                        <span style={{ color: "var(--tertiary-color)" }}>{moment(item.created_at).fromNow()}</span>
                    </div>


                    <div className='d-flex justify-content-between'>
                        <span style={{ color: "var(--text-secondary-color)" }} className=''>status</span>
                        <span style={{ color: "var(--tertiary-color)" }}>{item.started === null ? "pending" : "started"}</span>
                    </div>


                    <div className='d-flex justify-content-between'>
                        <span style={{ color: "var(--text-secondary-color)" }} className=''>participants:</span>
                        <span style={{ color: "var(--tertiary-color)" }}>{item.participants.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
function NewTestButton() {
    const navigate = useNavigate()
    return (
        <div className='col-md-4 col-lg-3 p-1 '>
            <div
                onClick={() => { navigate("/dashboard/new-test") }}
                className='p-2'
                style={{
                    height: cardHeight,
                    borderRadius: "var(--border-radius)",
                    borderStyle: "dashed",
                    borderWidth: "3px",
                    borderColor: "var(--bg-dashboard)",
                }}>

                <div style={{ cursor: "pointer" }} className=' fw-medium h-100 w-100 d-flex justify-content-center align-items-center'>
                    New Test
                </div>

            </div>
        </div>
    )
}