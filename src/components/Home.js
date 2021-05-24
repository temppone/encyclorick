import React from "react";
import Character from "./Character";
import Input from "./Input";
import styles from "./Home.module.css";

const Home = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div>
      <form className={styles.inputSearch}>
        <Input id="search" label="" value={search} setValue={setSearch} placeholder={"Search"} />
      </form>
      {<Character searchInput={search} />}
    </div>
  );
};

export default Home;


