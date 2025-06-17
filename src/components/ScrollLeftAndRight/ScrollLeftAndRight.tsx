import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  SRLDivArrowsWrapper,
  ScrollLeftAndRightBody,
  ScrollLeftAndRightContainer,
  ScrollLeftAndRightLine,
} from "./ScrollLeftAndRight.style";
import { useRecoilValue } from "recoil";

import { TransformDirection } from "../../utils/Direction";
import { SvgPaginatorArrow } from "../../elements/Icons";

interface ScrollLeftAndRightInerface {
  justifyContent?: string;
  paddingRight?: string;
  content: any;
  Width?: string;
  MarginTop?: string;
  FixedBodyContainer?: any;
  LineWidth?: string;
  AlignSelf?: string;
  SmallAdditionalWidth?: string;
  TabletAdditionalWidth?: string;
  children?: any;
}

const ScrollLeftAndRight = ({
  justifyContent = "left",
  paddingRight = "10rem",
  Width = "100%",
  content,
  MarginTop = "0.5rem",
  FixedBodyContainer,
  LineWidth,
  children,
  AlignSelf,
  SmallAdditionalWidth,
  TabletAdditionalWidth,
}: ScrollLeftAndRightInerface) => {
  const columnWidth = 378;
  const tableContainerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (tableContainerRef.current) {
      const newScrollPosition =
        tableContainerRef.current.scrollLeft - columnWidth;
      tableContainerRef.current.scrollBy({
        left: -columnWidth,
        behavior: "smooth",
      });
      setCurrentIndex(Math.max(0, newScrollPosition / columnWidth));
    }
  };

  const scrollRight = () => {
    if (tableContainerRef.current) {
      const newScrollPosition =
        tableContainerRef.current.scrollLeft + columnWidth;
      tableContainerRef.current.scrollBy({
        left: columnWidth,
        behavior: "smooth",
      });
      const maxIndex =
        Math.floor(tableContainerRef.current.scrollWidth / columnWidth) - 1;
      setCurrentIndex(Math.min(maxIndex, newScrollPosition / columnWidth));
    }
  };

  useEffect(() => {
    if (tableContainerRef.current) {
      const newScrollPosition = currentIndex * columnWidth;
      tableContainerRef.current.scrollLeft = newScrollPosition;
      setScrollPosition(newScrollPosition);

      // Check if you can scroll left
      setCanScrollLeft(newScrollPosition > 0);

      // Check if you can scroll right
      setCanScrollRight(
        tableContainerRef.current.scrollWidth - newScrollPosition >
          tableContainerRef.current.clientWidth
      );
    }
  }, [currentIndex]);

  const FlexDirection = TransformDirection() === "rtl" ? "row-reverse" : "row";

  return (
    <ScrollLeftAndRightContainer
      BigContainerWidth={Width}
      SmallAdditionalWidth={SmallAdditionalWidth}
      TabletAdditionalWidth={TabletAdditionalWidth}
    >
      <ScrollLeftAndRightBody
        ref={tableContainerRef}
        onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
      >
        {content}
      </ScrollLeftAndRightBody>
      <div>{FixedBodyContainer}</div>
      {canScrollLeft || canScrollRight ? (
        <ScrollLeftAndRightLine
          paddingRight={paddingRight}
          justifyContent={justifyContent}
          MarginTop={MarginTop}
          AlignSelf={AlignSelf}
          LineWidth={LineWidth}
        >
          <SRLDivArrowsWrapper
            style={{ flexDirection: FlexDirection }}

            // theme={theme}
          >
            <SvgPaginatorArrow
              onClick={scrollLeft}
              onMouseEnter={scrollLeft}
              style={{
                height: "0.8rem",
                transform: "rotate(90deg)",
                color: "red",
                opacity: canScrollLeft ? 1 : 0.5, // Adjust opacity based on scroll state
                cursor: canScrollLeft ? "pointer" : "default", // Adjust cursor based on scroll state
                stroke: "#fff",
              }}
            />
            <SvgPaginatorArrow
              style={{
                height: "0.8rem",
                transform: "rotate(-90deg)",
                opacity: canScrollRight ? 1 : 0.5, // Adjust opacity based on scroll state
                cursor: canScrollRight ? "pointer" : "default", // Adjust cursor based on scroll state
              }}
              onClick={scrollRight}
              onMouseEnter={scrollRight}
            />
          </SRLDivArrowsWrapper>
        </ScrollLeftAndRightLine>
      ) : null}
    </ScrollLeftAndRightContainer>
  );
};

export default ScrollLeftAndRight;
