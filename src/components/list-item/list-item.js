import { Component } from 'react';
import './list-item.css';

class ListItem  extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name:'редактировать'
        }
       
    }

    editingName = (e) => {
        this.setState({
            name: e.target.value
        })  
    }

    uneditablecCase = (e) => {
        e.preventDefault();
    }
 

    editingCase = (e) => {
        e.preventDefault(); 
        if(this.state.name){
        this.props.editCase(this.props.id, this.state.name)} else{
            this.props.onDelete (this.props.id)
        };
    }


    
    render() {
      const  { onDelete, onToggleDone, done, name} = this.props;

      return (
        <li className='list-group-item d-flex justify-content-between' style = {done ? {backgroundColor: 'grey'} : null}>
            <span className="list-group-item-label"
                style = {done ? {textDecoration: 'line-through', 
                backgroundColor: 'grey',
                color: "white"} : null}>
                {name}
            </span>
        <form onSubmit={!done ? this.editingCase : this.uneditablecCase}>
            <input type="text" className="list-group-item-input" 
                defaultValue={this.state.name}
                style = {done ? {textDecoration: 'line-through', 
                backgroundColor: 'grey',
                color: "white"} : null}
                readOnly = {done ? 'readonly' : null}
                onInput={this.editingName}
                title = {done ? 'редактирование невозможно' : 'редактирование дела'}/>
            <button type="submit" className="btn-sm" 
             title = {done ? 'редактирование невозможно' : 'подтвердить редактирвание'}>
                 <i className="fas fa-check"></i>
            </button>
        </form>
        <div className='d-flex justify-content-center align-items-center btn-edit'>
                <button type="button"
                    className="btn-sm btn-done"
                    onClick = {onToggleDone}
                    title = {done ? 'отметить невыполненым' : 'отметить выполненым'}>
                    <i className="fas fa-award"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}
                        title = 'удалить'>
                    <i className="fas fa-trash"></i>
                </button>
         </div>
          
        </li>
        )
    }
    
}

export default ListItem;