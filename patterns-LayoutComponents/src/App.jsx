import { LargeAuthorListItems, LargeBookListItem, Regular, SmallAuthorListItems, SmallBookListItem } from './components';
import { Numbered } from './components/lists/Numbered';
import { authors } from './data/authors';
import { books } from './data/books';

function App() {

  return (
    <>
      {/**SECCION 6 SCREEN */ }
      {/* <SplitScreen Left={ LeftSideComponents } Right={ RightSideComponents } 
        leftWidth={ 1 } rightWidth={ 4 }
      />

      <SplitScreenChildren leftWidth={ 1 } rightWidth={ 4 }>
        <LeftSideComponents title={ 'Left' } />
        <RightSideComponents title={ 'Right' } />
      </SplitScreenChildren> */}

      <Regular items={ authors } sourceName={ 'author' }
        ItemComponent={ SmallAuthorListItems }
      />
      <hr />
      <h1>Number</h1>
      <Numbered items={ authors } sourceName={ 'author' }
        ItemComponent={ LargeAuthorListItems }
      />
      <hr />

      <Regular items={ books } sourceName={ 'books' }
        ItemComponent={ LargeBookListItem }
      />
      <hr />

      <Regular items={ books } sourceName={ 'books' }
        ItemComponent={ SmallBookListItem }
      />

    </>
  )
}

export default App
