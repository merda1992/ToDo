import "./app-filter.css";

const AppFilter = (props) => {
    //создание множествао кнопок
    const buttonsData = [
        {name: 'all', label: 'Все дела'},
        {name: 'completed', label: 'Выполненые'},
        {name: 'not fulfilled', label: 'Невыполненые'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        //проверка на активный класс
        const active = props.filter === name;
        //задание активного класса
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;