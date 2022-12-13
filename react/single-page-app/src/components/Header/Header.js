const Header = (props) => {
    const { handleNav, componentIndex } = props;

    return (
        <div className={`h-[8%] min-h-[8%] flex flex-row items-center bg-gray-900 text-white p-4 space-x-5 text-2xl`}>
            <div className='flex flex-row h-full'>
                <button className={`text-indigo-400 w-[10rem] font-bold p-1 rounded bg-indigo-900 bg-opacity-50`}>Boiler</button>
            </div>
            <div className={`flex flex-row h-full space-x-2 font-light`}>
                {componentIndex.map((value, idx) => {
                    return (
                        <button onClick={() => handleNav(value.name)} key={idx}>{value.displayName}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Header;