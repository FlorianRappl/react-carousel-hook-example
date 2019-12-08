import * as React from 'react';
import { render } from 'react-dom';
import { css } from 'emotion';
import { CarouselContainer, CarouselChild } from './DemoCarousel';

const slide = css`
  height: 500px;
  max-height: 70vh;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const App = () => (
  <div>
    <h1>{document.title}</h1>
    <CarouselContainer interval={10000}>
      <CarouselChild>
        <div className={slide} style={{ backgroundImage: `url(https://via.placeholder.com/900x150/0000FF/808080?Text=First)` }} />
      </CarouselChild>
      <CarouselChild>
        <div className={slide} style={{ backgroundImage: `url(https://via.placeholder.com/900x150/000000/FFFFFF?Text=Second)` }} />
      </CarouselChild>
      <CarouselChild>
        <div className={slide} style={{ backgroundImage: `url(https://via.placeholder.com/900x150/FF0000/808080?Text=Third)` }} />
      </CarouselChild>
    </CarouselContainer>
  </div>
);

render(<App />, document.querySelector('#app'));
