import * as React from 'react';
import { useCarousel, CarouselOptions } from './useCarousel';
import { css } from 'emotion';

const carousel = css`
  position: relative;
  overflow: hidden;
`;

const carouselIndicators = css`
  position: absolute;
  right: 0;
  bottom: 0.5em;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  list-style: none;
  margin: 0 auto;
`;

const carouselIndicator = css`
  position: relative;
  flex: 0 1 auto;
  width: 1.5em;
  height: 0.3em;
  margin: 0 0.3em;
  background: $shadowColor;
  cursor: pointer;

  &:hover {
    background: $secondary;
  }

  &.active {
    background: $primary;
    cursor: default;
  }
`;

const carouselContent = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
`;

const carouselItem = css`
  width: 100%;
`;

function makeIndices(start: number, delta: number, num: number) {
  const indices: Array<number> = [];

  while (indices.length < num) {
    indices.push(start);
    start += delta;
  }

  return indices;
}

export interface CarouselContainerProps {
  interval?: number;
  slidesPresented?: number;
}

export const CarouselContainer: React.FC<CarouselContainerProps> = ({
  children,
  slidesPresented = 1,
  interval = 5000,
}) => {
  const slides = React.Children.toArray(children);
  const length = slides.length;
  const numActive = Math.min(length, slidesPresented);
  const [active, setActive, handlers, style] = useCarousel(length, interval, { slidesPresented: numActive });
  const beforeIndices = makeIndices(slides.length - 1, -1, numActive);
  const afterIndices = makeIndices(0, +1, numActive);

  return (
    length > 0 && (
      <div className={carousel}>
        <ol className={carouselIndicators}>
          {slides.map((_, index) => (
            <li
              onClick={() => setActive(index)}
              key={index}
              className={`${active === index ? 'active' : ''} ${carouselIndicator}`}
            />
          ))}
        </ol>
        <div className={carouselContent} {...handlers} style={style}>
          {beforeIndices.map(i => (
            <CarouselChild key={i}>{slides[i]}</CarouselChild>
          ))}
          {slides.map((slide, index) => (
            <CarouselChild key={index}>{slide}</CarouselChild>
          ))}
          {afterIndices.map(i => (
            <CarouselChild key={i}>{slides[i]}</CarouselChild>
          ))}
        </div>
      </div>
    )
  );
};

export interface CarouselChildProps {}

export const CarouselChild: React.FC<CarouselChildProps> = ({ children }) => (
  <div className={carouselItem}>{children}</div>
);
