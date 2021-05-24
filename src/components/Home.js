import React from "react";
import Character from "./Character";
import Input from "./Input";
import styles from "./Home.module.css";
import Head from "./Head";
import { Search } from "@material-ui/icons";

const Home = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="animeShow">
      <Head title="Home" />

      <form
        className={styles.inputSearch}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          id="search"
          label=""
          value={search}
          setValue={setSearch}
          placeholder={"Search"}
        />
        <button>
          <Search fontSize="large" />
        </button>
      </form>
      {<Character searchInput={search} />}
    </div>
  );
};

export default Home;
