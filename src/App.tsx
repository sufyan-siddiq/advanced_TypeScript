import React, { ChangeEventHandler, useState } from 'react';
import './App.css';
import { SearchInput } from './components/SearchInput';
import { Person } from './mockdata/Person';
import { Widgets } from './mockdata/Widge';
import { genericSearch } from './utils/genericSeardch';

export interface IApp {
  // query: string | undefined;
  // e: React.ChangeEventHandler
  onChange: () => void;

}
function App() {

  const [query, setQuery] = useState<string>()

  return (
    <div >
      <SearchInput value={query} onChange={genericSearch(query)} />
      <div>
        <h3>Widgets :</h3>
        {Widgets.map((item) => {
          return (
            <div key={item.id}>
              <h1>
                {item.title}
              </h1>

              <h1>
                {item.description}
              </h1>
              <h1>
                {item.created}
              </h1>
              <h1>
                {item.rating}
              </h1>
              <h1>
                {item.updates}
              </h1>
            </div>
          )
        })}
      </div>
      <div>

        <h3>Person :</h3>
        {Person.map((item, index) => {
          return (
            <div key={index}>
              <h1>
                {item.firstName}
              </h1>

              <h1>
                {item.lastName}
              </h1>
              <h1>
                {item.birthday}
              </h1>
              <h1>
                {item.eyeColor}
              </h1>
            </div>
          )
        })}
      </div>

    </div >
  );
}

export default App;
