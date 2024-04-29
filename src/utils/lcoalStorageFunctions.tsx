export const saveToLocalStorage = (key: any, value: any) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export const getFromLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : []
    }
    return []
}

export const addUniqueItemToLocalStorageArray = (key: string, item: string) => {
    if (typeof window !== 'undefined') {
        const items = getFromLocalStorage(key)

        if (!items.some((existingItem: any) => existingItem === item)) {
            items.push(item)
            localStorage.setItem(key, JSON.stringify(items))
        }
    }
}

export const removeFromLocalStorage = (key: any) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(key)
    }
}
