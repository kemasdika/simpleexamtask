import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {profile} from './../store/actions/jawabanActions'
import {useHistory} from 'react-router-dom'
function Home() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [state, setState] = useState({
        username: "",
        telepon: ""
    })
    const [error,setError] = useState('')
    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(state.username === '') {
            return setError('please type your name')
        }else if(state.telepon === '') {
            return setError('please type your telepon')
        }
        dispatch(profile(state))
        history.push('/formMaker')
    }
    return (
        <div className='flex justify-center items-center h-screen bg-gray-400'>
            <div className='w-1/4 bg-gray-200 flex flex-col justify-around p-5 rounded-lg shadow-md'>
                <h1 className='text-lg font-bold text-gray-700 mb-5'>Welcome to simple test</h1>                
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-row justify-between mb-5'>
                        <label className='text-base font-bold text-gray-700 mr-12'>Nama </label>
                        <input name='username' className='flex-auto bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-sm' onChange={handleChange}></input>
                    </div>
                    <div className='flex flex-row justify-between mb-5'>
                        <label className='text-base font-bold text-gray-700 mr-3'>No telepon </label>
                        <input name='telepon' className='flex-auto bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 text-sm' onChange={handleChange}></input>
                    </div>
                    {
                        error !== ''?
                        <p className="text-red-500">{error}</p> : ''
                    }
                    <div className="text-left mb-5">
                        
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