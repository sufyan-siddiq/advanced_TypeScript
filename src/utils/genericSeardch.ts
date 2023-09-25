
export function genericSearch<T>(object: T, property: keyof T, query: T) {
    const value = object[property];

    if (typeof value === "string" || typeof value === "number")
        return value.toString().includes(query)

}