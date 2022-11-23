import styled from 'styled-components';

export const Board = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.6);
  border-radius: 1rem;

  > header {
    padding: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;

  button {
    background: #FFF;
    border: 1px solid rgba(204, 204, 204, 0.6);
    height: 8rem;
    border-radius: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    outline: none;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 0.875rem;
      color: #666
    }

    & + button {
      margin-top: 1.5rem;
    }
  }
`;
