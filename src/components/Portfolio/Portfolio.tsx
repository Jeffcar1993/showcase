import styles from "./Portfolio.module.css";
import ProjectCard from "../ProjectCard";
import { View } from "../App";

function Portfolio({ setView }: { setView: (view: View) => void }) {
  return (
    <>
      <div className={styles.portfolio}>
        <ProjectCard
          title="ReactDev Tic-Tac-Toe"
          image="public/Tic_tac_toe.svg.png"
          onClick={() => setView("ReactDev TicTacToe")}
        />
        <ProjectCard
          title="Poke Collection"
          image="public/pokeapi.png"
          onClick={() => setView("Poke Collection")}
        />
        <ProjectCard
          title="React Wordle"
          image="public/Wordle_196_example.svg.png"
          onClick={() => setView("Wordle")}
        />
        <ProjectCard
          title="Video Feed"
          image="public/video.jpeg"
          onClick={() => setView("Portfolio")}
        />
      </div>
    </>
  );
}

export default Portfolio;
