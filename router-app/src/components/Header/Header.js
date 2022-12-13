import { useNavigate } from 'react-router-dom'
const Header = () => {
    const nav = useNavigate();

    return (
        <header className={`h-[8%] min-h-[8%] flex flex-row items-center bg-gray-900 text-white p-4 space-x-5 text-2xl`}>
            <div className='flex flex-row h-full'>
                <button className={`text-indigo-400 w-[10rem] font-bold p-1 rounded bg-indigo-900 bg-opacity-50`}>Boiler</button>
            </div>
            <nav className={`flex flex-row h-full space-x-2 font-light`}>
                <button onClick={() => nav('/')}>Home</button>
                <button onClick={() => nav('/about')}>About</button>
            </nav>
        </header>
    )
}

export default Header;