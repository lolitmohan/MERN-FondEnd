import React from 'react';
import Ratting from './Ratting';

const BookCard = ({book}) => {
    return (
        <>
            <div className="col">
              <div className="card">
                <img
                  src={book.img}
                  className="card-img-top"
                  alt={book.title}
                  style={{ width: "100%", height: 300, objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 title={book['title']} className="card-title">{book.title.slice(0, 25)}</h5>
                  <p className="card-text">{book['author']}</p>
                  <p className="card-text">{book['price']}</p>
                 <Ratting ratting={book.rating}/>
                </div>
                <div className="card-footer">
                  <button type="button" className={`btn ${book.favorite ? "btn-secondary":"btn-success"}`} >
                    <i className="bi bi-heart" /> Favorite
                  </button>
                  <button type="button" className="btn btn-success">
                    <i className="bi bi-cart2" /> Add to cart
                  </button>
                </div>
              </div>
            </div>
        </>
    );
};

export default BookCard;