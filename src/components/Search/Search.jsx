import { Alert, Button, TextField } from '@mui/material';
import styles from './search.module.css';
import ResultCard from '../Result/ResultCard';
import axios from 'axios';
import { useState } from 'react';

function Search() {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = new FormData(e.target);

        let pincode = String(data.get("pincode"));
        let date = String(data.get("date"));
        date =  date.split("-").reverse().join("-");

        console.log(pincode, date);

        axios({
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`,
            method: 'get',
            // headers: {
            //     "accept-language": "en_IN",
            // }
        })
            .then((res) => {
                console.log(res.data);
                setResults(res.data.sessions);
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }

    return (
        <div className={styles.searchPage}>
            <form onSubmit={handleSubmit}>
                <div className={styles.search} >
                    <TextField name="pincode" placeholder="Enter Pin Code..." />
                    <TextField name="date" type = "date" placeholder="Enter Date..." />
                    <Button disableElevation type="submit" variant="contained">Search</Button>
                </div>

                <div className = {styles.alert}>
                    {error ? <Alert severity="error">{error}</Alert> : null}
                </div>
            </form>

            {results.length > 0 ?

                <div className={styles.searchResults}>
                    {results.map(item => {
                        return <ResultCard data={item} key = {item.center_id} />
                    })}
                </div>

                : null}

        </div>
    )
}

export default Search;