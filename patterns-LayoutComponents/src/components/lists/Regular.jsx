
export function Regular( { items, sourceName, ItemComponent } ) {
  return (
    <>
      {
        items.map( ( item, index ) => {
          console.log( { ...{ [ sourceName ]: item } } );
          return (
            <ItemComponent key={ index }
              { ...{ [ sourceName ]: item } }
            />
          )
        } )
      }
    </>
  )
}

