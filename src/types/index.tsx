import { ChangeEvent } from 'react';

export interface Person {
  _id: string;
  name: string;
}

export interface ButtonProps {
  className?: string;
  title: string;
  onClick?: () => void;
}

export interface CardProps {
  className: string;
  children: React.ReactNode;
}

export interface InputProps {
  name?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputValues {
  groupSize: number,
  minMemberSize: number,
  peopleSize: number,
}

export interface ListProps {
  title?: string;
  data?: [];
  children?: React.ReactNode;
}

export interface GroupingFromProps {
  onSubmit: (minMemberSize: number, groupSize: number, peopleSize: number) => void;
}

export interface GroupListProps {
  data: {people: Person[], randomGroupList: number[][]};
}

export interface NameListProps {
  data: Person[];
}

export interface ResultPageProps {
  data: InputValues;
  onClick: (minMemberSize: number, groupSize: number, peopleSize: number) => void;
}

export interface PeopleInitState {
  people: Person[];
  loading: string;
  randomGroupList: number[][];
  error: Error | null;
}

export interface AsideBoardProps {
  boardData: Person[];
}