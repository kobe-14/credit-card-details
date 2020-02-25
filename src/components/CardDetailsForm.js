import React,{useState, useEffect} from 'react'

import User from '../assets/user.png'

import CreditCard from './CreditCard' 

const CardDetailsForm = () => {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('')
    const [month,setMonth] = useState('')
    const [year,setYear] = useState('')
    const [name,setName] = useState('')
    const [image,setImage] = useState('')

    const settingState = (type,value) => {
        switch(type) {
            case 'input1': return setInput1(value)
            case 'input2': return setInput2(value)
            case 'input3': return setInput3(value)
            case 'input4': return setInput4(value)
            case 'month': return setMonth(value)
            case 'year': return setYear(value)
            case 'name': return setName(value)
            default: return
        }
    }

    useEffect(()=>{
        setInput1('----')
        setInput2('----')
        setInput3('----')
        setInput4('----')
        setMonth('--')
        setYear('--')
        setName('')
        setImage(User)
    },[])

    const handleImageUpload = (e) => {
        let reader = new FileReader()
        let files = e.target.files[0]
        reader.onloadend = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(files)
    }

    return (
        <React.Fragment>
            <div className="form">
                <div>
                    <label>
                        Card Number:
                    </label>
                    <span style={{marginLeft: "50px"}}>
                        <span><input onChange={event => settingState('input1',event.target.value)} maxLength="4" style={{width: '80px'}} /></span>
                        <span><input onChange={event => settingState('input2',event.target.value)} maxLength="4" style={{width: '80px', marginLeft:'5px'}} /></span>
                        <span><input onChange={event => settingState('input3',event.target.value)} maxLength="4" style={{width: '80px', marginLeft:'5px'}} /></span>
                        <span><input onChange={event => settingState('input4',event.target.value)} maxLength="4" style={{width: '80px',marginLeft:'5px'}} /></span>
                    </span>
                </div>
                <div>
                    <label>Expiry Date:</label>
                    <span style={{marginLeft: "65px"}}>
                        <span><input onChange={event => settingState('month',event.target.value)} maxLength="2" max="31" style={{width: '80px'}} /></span>
                        <span><input onChange={event => settingState('year',event.target.value)} maxLength="2" max="99" style={{width: '80px',marginLeft:'5px'}} /></span>
                    </span>
                </div>
                <div>
                    <label>Card Holder Name:</label>
                    <span style={{marginLeft: "13px"}}><input onChange={event => settingState('name',event.target.value)} maxLength="15" style={{width: '330px'}}/></span>
                </div>
                <div>
                    <label>Upload Image:</label>
                    <span style={{marginLeft: "45px"}}><input type="file" accept="image/*" onChange={(e)=>handleImageUpload(e)} /></span>
                </div>
            </div>
            <CreditCard input1={input1} input2={input2} input3={input3} input4={input4} month={month} year={year} name={name} imgUrl={image} />
        </React.Fragment>
    )
}

export default CardDetailsForm