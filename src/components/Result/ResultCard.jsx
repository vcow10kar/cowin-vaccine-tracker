import { Button } from "@mui/material";
import styles from './recipeCard.module.css';

function ResultCard({data}) {
    return (
        <div className = {styles.resultCard} key = {data.idMeal}>
            <h3>{data.strMeal}</h3>
            <img src = {data.strMealThumb} alt = {data.strMeal}/>
            <h4>{data.strArea}, {data.strCategory}</h4>
            <div className = {styles.resultButtons}>
                <a href = {data.strYoutube} target="_blank" rel="noreferrer"><Button size = "medium" disableElevation type = "submit" variant = "contained">YouTube</Button></a>
                <a href = {data.strSource} target="_blank" rel="noreferrer"><Button size = "medium" disableElevation type = "submit" variant = "contained">Source</Button></a>

            </div>
        </div>
    )
}

export default ResultCard;