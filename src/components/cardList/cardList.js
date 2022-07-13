import { useEffect, useState } from 'react'
import Card from '../card/card'
import './cardList.css'
import axios from 'axios'
import host from '../../host'

const CardList = () =>{

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        axios.get(host + '/books').then((res)=>{
            setBooks(res.data)
        })
    },[])
    return <div className='wrapper'>
        { books.map((data)=>{
            return <Card key={data.id} data={data} />
        })}
    </div>
}

export default CardList;