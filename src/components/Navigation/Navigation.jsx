import { Link } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to='./generate'>Генерирокать код</Link>
            <Link to='./scan'>Сканирокать код</Link>
            <Link to='/generateHistory'>История генерирокания</Link>
            <Link to='/scanHistory'>История сканирования</Link>
        </nav>
    )
}

export default Navigation;