import styled from 'styled-components';
import { flexColumnCenter, flexRowCenter } from './mixin';

export const Wrapper = styled.div`
  ${flexColumnCenter}

  width: 100%;
  margin: 8px auto;
`;

export const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 2.5fr;
  justify-items: center;
  padding: 80px;
`;

export const BoardWrapper = styled.div`
  width: 100%;
  height: 85vh;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const StyledButton = styled.button`
  width: 70%;
  margin-top: 8px;
  border: 1px solid white;
  color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 300ms ease-in;
  &:hover {
    transform: translate(2px, -2px);
    cursor: pointer;
  }
`;

export const StyledCard = styled.div`
  ${flexColumnCenter};

  width: 120px;
  height: 80px;
  margin-bottom: 12px;
  margin-right: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow.deep};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.navy};
  color: ${({ theme }) => theme.color.white};
`;

export const StyledInput = styled.input`
  width: 70%;
`;

export const Label = styled.label`
  border-color: ${({ theme }) => theme.color.red}
`;

export const ErrorMessageBox = styled.p`
  color: ${({ theme }) => theme.color.red}
`;

export const StyledUl = styled.ul`
  ${flexRowCenter}

  flex-wrap: wrap;
  margin-left: 16px;
  overflow-y: scroll;
`;
