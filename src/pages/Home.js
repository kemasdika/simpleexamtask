import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {username} from './../store/actions/jawabanActions'
import {useHistory} from 'react-router-dom'
function Home() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [name,setName] = useState('')
    const [error,setError] = useState('')
    const handleChange = (e) => {
        setName(e.target.value)
        if(error) {
            setError('')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(name === '') {
            return setError('please type your name')
        }
        dispatch(username(name))
        history.push('/soal')
    }
    return (
        <div className='flex justify-center items-center h-screen bg-gray-400'>
            <div className='w-1/4 bg-gray-200 flex flex-col justify-around p-5 rounded-lg shadow-md'>
                <h1 className='text-lg font-bold text-gray-700 mb-5'>Welcome to simple test</h1>                
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-row justify-between mb-5'>
                        <label className='text-base font-bold text-gray-700 mr-2'>Nama: </label>
                        <input className='flex-auto bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-sm' onChange={handleChange}></input>
                    </div>
                    {
                        error !== ''?
                        <p className="text-red-500">{error}</p> : ''
                    }
                    <div className="text-left mb-5">
                        <p>Soal terdiri dari:</p>
                        <ul>
                            <li>1. Soal Pilihan ganda</li>
                            <li>2. Soal Isian Pendek</li>
                            <li>3. Soal Isian Text</li>
                        </ul>
                    </div>
                    <div className='text-right'>
                        <button type='submit' className='bg-yellow-500 w-20 h-8 rounded-sm text-sm text-gray-100 hover:bg-yellow-600 trasition duration-150'>Next</button>
                    </div>
                </form>                
            </div>
        </div>
    )
}

export default Home