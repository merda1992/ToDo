import { Component } from 'react';

import './add-form.css';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            //через отрибут нэйм мы сможем достучаться до нужного стэйта!!! через обьект события. ТАКЖЕ благодаря es6 ситтексису мы можем записать свойсвто в массив чтобы не вылазила ошибка
            [e.target.name] : e.target.value
        })
    }

    trace = (e) => {
        e.preventDefault();
        //закинем а аргументы goData значения с нашего состояния
        this.props.goData(this.state.name);
         //сбросим состояние после отправки
        this.setState({
            name: ''
        })
    }

    render() {
       

        return (
            <div className="app-add-form">
                <h3>Добавим дело</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.trace}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Что надо сделать?"
                        name="name"
                        //управляемые компаненты
                        value={this.state.name}
                        onChange={this.onValueChange}/>
              
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            >Добавить</button>
                </form>
            </div>
        )
    }
}

export default AddForm;