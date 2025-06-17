import styled from "styled-components";

export const SignUpSidebarContainer = styled.div`
height: 60rem;
display:flex;
flex-direction:column;
row-gap:4.25rem;
padding-top:6.25rem;
`

export const SignUpSidebarStyle = styled.div`

display:flex;
flex-direction:column;
row-gap:1.25rem;
padding-left:3.13rem;
padding-right:3.13rem;
`

export const FieldsStyle = styled.div`
display:flex;
flex-direction:column;
row-gap:0.62rem;
`
export const SectionProgressStyle = styled.div`
/* padding-bottom:0.63rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #D9D9D995;
    border-radius: 1.25rem;
/* opacity: 0.5; */
height:90%;
`;

export const DashStyle = styled.div<{ filled: string }>`
background-color: ${({ filled }) => (filled === "true" ? '#FFF' : 'transparent')};
border-radius: 1.25rem;
width: 0.1875rem;
height: 0.8125rem;`;