import React,{useState,useEffect, useRef} from 'react'

function CardSoalPendek({data, onAnswerUpdate,numberOfQuestion,activeQuestion,onSetActiveQuestion, onSetStep}) {
    const [selected,setSelected] = useState('')
    const [error,setError] = useState('')
    const inputText = useRef()
    useEffect(() => {
        inputText.current.value = ''
    },[data])

    const changeHandler = (e) => {
        setSelected(e.target.value)
        console.log(selected)
        if(error) {
            setError('')
        }
    }

    const nextHandler = (e) => {
        if(selected === '') {
            return setError('question not yet answered')
        }
        onAnswerUpdate(prevState => [...prevState, {q: data.question, a:selected}])
        setSelected('')
        if(activeQuestion< numberOfQuestion - 1) {
            onSetActiveQuestion(activeQuestion + 1)
        } else {
            onSetStep(3) 
        }
    }
    return (
        <>
        <h1 className='text-lg text-gray-700 font-semibold text-left'>Soal Pendek</h1>
        <div>
             <div className='mt-5 mb-5'>
            <p className='text-left mb-2'>{data.question}</p>
            <div className='mb-5'>
                <input ref={inputText} className='w-full h-10 p-2' placeholder='jawaban' onChange={changeHandler}></input>
            </div>
            {
                error !== ''?
                <p className="text-red-500">{error}</p> : ''
            }
            <button className='bg-yellow-500 w-1/5 h-8 text-white' onClick={nextHandler}>next</button>
        </div>
        </div>
        </>
    )
}

export default CardSoalPendek
