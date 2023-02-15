import { Cep } from "../../types/CepType";

type Props = {
    cep: Cep
}
export const GetCep = ({ cep }: Props) => {
    return (
        <div className="cepContainer">
            <p>
            Cep: {cep.cep}<br/>
            Bairro: {cep.bairro}<br/>
            Logradouro: {cep.logradouro}<br/>
            Cidade: {cep.localidade}
            
            </p>
        </div>
    )
}
export default GetCep;