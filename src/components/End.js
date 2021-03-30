import React from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
function End() {
    const {username} = useSelector((state) => state)
    console.log(username)
    const history = useHistory()
    const goToAnswer = () => {
        history.push('/jawaban')
    }
    return (
        <div>
            <h1 className='text-lg text-gray-700 font-semibold text-center mb-10'>Thank you <span className='text-green-500 font-bold'> {username} </span> for answering the questions</h1>
            <button className='bg-yellow-500 p-2 rounded-md' onClick={goToAnswer}>Lihat Jawaban</button>
        </div>
    )
}

export default End
