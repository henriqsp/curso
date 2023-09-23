import { Component } from "react";

class Form extends Component {
    intialSate = {
        nome: '',
        turma: '',
    }
    state = this.initialState


handleChange = (event) => {
    const{name, value} = event.target

    this.setState({
        [name]: value,
    })
}


submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState (this.initialState)
}

render(){
    const{dia, disciplina, entrada, saida} = this.props;
    return (
        <form>
            <label htmlFor="dia">Dia da semana</label>
            <input type="text"
                    name="dia"
                    id="dia"
                    value = {dia}
                    onChange={this.handleChange} />
            <label htmlFor="disciplina">Disciplina</label>
            <input type="text"
                    name="disciplina"
                    id="disciplina"
                    value = {disciplina}
                    onChange={this.handleChange} />
            <label htmlFor="horaio">Horário</label>
            <input type="time"
                    name="entrada"
                    id="entrada"
                    value = {entrada}
                    onChange={this.handleChange} /> às
            <input type="time"
                    name="saida"
                    id="saida"
                    value = {saida}
                    onChange={this.handleChange} />
            <input type="button" value="Adicionar" onClick={this.submitForm}/>
        </form>
    )
}

} export default Form;