import { useContext } from "react";
import  counterContext  from '../../contexts/counterContext';

const Home = () => {
    const { counter, setCounter } = useContext(counterContext);
    return (
        <div className="w-[70%] h-[70%] bg-indigo-300 bg-opacity-40 rounded-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-4 shadow-xl border-indigo-500">
            <div className="w-full h-full absolute flex flex-col items-center justify-center space-y-5">
                <h1 class="text-7xl text-indigo-500">{counter}</h1>
                <button className="p-2 w-1/5 bg-indigo-600 text-white rounded-xl font-bold text-xl" onClick={() => setCounter(counter + 1)}>Increment</button>
            </div>
        </div>
    )
}
export default Home;