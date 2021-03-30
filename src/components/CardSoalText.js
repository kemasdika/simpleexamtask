import React,{useState,useEffect, useRef} from 'react'

function CardSoalText({data, onAnswerUpdate,numberOfQuestion,activeQuestion,onSetActiveQuestion, onSetStep}) {
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
            onSetStep(4) 
        }
    }
    return (
        <>
        <h1 className='text-lg text-gray-700 font-semibold text-left'>Soal Text</h1>
        <div>
             <div className='mt-5 mb-5'>
            <p className='text-left mb-2'>{data.question}</p>
            <div className='mb-5'>
                <textarea ref={inputText} className='w-full h-40 overflow-auto' placeholder='jawaban' onChange={changeHandler}></textarea>
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

export default CardSoalText
