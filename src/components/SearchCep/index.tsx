import React, { useState } from "react"
import api from "../../services/api";
import { Cep } from '../../types/CepType';
import GetCep from "../GetCep";
import './style.css'
function SearchCep() {

    const [inputCep, setInputCep] = useState('');
    const [list, setList] = useState<Cep>()

    function handleCep() {

        if (inputCep !== '') {
            api.get("/" + inputCep + "/json/").then((response) => {
                var cep = response.data
                setList(cep)
                setInputCep('')
            }).
                catch((err) => {
                    console.error("ocorreu um erro: " + err)
                })
        }
    }

    var cep: Cep = {
        cep: `${list?.cep}`,
        bairro: `${list?.bairro}`,
        localidade: `${list?.localidade}`,
        logradouro: `${list?.logradouro}`
    }

    return (
        <div>
            <div className="form">
                <input type="number" placeholder="Informe seu cep" onChange={e => setInputCep(e.target.value)} value={inputCep} />
                <button onClick={handleCep}>&#128270;</button>
            </div>
            <div className="cep">
                {cep.cep !== 'undefined' ?
                    <GetCep cep={cep} /> :
                    <div className="alert">Por favor, informe um Cep válido</div>
                }
            </div>
        </div>
    )
}
export default SearchCep