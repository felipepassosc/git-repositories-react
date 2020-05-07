import styled from 'styled-components';

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
      width: 120px;
      border-radius: 50%;
      margin-top: 20px;
  }

  p {
      margin-top: 5px;
      font-size: 16px;
      color: #666;
      line-height: 1.4;
      text-align: center;
      max-width: 400px;
  }
`;
