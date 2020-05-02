import * as React from 'react';
import {ComponentContext} from "@context/ComponentContext";

const CharacterContext = React.createContext(null);

const CharacterProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(true);
  const [character, setCharacter] = React.useState(null);
  const [characterId, setCharacterId] = React.useState(1);
  const [search, setSearch] = React.useState('');
  const [searchedCharacters, setSearchedCharacters] = React.useState([]);

  const componentContext = React.useContext(ComponentContext);
  const { setSelectedIndex } = componentContext;

  const apiKey = `10217784639467096`;

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    proxyTargetUrl = `https://superheroapi.com/api/${apiKey}/${characterId}`,
    proxySearchUrl = `https://superheroapi.com/api/${apiKey}/search/${search}`

  const fetchCharacterFromCache = () => {
    if (!('caches' in window)) return null;
    return caches.match(proxyUrl + proxyTargetUrl)
      .then((response) => {
        if (response) {
          return response.json()
        }
        return null;
      })
      .catch((err) => {
        console.error('Error getting data from cache', err);
        return null;
      });
  }

  const fetchCharacter = async () => {
    try {
      setLoading(true);
      // if (('caches' in window)) {
      //   fetchCharacterFromCache()
      //     .then((character) => setCharacter(character))
      //     .then(() => setLoading(false));
      // }

      let req = new Request(proxyUrl + proxyTargetUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'mode': 'no-cors'
        }
      });
      const characterData = await fetch(req);
      const response = await characterData.json();
      setCharacter(response);
      setLoading(false);
    } catch (e) {
      console.log('error', e);
    }
  }

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let req = new Request(proxyUrl + proxySearchUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'mode': 'no-cors'
        }
      });
      const searchedCharacterData = await fetch(req);
      const response = await searchedCharacterData.json();
      setSearchedCharacters(response);
      setSelectedIndex(2);
      setLoading(false);
    } catch (e) {
      console.log('error', e)
    }
  }

  React.useEffect(() => {
    fetchCharacter();
  }, [proxyTargetUrl]);

  return (
    <CharacterContext.Provider value={{
      loading,
      character,
      characterId,
      setCharacterId,
      handleSearchChange,
      handleSearchSubmit,
      searchedCharacters,
    }}>
      {children}
    </CharacterContext.Provider>
  )
}

const CharacterConsumer = CharacterContext.Consumer;
export { CharacterProvider, CharacterConsumer, CharacterContext };
