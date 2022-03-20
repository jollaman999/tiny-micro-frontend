import { createSignal } from 'solid-js'

export default () => {
    const [count, setCount] = createSignal(0);

    return (
        <div>
            <div>Count = {count()}</div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setCount(count() + 1)}>Add one</button>
        </div>
    )
}