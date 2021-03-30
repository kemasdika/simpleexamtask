import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {resetSoal,resetName} from '../store/actions/jawabanActions'
function FormJawaban() {
    const history = useHistory()
    const dispatch = useDispatch()
    const onClose = () => {
        dispatch(resetSoal([]))
        dispatch(resetName(''))
        history.push('/')
    }
    const {jawabanPilgan,jawabanPendek,jawabanText}  = useSelector((state) => state)
    return (
        <div className='bg-gray-700 flex h-screen justify-center'>
            <div className='bg-gray-100 w-full md:w-1/2 flex-none mt-2 rounded-t-xl p-5 overflow-auto '>
                <h1 className='text-3xl text-gray-700 font-semibold'>Jawaban</h1>                
                <hr className='mt-5 mb-5'/>
                <p className='font-bold text-xl text-gray-700 mb-5'>jawaban pilihan ganda</p>
                {
                    jawabanPilgan.map((i,idx) => {
                        return (
                            <div key={idx} className='mb-5'>
                                <p className='text-left bg-yellow-500 p-2'>Q: {i.q}</p>
                                <p className='text-left bg-green-500 p-2'>A: {i.a}</p>
                            </div>
                        )
                    })
                }
                <p className='font-bold text-xl text-gray-700 mb-5'>jawaban pendek</p>
                {
                    jawabanPendek.map((i,idx) => {
                        return (
                            <div key={idx} className='mb-5'>
                                <p className='text-left bg-yellow-500 p-2'>Q: {i.q}</p>
                                <p className='text-left bg-green-500 p-2'>A: {i.a}</p>
                            </div>
                        )
                    })
                }
                <p className='font-bold text-xl text-gray-700 mb-5'>jawaban text</p>
                {
                    jawabanText.map((i,idx) => {
                        return (
                            <div key={idx} className='mb-5'>
                                <p className='text-left bg-yellow-500 p-2'>Q: {i.q}</p>
                                <p className='text-left bg-green-500 p-2'>A: {i.a}</p>
                            </div>
                        )
                    })
                }
                <button className='bg-red-700 text-white text-md w-1/5 h-10' onClick={onClose}>CLOSE</button>
            </div>
        </div>
    )
}

export default FormJawaban

