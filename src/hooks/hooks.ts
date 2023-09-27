import { useEffect, useState } from 'react'
//interface
const useDebounce = (value: any, delay: number) => {
    // states
    const [debounceValue, setDebounceValue] = useState<string>()
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay);
        return () => { clearTimeout(handler) }
    }, [value])
    return debounceValue
}

export default useDebounce