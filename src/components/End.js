import React from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
function End() {
    const {profile} = useSelector((state) => state.jawaban)
    const history = useHistory()
    const goToAnswer = () => {
        history.push('/jawaban')
    }
    return (
        <div>
            <h1 className='text-lg text-gray-700 font-semibold text-center mb-10'>Thank you <span className='text-green-500 font-bold'> {profile.username} </span> for answering this questions</h1>
            <h1 className='text-lg text-gray-700 font-semibold text-center mb-10'><span className='text-green-500 font-bold'> {profile.telepon} </span></h1>
            <button className='bg-yellow-500 p-2 rounded-md' onClick={goToAnswer}>Lihat Jawaban</button>
        </div>
    )
}

export default End
