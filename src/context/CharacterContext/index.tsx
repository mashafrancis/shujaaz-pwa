import * as React from 'react';

const CharacterContext = React.createContext(null);

const CharacterProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(true);
  const [character, setCharacter] = React.useState(null);
  const [search, setSearch] = React.useState([]);
  const [characterId, setCharacterId] = React.useState(1);

  const apiKey = `10217784639467096`;

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    proxyTargetUrl = `https://superheroapi.com/api/${apiKey}/${characterId}`

  const fetchCharacter = async () => {
    try {
      let req = new Request(proxyUrl + proxyTargetUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'mode': 'no-cors'
        }
      });
      setLoading(true);
      const characterData = await fetch(req);
      const response = await characterData.json();
      setCharacter(response);
      setLoading(false);
    } catch (e) {
      console.log('error', e);
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
    }}>
      {children}
    </CharacterContext.Provider>
  )
}

const CharacterConsumer = CharacterContext.Consumer;
export { CharacterProvider, CharacterConsumer, CharacterContext };
