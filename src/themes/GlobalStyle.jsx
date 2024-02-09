import { createGlobalStyle } from "styled-components";
import { normalize } from "./Normalize";
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  #root{
    box-sizing: border-box;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  main{
    flex-grow: 1;
    min-height: 100%;
  }
  header, footer {
    flex-grow: 0;
    flex-shrink: 0;
  }
  label {
    display: flex;
    gap: 1rem;
  }
  .container {
    max-width: 900px;
    padding-left: 2rem;
    padding-right: 2rem;
    margin: 0 auto;
  }
  main {
    margin:0 auto;
  }
  p.error {
    color: red;
    margin: 15px 0;
  }

  img.fui-avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container {
    max-width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;
  }
  .fullWidth{
    width: 100%;
    height: auto;
  }
`;
