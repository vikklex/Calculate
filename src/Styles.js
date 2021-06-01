import styled from 'styled-components';

export const CalculatorStyles = styled.div`
  background-color: #0099cc;
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  }

  .display {
    width: 100%;
    }
    h1 {
      font-size: 50px;
      color: white;
      text-align: center;
    }
  }
  .number-pad {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 0px 30px;
    width: 450px;
    margin: 0 auto;
   
    button {
      width: 100%;
      height: 80px;
      border-radius: 20px;
      border: 3px solid white;
      font-size: 40px;
      color: white;
      background: #ffa8ef;
      &:focus {
        outline: none;
        border-style: 3px, black;
      }
      &:hover {
        border: 5px solid #dfe6e9;
        font-weight: 500;
      }
    }
    button.function-button {
      background-color: gray;
    }
    button.white-button {
      color: #2d3436;
      background-color: white;
    }
  }
  .zero-button {
    grid-column: 1/3;
  }
`;

export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 40px;
  grid-template-columns: 3fr;
  border: 4px solid white;
  max-width: 700px;
  margin: 10px auto;
  align-items: center;
  border-radius: 20px;
  background: #ffa8ef;
  h2,
  p {
    text-align: center;
    color: white;
  }
  h2 {
    font-size: 30px;
    margin: 0;
    text-align: right;
    border-bottom: 4px solid white;
    padding: 15px 20px;
  }
  h2.long-main-display {
    font-size: 1.2rem;
  }
  p {
    margin: 5px 0;
    font-size: 1.3rem;
    
  }
  p.long-stored-display {
    font-size: 0.5rem;
  }
`;