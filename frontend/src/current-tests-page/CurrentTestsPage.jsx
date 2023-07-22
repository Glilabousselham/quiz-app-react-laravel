import React from 'react'
import CurrentTestsList from './components/CurrentTestsList'

const CurrentTestsPage = () => {
    return (
        <div className='p-1'>
            <div className='py-2 fw-medium'>Current tests</div>
            <CurrentTestsList />
        </div>
    )
}

export default CurrentTestsPage