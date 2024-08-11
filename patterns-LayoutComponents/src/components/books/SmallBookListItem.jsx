
export function SmallBookListItem({ books }) {

  const { name, price } = books;

  return (
    <h2>
      { name } / { price }
    </h2>
  )
}



