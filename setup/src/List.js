import React from 'react';

/**
 * We're mapping over the people array and returning an article element for each person
 * @returns An array of JSX elements.
 */

const List = ({people}) => {
  return (
    <>
      {people.map((person) => {
        const {id,name,age,image} = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
