import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {

    state = {
      agenda: [],
    };

    removerAgenda = (index)=> {
      const{agenda} = this.state
      this.setState(
          {
              agenda: agenda.filter((agenda, i) => {
                  return i !== index;
              })
          }
      )
  }


handleSubmit = (agendaDisc) => {
  this.setState({
      agenda: [...this.state.agenda, agendaDisc]
  })
}
  
  render(){
    
    const {agenda} = this.state; 
    return (
      <div className="container">
        <h1 className='text-center'>Agenda Semanal</h1>
        <Table agenda = {agenda}
          removerAgenda={this.removerAgenda}/>
          <Form handleSubmit={this.handleSubmit}/>
      </div>
    );    
  }  
} export default App;