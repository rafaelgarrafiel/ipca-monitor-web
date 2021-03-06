import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  input {
    width: 20rem;
    font-size: 1rem;
    height: 3rem;
    border: 1px solid #000;
    padding: 0 2rem;
    border-radius: 0.25rem;
  }
  
  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`