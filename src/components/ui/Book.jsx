import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true; 

    const image = new Image();
    image.src = book.url;

    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImgLoaded(true);
        }
      }, 300);
    };

    return () => {
      mountedRef.current = false; 
    };
  }, [book.url]); 

  return (
    <div className="book">
      {!imgLoaded && (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}

      {imgLoaded && (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img
                src={book.url}
                alt={book.title}
                className="book__img"
              />
            </figure>
          </Link>

          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>

          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      )}
    </div>
  );
};

export default Book;
