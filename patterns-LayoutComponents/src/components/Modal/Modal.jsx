import { useState } from "react"
import styled from "styled-components";


export function Modal( { children } ) {

  const [ show, setShow ] = useState( false );

  return (
    <>

      <button onClick={ () => setShow( true ) }>
        Show Modal
      </button>
      {
        show && (
          <ModalBackground onClick={ () => setShow( false ) }>
            <ModalContent onClick={ e => e.stopPropagation() }>
              <button onClick={ () => setShow( false ) }>
                Hide Modal
              </button>
              { children }
            </ModalContent>
          </ModalBackground>
        )
      }
    </>
  )
}

const ModalBackground = styled.div`
  
`;

const ModalContent = styled.div`
  
`;

