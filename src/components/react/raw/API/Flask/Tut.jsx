import {useState, useEffect} from 'react';

export default function Tut(){
    const [data, setData] = useState([{}]);

    useEffect(()=> {
        fetch("/members/").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    },[])

    return null;
}