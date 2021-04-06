import React,{useState,useEffect} from 'react'
import SoalPilgan from './../components/CardSoalPilgan'
import SoalPendek from './../components/CardSoalPendek'
import SoalText from './../components/CardSoalText'
// import quizPilgan from './../data/soalPilgan.json'
// import quizPendek from './../data/soalPendek.json'
// import quizText from './../data/soalText.json'
import End from './../components/End'
import {jawabanPilgan,jawabanPendek,jawabanText} from '../store/actions/jawabanActions'
import {useDispatch,useSelector} from 'react-redux'

function FormSoal() {
    const {soalPilgan,soalPendek,soalText}  = useSelector((state) => state.soal)
    const [activeQuestionPilgan, setActiveQuestionPilgan] = useState(0)
    const [activeQuestionPendek, setActiveQuestionPendek] = useState(0)
    const [activeQuestionText, setActiveQuestionText] = useState(0)
    const [answerPilgan, setAnswerPilgan] = useState([])
    const [answerPendek, setAnswerPendek] = useState([])
    const [answerText, setAnswerText] = useState([])
    const [step, setStep] = useState(1)
    console.log(soalPilgan)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(jawabanPilgan(answerPilgan))
        // eslint-disable-next-line
    },[answerPilgan])
    
    useEffect(() => {
        dispatch(jawabanPendek(answerPendek))
        // eslint-disable-next-line
    },[answerPendek])

    useEffect(() => {
        dispatch(jawabanText(answerText))
        // eslint-disable-next-line
    },[answerText])
    return (
        <div className='bg-gray-700 flex h-screen justify-center items-center'>
            <div className='bg-gray-100 w-full md:w-1/2 flex-none mt-2 rounded-xl p-5'>
                <h1 className='text-3xl text-gray-700 font-semibold'>Soal</h1>
                <hr className='mt-5 mb-5'/>
                {
                    step === 1 &&
                    <SoalPilgan
                    data={soalPilgan[activeQuestionPilgan]}
                    onAnswerUpdate={setAnswerPilgan}
                    numberOfQuestion={soalPilgan.length}
                    activeQuestion={activeQuestionPilgan}
                    onSetActiveQuestion={setActiveQuestionPilgan}
                    onSetStep={setStep}
                    />
                }
                {
                    step === 2 && 
                    <SoalPendek
                    data={soalPendek[activeQuestionPendek]}
                    onAnswerUpdate={setAnswerPendek}
                    numberOfQuestion={soalPendek.length}
                    activeQuestion={activeQuestionPendek}
                    onSetActiveQuestion={setActiveQuestionPendek}
                    onSetStep={setStep}
                    />
                }{
                    step === 3 && 
                    <SoalText
                    data={soalText[activeQuestionText]}
                    onAnswerUpdate={setAnswerText}
                    numberOfQuestion={soalText.length}
                    activeQuestion={activeQuestionText}
                    onSetActiveQuestion={setActiveQuestionText}
                    onSetStep={setStep}
                    />
                }{
                    step === 4 && <End/>
                }
            </div>
        </div>
    )
}

export default FormSoal
