import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import List from '../list/list';
import AddForm from '../add-form/add-form';

import './app.css';

class App extends Component {
  constructor (props) {
    super(props);
    //задачи на старте
    this.state = {
      data: [
        {
        name: 'Прес качат', 
        done: false, 
        id: 'e98870798hkhgfg76858',
      },
        {
        name: 'Бегит', 
        done: false, 
        id: 'ikl675675dsfsdf8798dfsd667',
      },
        {
          name: 'Анжумания', 
          done: false, 
        id: 'mil986ddammsddf845648',
      }],
      //начальное значение фильтра
      filter: 'all'
    }
    //доп фишка для айдишника
    this.maxId = this.state.data.length+1;
  }

  //удаление дела
  deleteItem = (identificator) => {
    //будем удалять дело через изменение состояния
    this.setState(({data})=>{

      return {
        data: data.filter (item => item.id !== identificator)
      }

    })
  }

  //новое дело
  byForm = (name) => {
    const newItem = {
        name, 
        done: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
  
        return {
            data: [...data, newItem]
        }
    });
  }

  //меняем дело
  editCase = (identificator, newName) => {  
    //2 способ перевезти в протвположное значение элемента обьекта в массиве
      this.setState(({data}) => ({
        data: data.map(item => {
          if(item.id === identificator) {
            return {...item, name: newName}
          }
          return item;
        })
      }))
    }

  // смена состояние выполнения дела
  onToggleDone = (identificator) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === identificator);
      console.log(index)
      const old = data[index];
      console.log(old);
      const newItm = {...old, done: !old.done};
      const before = data.slice(0,  index);
      const after = data.slice (index+1)
      const newArray = [...before,newItm,...after]
      return {
        data: newArray
      } 


    })
  }

  //создание фильтров
  filterPost = (items, filter) => {
    switch (filter) {
        case 'completed':
            return items.filter(item => item.done);
        case 'not fulfilled':
            return items.filter(item => item.done === false);
        default:
            return items
    }
  }
  //динамическое изменение фильтров
  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {

    const {data, filter} = this.state;

    //отфильтрованая со старта по начальному значению фильтра
    const visibleData = this.filterPost(data, filter);

  return (
    <div className="app">
        <AppInfo/>

        <div className="search-panel">
            <AppFilter 
           filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>

        {/* передадим в пропсы массив данных */}
        <List 
        editCase = {this.editCase} 
        data={visibleData}
        // закинем функции в пропы
        onDelete={this.deleteItem}
        onToggleDone={this.onToggleDone}/>
        <AddForm
        goData={this.byForm}
        />
    </div>
  );
  }
}

export default App;
