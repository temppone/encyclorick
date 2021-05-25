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

  const stylesStatusTest = (status) => {
    const stylesStatus = {
      alive: styles.charStatusAlive,
      dead: styles.charStatusDead,
      unknown: styles.charStatusUnknown,
    };

    if (status === "Alive") {
      return stylesStatus["alive"];
    } else if (status === "Dead") {
      return stylesStatus["dead"];
    } else {
      return stylesStatus["unknown"];
    }
  };

  if (loading) return <div className={styles.organicLoading}></div>;
  if (error) return <p>{error}</p>;
  if (character === null) return (searchInput = "Bird");

  return (
    <div>
      {character ? (
        character.map((char) => (
          <section
            key={char.id}
            className={`${styles.characterPage} + animeShow`}
          >
            <div>
              <div className={styles.characterImage}>
                <img src={char.image} alt="" />
              </div>
              <div>
                <div className={styles.characterHead}>
                  <h1>{char.name}</h1>
                  <div className={stylesStatusTest(char.status)}>
                    {char.status}
                  </div>
                </div>
                <div className={styles.characterInfos}>
                  <ul>
                    <li>
                      <div className={styles.category}>Species</div>
                      {char.species}
                    </li>
                    <li>
                      <div className={styles.category}>Gender</div>{" "}
                      {char.gender}
                    </li>
                    <li>
                      <div className={styles.category}>Origin</div>
                      {char.origin.name}
                    </li>
                    <li>
                      <div className={styles.category}>Last location</div>
                      {char.location.name}
                    </li>
                    <li>
                      <div className={styles.category}>Episodes</div>
                      {char.episode.length}
                    </li>
                  </ul>
                </div>
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
