import { Button } from "@mui/material";
import styles from './resultCard.module.css';

function ResultCard({ data }) {
    return (
        <div className={styles.resultCard} key={data.idMeal}>
            <h3>{data.name}</h3>
            <h4>Vaccine: {data.vaccine}</h4>
            <h4>Fee: {data.fee_type}</h4>
            <span>D1: {data.available_capacity_dose1}   </span>
            <span>D2: {data.available_capacity_dose2}</span>

            {data.slots.length > 0 
            
                ? 
                    <div className={styles.resultButtons}>
                        {data.slots.map(item => {
                        return <Button size="small" disableElevation type="submit" variant="contained">{item}</Button>

                        })}
                    </div>
               
                : 
                
                null
            }

        </div>
    )
}

export default ResultCard;