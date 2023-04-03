import React, { Fragment, useEffect, useState } from "react";
import '../services/styles/UserDash.css';


const UserDash = props => {

    const baseUrl = "http://127.0.0.1:5000/users"
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch(baseUrl).then(
            response => response.json()
        ).then(
            data => {
                setData(data) 
                console.log(data)
            }
        )
    }, [])

    return(
        <Fragment>
                {(typeof data.users === "undefined") ? 
                    (<p>Loading...</p>): 
                    (data.users.map((user) => (
                        <div className="user-dash-area">
                            <h1 key={1}>{user.nome}</h1>
                            <p>Saldo<br></br><p style={{color: '#00c53b', fontWeight: '800'}}>R${user.saldo}</p></p>
                            <a><button>Receita</button></a>
                            <a><button>Despesa</button></a>
                            <p>Receita mensal<br></br><p style={{color: '#00c53b', fontWeight: '800'}}>{user.receita}</p></p>
                            <p>Despesa mensal<br></br><p style={{color: '#00c53b', fontWeight: '800'}}>{user.despesa}</p></p>
                        </div>
                    ))
                )}
        </Fragment>
    )
};

export default UserDash;
