import logoImg from '../../assets/logo.svg'
import {Container, Content} from "./styles";
import {useContext, useState} from "react";
import {api} from "../../services/api";
import {IpcaContext} from "../../context/IpcaContext";

export function Filters(){
    const [values, setValues] = useState([]);

    const [context, setContext] = useContext(IpcaContext);

    const [dataInicial, setDataInicial] = useState('')
    const [dataFinal, setDataFinal] = useState('')

    function cumIPCA(data){

      let acumulado = 1;
      let i = 0;
      let values = []

      data.forEach(value => {
        let valor = parseFloat(value.valor)
        i = ((valor/100)+1)
        acumulado = acumulado * i
        values.push({
          'data': value.data,
          'valor': acumulado.toFixed(4)
        })
      });

      return values
    }

    function searchIPCA(){

        api.get(`dados/serie/bcdata.sgs.433/dados?formato=json&dataInicial=${dataInicial}&dataFinal=${dataFinal}`)
            .then(response => setContext(cumIPCA(response.data)))
    }

    function clearIPCA(){
        setContext([])
    }

    return (
        <Content>
            <h3>Data Inicial</h3>
            <input type="text" id="dataInicial" alt="Data Inicial" onChange={event => setDataInicial(event.target.value)}/>
            <h3>Data Final</h3>
            <input type="text" id="dataFinal" onChange={event => setDataFinal(event.target.value)}/>
            <button type="button" onClick={searchIPCA}>
                Consulta
            </button>
            <button type="button" onClick={clearIPCA}>
                Limpar
            </button>
        </Content>
    )
}