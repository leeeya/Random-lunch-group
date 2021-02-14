import styled from 'styled-components';
import { flexColumnCenter, flexRowCenter } from './mixin';

export const Wrapper = styled.div`
  ${flexColumnCenter}

  width: 100%;
  margin: 8px auto;
`;

export const ListWrapper = styled.div`
  ${flexColumnCenter}

  width: 100%;
`;

export const FormWrapper = styled.div`
  ${flexColumnCenter}

  width: 100%;
  display: flex;
`;

export const AppWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  margin: 24px;
  padding: 24px;
  grid-template-columns: minmax(300px, 2fr) minmax(500px, 6fr);
  justify-items: center;
`;

export const BoardWrapper = styled.div`
  width: 100%;
  height: 90vh;
  padding: 8px;
  border: 1px solid;
  overflow: hidden;
  border-color: ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius};

    .name-list-wrapper {
      height: 60vh;
    }
`;

export const ButtonWrapper = styled.div`
  ${flexRowCenter}
  width: 160px;

  .add-button {
    width: 100px;
    height: 48px;
  }

  .delete-button {
    width: 60px;
    height: 24px;
  }

  .submit-button {
    background-color: ${({ theme }) => theme.color.darkGrey };
    height: 24px;
  }

  .go-back-button {
    background-color: ${({ theme }) => theme.color.darkGrey };
    height: 36px;
  }

  .again-button {
    background-color: ${({ theme }) => theme.color.darkGrey };
    height: 36px;
  }
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
  height: 60px;
  margin-bottom: 12px;
  margin-right: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow.deep};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.navy};
  color: ${({ theme }) => theme.color.white};
`;

export const StyledInput = styled.input`
  width: 240px;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 40px;
`;

export const ErrorMessageBox = styled.p`
  color: ${({ theme }) => theme.color.red}
`;

export const StyledUl = styled.ul`
  ${flexRowCenter}

  height: 50vh;
  margin: 0px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  margin-left: 16px;
  overflow-y: scroll;

  .group-card {
    width: 160px;
    height: 160px;
    padding: 16px;
    background-color: ${({ theme }) => theme.color.green };

   .name-wrapper {
     display: flex;
     justify-content: center;
     flex-wrap: wrap;

    p {
      margin: 8px;
    }
   }
  }
`;
