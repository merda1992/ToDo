import ListItem from "../list-item/list-item";

import './list.css';

const List = ({data, onDelete, onToggleDone, editCase}) => {

    //через map перекрутим масив данных что бы не создавать вручную милион карточек
    const elements = data.map(item => {
      //через частичную деструктуризацию вытащим айдишни 
        
        return ( 

            <ListItem 
            key={item.id} 
            name = {item.name}
            done = {item.done}
            id = {item.id}
            //тащим функцию дальше по иерархии закидывая в нее айдишник
            onDelete={() => onDelete(item.id)}
            onToggleDone={() => onToggleDone(item.id)}
            editCase = {editCase}
            />
 
        )
    })

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default List;