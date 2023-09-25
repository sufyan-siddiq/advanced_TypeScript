import React from "react";


export interface ISearchInput {
    onChange: React.ChangeEventHandler<Element>;
    value: string | undefined;
}
export const SearchInput = (props: ISearchInput) => {

    const { value, onChange } = props
    console.log("value", value)
    return (
        <div>
            <h2>
                Search try me!
            </h2>
            <input placeholder="search..." type="text" value={value} onChange={onChange} />
        </div>
    )
}
