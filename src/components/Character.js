import React from "react";
import styles from "./Character.module.css";

const Character = ({ searchInput }) => {
  const [character, setCharacter] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchCharacter(url) {
      try {
        setLoading(true);
        const r = await fetch(url);
        const json = await r.json();
        setCharacter(json.results);
      } catch (erro) {
        setError("Ocorreu um erro");
      } finally {
        setLoading(false);
      }
    }

    if (searchInput.length > 0) {
      searchInput.replace(" ", "+");

      fetchCharacter(
        `https://rickandmortyapi.com/api/character/?name=${searchInput}`
      );
    } else {
      return true;
    }
  }, [searchInput]);

  if (loading) return <div>Carregando</div>;
  if (error) return <p>{error}</p>;
  if (character === null) return null;

  return (
    <div>
      {character ? (
        character.map((char) => (
          <section key={char.id} className={styles.characterPage}>
            <div>
              <img src={char.image} alt="" />
            </div>
            <div>
              <div className={styles.characterHead}>
                <h1>{char.name}</h1>
                <div>{char.status}</div>
              </div>
              <div className={styles.characterInfos}>
                <ul>
                  <li>
                    <b className={styles.category}>Species:</b> {char.species}
                  </li>
                  <li>
                    <b className={styles.category}>Gender:</b> {char.gender}
                  </li>
                  <li>
                    <b className={styles.category}>Origin:</b> {char.origin.name}
                  </li>
                  <li>
                    <b className={styles.category}>Last location:</b> {char.location.name}
                  </li>
                  <li>
                    <b className={styles.category}>Episodes:</b> {char.episode.length}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        ))
      ) : (
        <div className={styles.notFound}>Not found :(</div>
      )}
    </div>
  );
};

export default Character;
