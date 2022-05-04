import {Container} from "./styles";
import {useContext, useEffect, useState} from "react";
import {api} from "../../services/api";
import {IpcaContext} from "../../context/IpcaContext";

interface Value {
    data: string,
    valor: number
}

export function Table(){

    const [context, setContext] = useContext(IpcaContext);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Valor Acumulado</th>
                    </tr>
                </thead>
                <tbody>
                    {context.map(value => {
                        return (
                            <tr key={value.data}>
                                <td>{value.data}</td>
                                <td>{value.valor}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}