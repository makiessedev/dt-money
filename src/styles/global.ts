import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #36CC95;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #f0f2f5;
    --shape: #FFFFFF;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body {
    background-color: var(--background);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6px;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;

    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover, &:focus{
      filter: brightness(0.8);
    }
  }
`;

export { GlobalStyles };
