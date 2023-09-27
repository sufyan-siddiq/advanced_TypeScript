
export function genericSearch<T>(object: T, properties: Array<keyof T>, query: string, shouldCaseSensitive: boolean) {
    return properties.some((property) => {

        const value = object[property];
        if (query === "") {
            return true

        }
        if (typeof value === "string" || typeof value === "number") {

            if (shouldCaseSensitive) {
                console.log("if")
                return value.toString().includes(query)
            }
            else {
                console.log("else")
                return value.toString().toLowerCase().includes(query.toLowerCase())
            }
        }
    })
}