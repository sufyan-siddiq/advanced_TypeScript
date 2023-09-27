import { useState } from 'react';
import './App.css';
import { SearchInput } from './components/SearchInput';
import { Person } from './mockdata/Person';
import { Widgets } from './mockdata/Widge';
import { genericSearch } from './utils/genericSeardch';
import useDebounce from './hooks/hooks';

export interface IApp {
}
function App() {

  const [query, setQuery] = useState<string>("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value)
  }
  return (
    <div >
      <SearchInput value={query} onChange={handleChange} />
      <div>
        <h3>Widgets :</h3>
        {Widgets.filter(widge => genericSearch(widge, ["title", "description",], query, false)).map(widge => {
          return (
            <div key={widge.id}>
              <h1>
                {widge.title}
              </h1>
              <h1>
                {widge.description}
              </h1>
              <h1>
                {widge.created}
              </h1>
              <h1>
                {widge.rating}
              </h1>
              <h1>
                {widge.updates}
              </h1>
            </div>
          )
        })}
      </div>
      <div>
        <h3>Person :</h3>
        {Person.filter(person => genericSearch(person, ["firstName", "lastName"], query, false)).map(person => {
          return (
            <div key={person.id}>
              <h1>
                {person.firstName}
              </h1>

              <h1>
                {person.lastName}
              </h1>
              <h1>
                {person.birthday}
              </h1>
              <h1>
                {person.eyeColor}
              </h1>
            </div>
          )
        })}
      </div>

    </div >
  );
}

export default App;
