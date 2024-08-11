import React from "react";


export function Numbered( { items, sourceName, ItemComponent } ) {
  return (
    <>
      { items.map( ( item, index ) => (
        <React.Fragment key={ index }>
          <h3>{ index + 1 }</h3>
          <ItemComponent  { ...{[sourceName] : item} } />
        </React.Fragment>
      ))}
    </>
  )
}

