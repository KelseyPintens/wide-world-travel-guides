import React from 'react';
import books from './Data.json';


  function Books(){
      return(
          <div>
              {books.guides.map(x => {
        return <div>
          <p>{x.type}</p>
          <p>{x.title}</p>
          <p>{x.price}</p>
        </div>        
      })}
        </div>)

    }

        

export default Books;
