import React,{useState,useRef,useEffect} from 'react'

function CardSoalPilgan({data, onAnswerUpdate,numberOfQuestion,activeQuestion,onSetActiveQuestion, onSetStep}) {
    const [selected,setSelected] = useState('')
    const [error,setError] = useState('')
    const radiosWrapper = useRef()
    const inputText = useRef(null);
    useEffect(() => {
        const findCheckInput = radiosWrapper.current.querySelector('input:checked');        
        if(findCheckInput) {
            findCheckInput.checked = false;
        }
        inputText.current.value = ''
    },[data])

    const changeHandler = (e) => {
        setSelected(e.target.value)
        console.log(selected)
        if(error) {
            setError('')
        }
    }

    const nextHandler = () => {
        if(selected === '') {
            return setError('question not yet answered')
        }
        onAnswerUpdate(prevState => [...prevState, {q: data.question, a:selected}])
        setSelected('')
        if(activeQuestion< numberOfQuestion - 1) {
            onSetActiveQuestion(activeQuestion + 1)
        } else {
            onSetStep(2) 
        }
    }
    return (
        <>
        <h1 className='text-lg text-gray-700 font-semibold text-left'>Soal Pilihan Ganda</h1>
        <div className='mt-5 mb-5'>
            <p className='text-left mb-2'>{data.question}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-5' ref={radiosWrapper}>
                {
                    data.choice.map((choice,idx) => {
                        return(
                            <label className='flex flex-row bg-gray-200 p-1 pl-2 rounded-md items-center' key={idx}>
                                <input type='radio' className='mr-2' name='answer' value={choice} onChange={changeHandler} ></input>
                                {choice}
                            </label> 
                        )
                    })
                }
                <div className='flex flex-row bg-gray-200 p-1 pl-2 rounded-md'>
                    <input ref={inputText} className='flex-auto bg-gray-200 focus:outline-none' placeholder='isi sendiri' type='text' onChange={changeHandler}></input>
                </div>
            </div>
            {
                error !== ''?
                <p className="text-red-500">{error}</p> : ''
            }
            <button className='bg-yellow-500 w-1/5 h-8 text-white' onClick={nextHandler}>Next</button>
        </div>
        </>
    )
}

export default CardSoalPilgan
