import React, { useEffect } from 'react';
import styles from "./Home.module.css";
import { useHome } from '../../hooks/useHome';
import { Cards } from '../../components/card/Cards';
import { Filter } from '../../components/filter/Filter';
// import { CardFavProps } from '../../interface/characters';

const Home: React.FC = () => {
  const {  getAllCharacters } = useHome();

  useEffect(() => {
    getAllCharacters();
  }, []);
 
  return (
    <main className={styles.home}>
      <Filter/>
      <Cards/>
    </main>
  );
}

export default Home;


