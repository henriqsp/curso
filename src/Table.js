import React, {Component} from 'react'
const TableHeader = () =>{
    return(
        <thead>
                <tr>
                    <th>Dia da Semana</th>
                    <th>Disciplina</th>
                    <th>Horários</th>
                </tr>
            </thead>
    )
}
const TableBody = (props) =>{
    const rows = props.agenda.map( (row,index) => {
        return (
            <tr key={index}>
                <td>{row.dia}</td>
                <td>{row.disciplina}</td>
                <td>{row.entrada} às {row.saida}</td>
                <td>
                    <button onClick={() => props.removerAgenda(index)}>
                        Apagar
                    </button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}       
        </tbody>
    )
}
class Table extends Component{
    render(){ 
        const {agenda, removerAgenda} = this.props
        return(
            <table>
                <TableHeader />
                <TableBody agenda={agenda} 
                    removerAgenda={removerAgenda}/>                              
            </table>)

            /*const {alunos} = this.state
            return (
              <div className="container">
                <Table alunos = {alunos}/>
              </div>
            );*/
    }
    
} 
export default Table
