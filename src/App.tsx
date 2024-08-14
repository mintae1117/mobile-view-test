import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import BusinessCard from "./Routes/BusinessCard.tsx";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const GlobalStyles = createGlobalStyle`
  ${reset};
  @font-face {
      font-family: 'NanumSquareNeo';
      src: url('/Fonts/NanumSquareNeoTTF-bRg.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background-color: white;
    color: black;
    font-family: 'NanumSquareNeo', sans-serif;
  }
  body::-webkit-scrollbar {
    display: none;
  }// ms scrollbar hidden.
  body {
    -ms-overflow-style: none;
  }// ms scrollbar hidden.
`;// styled reset 을 이용한 reset

const router = createBrowserRouter([
    {
        path: "/:id",
        element: <BusinessCard/>,
    }
])


function App() {

  return (
    <Wrapper>
        <GlobalStyles/>
        <RouterProvider router={router}></RouterProvider>
    </Wrapper>
  )
}

export default App
