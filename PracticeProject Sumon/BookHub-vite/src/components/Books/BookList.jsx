import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const BookList = () => {

    const [Books,setBook]=useState([]);

    useEffect(()=>{
      (async()=>{
       fetch('/data.json')
       .then((res)=> res.json())
       .then((data)=>{
        setBook(data);
       })
      })()
    },[])

    

    return (
        <div className="movie-list">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              Books.map((book)=>{
                return(
                  <BookCard key={book.id} book={book}/>
                )
              })
            }
            
          </div>
        </div>
    );
};

export default BookList;