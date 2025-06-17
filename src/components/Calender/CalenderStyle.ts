import styled from "styled-components";
import { breakpoints } from "../../theme";

export const MainCalenderContainer = styled.div`
  width: 100%;
  border-radius: 0.625rem;
  background: var(--white, #fff);
  padding: 1.25rem;
  gap: 1.25rem;

  /* .rbc-time-column:first-child {
  border: none;
  background: yellow;
}
.rbc-time-slot {
  border: none;
} */
  .rbc-calendar {
    font-family: "Primary Font";
    overflow-x: auto;
  }
  .rbc-timeslot-group {
    border: none;
  }
  .rbc-time-view {
    border: none;

    [dir="ltr"] & {
      border-left: none;
    }
    [dir="rtl"] & {
      border-right: none;
    }
  }

  .rbc-time-content {
    border: none;
    /* background: yellow; */
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0.25rem;
    }
    &::-webkit-scrollbar-thumb {
      background: #f4f3f2;
      width: 0.3rem;
      border-radius: 0.625rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent; /* Transparent background for the track */
      border-radius: 0.625rem;
    }
  }

  .rbc-time-header-gutter {
    border: none;
    background: #fff;
    margin-top: -1px;
  }

  .rbc-time-slot {
    /* background: red; */
    width: 9.9575rem;
    min-height: 6rem !important; /* Ensures minimum height */
    height: 6rem !important; /* Force the height */
    max-height: 6rem !important; /* Prevent exceeding this height */
    display: flex !important;
    flex-direction: column !important;
    /* margin-right: 0.2rem; */
  }

  .rbc-time-slot:first-child {
    width: 100%;
  }
  .rbc-label {
    color: var(--gray-dark, #a6a6a6);
    text-align: center;

    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.05rem */
    margin-top: 1.5rem;
  }
  .rbc-event {
    background: transparent !important;
    border: none !important;
  }
  .rbc-event-label {
    display: none !important;
  }

  /* .rbc-event-content {
  display: flex !important;
  flex-direction: column !important;
} */
  /* Ensure events in the same time slot are displayed in a column */
  .rbc-events-container {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch; /* Make events take up full width of the column */
  }

  .rbc-day-slot .rbc-event {
    flex: 1 1 auto; /* Allow events to stretch proportionally */
    margin: 2px 0; /* Add vertical spacing between events */
    border: none; /* Remove default borders */
    border-radius: 5px; /* Add rounded corners */
    overflow: hidden; /* Ensure content doesn't overflow */
  }
  .rbc-selected {
    background: purple;
    fill: purple;
  }
  /* Ensure the event title is centered and styled appropriately */
  .rbc-event-content {
    /* text-align: center; */
    /* background: green; */
    display: flex !important;
    flex-wrap: wrap;
    width: 100%;
    flex: 1;
  }

  .dRAnTB {
    display: flex;
    /* background: blue !important; */
    flex: 1;
    position: static;
    /* height: 100%; */
    /* flex: 1 !important; */
    /* max-width: 100%; */
  }

  /* .rbc-event:hover {
  display: none !important;
} */

  .rbc-event:focus,
  .rbc-day-slot .rbc-background-event:focus {
    outline: none;
  }

  .rbc-row-content {
    position: relative;
    display: flex;
    flex-direction: column;
    user-select: none;
    -webkit-user-select: none;
    /* z-index: 4; */
  }

  .rbc-time-view {
    /* background: green !important;
  fill: green !important; */
  }
  /* .rbc-day-slot {
  background: transparent !important;
} */

  .rbc-date-cell {
    position: relative;
    z-index: -1;
  }
  .rbc-row {
    position: relative;
    /* z-index: -1 !important; */
  }

  .event-info-modal {
    border-radius: 4px;
    max-width: 300px;
    word-wrap: break-word;
  }

  .rbc-time-header-content {
    /* background: yellow !important; */
    /* margin-left: 1.2rem; */
    border: none !important;
    [dir="rtl"] & {
      margin-left: 1.2rem;
      border-left: none;
    }
  }
  .rbc-time-header-gutter {
    [dir="rtl"] & {
      /* background: yellow !important; */
    }
  }
  .rbc-time-header {
    border: none !important;
  }

  .rbc-header-today {
    z-index: 10;
  }
  .rbc-row-bg {
    /* background: red; */
    display: none;
  }

  .rbc-day-bg + .rbc-day-bg {
    margin-top: 3rem;
  }
  .rbc-time-header-content {
    border: none !important;
  }
  .rbc-day-bg {
    border: none !important;
  }
  .rbc-day-bg .rbc-today {
    background: transparent !important;
  }
  .rbc-time-header-content {
    border: none !important;
  }

  .rbc-header.rbc-today {
    background-color: transparent;
  }

  .rbc-header.rbc-today button {
    background-color: transparent;
    border: none; /* Remove button border if needed */
    box-shadow: none; /* Remove button shadow if present */
  }
  .rbc-today .rbc-events-container {
    background: rgba(171, 174, 229, 0.05);
    width: 100%;
  }
  .rbc-time-column:first-child {
    /* background: aqua; */
    width: 5.9575rem;
    justify-content: center;
    /* padding-right: 4rem !important; */
  }
  .rbc-month-view {
    border: none;
  }
  .rbc-overflowing {
    /* background: yellow; */
    width: 5.9575rem;
  }
  .rbc-time-header-gutter {
    /* background: purple; */
    width: 5.9575rem !important;

    min-width: 5.9575rem !important;
  }
  .rbc-time-header-content {
    /* background: yellow !important; */
    width: 100%;
    display: flex;
  }

  .rbc-header {
    border: none;
    min-width: 11.4vw !important;
    height: 5.5rem;
  }

  @media (max-width: ${breakpoints.large}) {
    .rbc-time-content {
      width: 100vw;
    }
    .rbc-header {
      min-width: 13.15vw !important;
      /* background: green; */
    }
    .rbc-header:nth-child(6) {
      /* min-width: 12.25vw !important; */
      /* background: blue; */
    }

    .rbc-header:nth-child(7) {
      /* min-width: 12.2vw !important; */
      /* background: red; */
    }
  }
  @media (min-width: ${breakpoints.BigMonitor}) {
    .rbc-header {
      min-width: 11.7vw !important;
      /* background: green; */
    }
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    .rbc-header {
      min-width: 11.9509vw !important;
      /* background: red; */
    }
  }
  @media (min-width: 2050px) {
    .rbc-header {
      min-width: 11.95vw !important;
      /* background-color: aqua; */
    }
  }

  @media (min-width: ${breakpoints.TvScreen}) {
    .rbc-header:nth-child(1) {
      min-width: 12.38vw !important;
    }

    .rbc-header:nth-child(2) {
      min-width: 12.32vw !important;
    }

    .rbc-header:nth-child(3) {
      min-width: 12.32vw !important;
    }

    .rbc-header:nth-child(4) {
      min-width: 12.29vw !important;
    }

    .rbc-header:nth-child(5) {
      min-width: 12.26vw !important;
    }

    .rbc-header:nth-child(6) {
      min-width: 12.25vw !important;
    }

    .rbc-header:nth-child(7) {
      min-width: 12.2vw !important;
    }

    .rbc-header {
      /* background: purple !important; */
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    .rbc-header {
      min-width: 15.55vw !important;
      /* background: aqua; */
    }
  }
`;

export const TodayHeaderMainCony = styled.div`
  display: flex;
  padding: 0.75rem 0.375rem 0.375rem 0.375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  background: var(--dark, #231d46);
  width: 3.5rem;
  margin: auto;
`;
export const TodayNumberHeaderMainCony = styled.div`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  aspect-ratio: 1/1;
  border-radius: 6.25rem;
  background: var(--purple, #abaee5);
`;
