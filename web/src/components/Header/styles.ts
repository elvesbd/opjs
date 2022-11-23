import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12.375rem;
  background-color: #D73035;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  .page-details {
    h1 {
      color: #fff;
      font-size: 2rem;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 1rem;
      opacity: 0.9;
      margin-top: 0.375rem;
    }
  }
`;
