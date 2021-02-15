import React, { ReactElement } from 'react';
import NameInputForm from '../../molecules/NameInputForm';
import NameList from '../../molecules/NameList';
import { BoardWrapper } from '../../../styles/shared';
import { NAME } from '../../../constants';
import { AsideBoardProps } from '../../../types';

const AsideBoard: React.FC<AsideBoardProps> = ({
  boardData,
}): ReactElement => {
  return (
    <BoardWrapper>
      <NameInputForm />
      <div className={NAME.NAME_LIST_WRAPPER}>
        <NameList data={boardData} />
      </div>
    </BoardWrapper>
  );
};

export default React.memo(AsideBoard);
