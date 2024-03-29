import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Card from "./components/Cards/Card";
import { fetchTopAlbums } from "./api/api";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    console.log("data", data);
    setTopAlbumData(data);
  };

  useEffect(() => {
    generateTopAlbumData();
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <Card />
      <div className={styles.sectionWrapper}>
        <Section title="Top Albums" data={topAlbumData} type="album" />
      </div>
    </>
  );
}

export default App;
