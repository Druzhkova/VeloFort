import React, { useRef } from 'react';
import styled from 'styled-components';

export function Carousel({ data }) {
  const MARGIN_IMG = 20;

  const scrollRef = useRef(null);
  const imgRef = useRef(null);

  let scrollAmount = 0;

  const sliderScrollLeft = () => {
    scrollRef.current.scrollTo({
      top: 0,
      left: (scrollAmount -= imgRef.current.clientWidth + MARGIN_IMG),
      behavior: 'smooth',
    });

    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
  };

  const sliderScrollRight = () => {
    if (scrollAmount <= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
      scrollRef.current.scrollTo({
        top: 0,
        left: (scrollAmount += imgRef.current.clientWidth + MARGIN_IMG),
        behavior: 'smooth',
      });
    }
  };

  const handleKeyDown = (evt) => {
    if (evt.keyCode === 37) {
      sliderScrollLeft();
    } else if (evt.keyCode === 39) {
      sliderScrollRight();
    }
  };

  return (
    <Container onKeyDown={handleKeyDown} tabIndex="0">
      <CarouselBox ref={scrollRef}>
        { data
          ? data.map(({ title, img }, index) => (
            <Img
              key={index}
              ref={imgRef}
              alt={title}
              src={img}
            />
          ))
          : null }
      </CarouselBox>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 232px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  outline: none;
`;

const CarouselBox = styled.div`
  height: 100%;
  width: auto;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  margin-right: 10px;
  min-width: 311px;
  max-width: 311px;
  height: 232px;
  background-size: cover;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.5s ease;

  :nth-last-child() {
    margin-right: 0px;
  }
`;
