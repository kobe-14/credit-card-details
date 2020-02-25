import React from 'react'

const CreditCard = (props) => {
    const {input1,input2,input3,input4,month,year,name,imgUrl} = props
    return (
        <React.Fragment>
        <div className="credit-card">
                <div className="card-header">
                    <span>Card Name</span>
                </div>
                <div className="card-content">
                    <div className="card-details-1">
                        <div className="card-number">
                            <p style={{marginLeft:"10px"}}>Card Number</p>
                            <span style={{marginLeft:"10px", fontWeight:'bolder'}}>{input1}</span>
                            <span style={{marginLeft:"10px", fontWeight:'bolder'}}>{input2}</span>
                            <span style={{marginLeft:"10px", fontWeight:'bolder'}}>{input3}</span>
                            <span style={{marginLeft:"10px", fontWeight:'bolder'}}>{input4}</span>
                        </div>
                        <div className="expiry-date">
                            <p style={{marginRight:"10px"}}>Expiry Date</p>
                            <span style={{fontWeight:'bolder'}}>{month}</span>
                            <span>/</span>
                            <span style={{fontWeight:'bolder'}}>{year}</span>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <p style={{marginLeft:"10px"}}>Card Holder Name</p>
                            <span style={{marginLeft:"10px",fontWeight:'bolder'}}>{name}</span>
                        </div>
                        <img src={imgUrl} alt="user" style={{width:"100px", height:"75px", marginRight:'10px', marginTop:'5px'}} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreditCard