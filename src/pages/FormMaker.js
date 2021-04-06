import React,{useState,useEffect,useRef} from 'react'
import {useDispatch} from 'react-redux'
import {soalPendekAction,soalPilganAction,soalTextAction} from '../store/actions/soalActions'
import {useHistory} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function FormMaker() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [category,setCategory] = useState('soalPilgan')
    const [error, setError] = useState('')
    const [soalPilgan,setSoalPilgan] = useState({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
    })
    const [pilgan,setPilgan] = useState([])

    const [soalPendek,setSoalPendek] = useState('')
    const [pendek,setPendek] = useState([])

    const [soalText,setSoalText] = useState('')
    const [text,setText] = useState([])
    
    const inputText = useRef();
    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    }
    const changeHandlerPilgan = (e) => {
        const value = e.target.value;
        setSoalPilgan({
          ...soalPilgan,
          [e.target.name]: value
        });
        if(error) {
            setError('')
        }
    }

    const changeHandlerPendek = (e) => {
        setSoalPendek(e.target.value)
        if(error) {
            setError('')
        }
    }

    const changeHandlerText = (e) => {
        setSoalText(e.target.value)
        if(error) {
            setError('')
        }
    }

    const handleSubmitPilgan = (e) => {
        e.preventDefault()
        if(soalPilgan.question === '') {
            return setError('question not yet set')
        } else if (soalPilgan.option1 === '') {
            return setError('option not yet set')
        }
        else if (soalPilgan.option2 === '') {
            return setError('option not yet set')
        }
        else if (soalPilgan.option3 === '') {
            return setError('option not yet set')
        }
        else if (soalPilgan.option4 === '') {
            return setError('option not yet set')
        }

        setPilgan(prevState => [...prevState, {question: soalPilgan.question, choice:[soalPilgan.option1,soalPilgan.option2,soalPilgan.option3,soalPilgan.option4]}])
        
    }

    const handleSubmitPendek = (e) => {
        e.preventDefault()
        if(soalPendek === '') {
            return setError('question not yet set')
        } 

        setPendek(prevState => [...prevState, {question: soalPendek}])
        
    }
    const handleSubmitText = (e) => {
        e.preventDefault()
        if(soalText === '') {
            return setError('question not yet set')
        } 

        setText(prevState => [...prevState, {question: soalText}])
        
    }

    const toSoal = () => {
        history.push(`/soal/${uuidv4()}`)
    }
    useEffect(()=>{
        dispatch(soalPilganAction(pilgan))
        setSoalPilgan({
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
        })
        const findInput = inputText.current.querySelectorAll('input'); 
        for (let i = 0; i < findInput.length; i++) {
            findInput[i].value = '';
          } 
          // eslint-disable-next-line
    },[pilgan])

    useEffect(()=>{
        dispatch(soalPendekAction(pendek))
        setSoalPendek('')
        inputText.current.value = ''
        // eslint-disable-next-line
    },[pendek])

    useEffect(()=>{
        dispatch(soalTextAction(text))
        setSoalText('')
        inputText.current.value = ''
        // eslint-disable-next-line
    },[text])
    return (
        <div className='flex justify-center h-screen bg-gray-500'>
            <div className='w-1/2 bg-white h-sreen mt-5 rounded-md overflow-auto'>
                <p className='font-bold color-gray-400 text-xl mt-5 mb-5'>Make your own questions</p>
                <hr></hr>
                <div className='flex flex-col text-left m-5'>
                    <label>
                        select category:
                    </label>                  
                    <select value={category} onChange={handleChangeCategory} className='bg-yellow-500 text-white w-1/5 h-8 rounded-sm pl-2'>
                        <option value="soalPilgan">Soal Pilgan</option>
                        <option value="soalPendek">Soal Pendek</option>
                        <option value="soalText">Soal Text</option>                            
                    </select>
                </div>
                {
                    category === 'soalPilgan' ?
                    <form className='m-5' onSubmit={handleSubmitPilgan} ref={inputText}  >                    
                        <input className='w-full bg-gray-100 h-10 pl-5 mb-3' placeholder='Question' name='question' onChange={changeHandlerPilgan}></input>
                        <input className='w-full bg-gray-100 h-10 pl-5' placeholder='Option1' name='option1' onChange={changeHandlerPilgan}></input>
                        <input className='w-full bg-gray-100 h-10 pl-5' placeholder='Option2' name='option2' onChange={changeHandlerPilgan}></input>
                        <input className='w-full bg-gray-100 h-10 pl-5' placeholder='Option3' name='option3' onChange={changeHandlerPilgan}></input>
                        <input className='w-full bg-gray-100 h-10 pl-5' placeholder='Option4' name='option4' onChange={changeHandlerPilgan}></input>
                        <div className='text-right mt-5'>
                            <button type='submit' className='bg-red-500 text-white pl-5 pr-5 h-10 rounded-md'>Add</button>
                        </div>
                    </form> :( category === 'soalPendek' ? 
                    <form className='m-5' onSubmit={handleSubmitPendek}>                    
                        <input ref={inputText} className='w-full bg-gray-100 h-10 pl-5 mb-3' placeholder='Question' onChange={changeHandlerPendek}></input>                   
                        <div className='text-right mt-5'>
                            <button type='submit' className='bg-red-500 text-white pl-5 pr-5 h-10 rounded-md'>Add</button>
                        </div>
                    </form> : 
                    <form className='m-5' onSubmit={handleSubmitText}>                    
                        <input ref={inputText} className='w-full bg-gray-100 h-10 pl-5 mb-3' placeholder='Question' onChange={changeHandlerText}></input>                   
                        <div className='text-right mt-5'>
                            <button type={'submit'} className='bg-red-500 text-white pl-5 pr-5 h-10 rounded-md'>Add</button>
                        </div>
                    </form>
                )
                }
                {
                error !== ''?
                <p className="text-red-500">{error}</p> : ''
                }                
                <p className='font-bold'>Review Question</p>
                {   
                    pilgan.map((quest,idx) => {
                        return (
                            <div key={idx} className='m-5' >
                                <p className='text-left font-semibold'>{quest.question}</p>
                                {
                                    quest.choice.map((choice,indx) => {
                                      return  <p className='text-left' key={indx}> - {choice}</p>
                                    })
                                }
                            </div>
                        )
                    })
                }
                { 
                    pendek.map((quest,idx) => {
                        return (
                            <div key={idx} className='m-5' >
                                <p className='text-left font-semibold'>{quest.question}</p>
                            </div>
                        )
                    })
                }
                {   
                    text.map((quest,idx) => {
                        return (
                            <div key={idx} className='m-5' >
                                <p className='text-left font-semibold'>{quest.question}</p>
                            </div>
                        )
                    })
                }
                {
                 pilgan.length <= 0 && pendek.length <=0 && text.length <= 0?
                <p className='text-left m-5'>There's No Question to review</p>:
                <button className='bg-green-500 p-2 text-white rounded-md' onClick={toSoal}>create question</button>
                }
            </div>
        </div>
    )
}

export default FormMaker

