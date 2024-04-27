export const saveToLocalStorage = (key: any, value: any) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

export const getFromLocalStorage = (key: any) => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }
    return null;
}

export const removeFromLocalStorage = (key: any) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(key);
    }
}
