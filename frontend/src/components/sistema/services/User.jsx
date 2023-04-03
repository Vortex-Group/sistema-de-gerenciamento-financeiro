import React, { Fragment, useReducer, useState } from "react";
import '../services/styles/User.css';

const User = props => {

    const [conta, setConta] = useState('Conta inicial')
    const [saldo, setSaldo] = useState(0)

    return (
        <Fragment>
            <div className="user-account-area">
                <h1 style={{textAlign: 'start'}}>Minha conta</h1>
                <p style={{backgroundColor: '#e0e0e0', borderRadius: '5px'}}>{conta} - R${saldo}</p>
            </div>
        </Fragment>
    )
};

export default User;