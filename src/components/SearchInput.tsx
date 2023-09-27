import React, { useEffect } from "react";
import useDebounce from "../hooks/hooks";

export interface ISearchInput {
    onChange: React.ChangeEventHandler<Element>;
    value: string | undefined;
}
export const SearchInput = (props: ISearchInput) => {

    const { value, onChange } = props
    const debounceQuery = useDebounce(value, 250)
    useEffect(() => {
        if (debounceQuery !== "") {
            console.log("debounceQuery", debounceQuery)

        }
    }, [value])
    return (
        <>
            <h1>
                Search try me!
            </h1>
            <input placeholder="search..." type="text" value={value} onChange={onChange} />
        </>
    )
}
