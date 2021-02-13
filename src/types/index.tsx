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
  children: any;
}

export interface InputProps {
  name: string;
  value: string | number;
  placeholder?: string;
  onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}

export interface ListProps {
  title: string;
  data?: [];
  children?: any;
}

export interface GroupingFromProps {
  onClick: () => void;
}

export interface GroupListProps {
  data: {people: Person[], randomGroupList: number[][]};
}

export interface NameListProps {
  data: Person[];
}

export interface GroupingInputValues {
  groupSize: number;
  minMemberSize: number;
}

export interface ResultPageProps {
  onClick: () => void;
}

export interface PeopleInitState {
  people: Person[];
  loading: string;
  groupingInputValues: GroupingInputValues;
  randomGroupList: number[][];
  error: Error | null;
}

