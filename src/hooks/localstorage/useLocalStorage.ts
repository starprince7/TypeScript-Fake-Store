import { useEffect, useState } from "react"

export const useLocalStorage = <T>(key: string, initialValue: T | (() => T)) => {
    const [state, setState] = useState<T>(() => {
        let jsonValue = localStorage.getItem(key)
        if (jsonValue) {
            return JSON.parse(jsonValue)
        }

        if (typeof initialValue === "function") {
            return (initialValue as () => T)()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState] as [typeof state, typeof setState]
}