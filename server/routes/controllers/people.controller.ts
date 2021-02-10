import PeopleService from '../../service/people.service';
import { NextFunction, Request, Response } from 'express';

type Handler = (req: Request, res: Response, next: NextFunction) => void;

export const createPeople: Handler = async (req, res, next) => {
  const name = req.params.name;

  try {
    const createdPeople = await PeopleService.create(name);

    res.status(200).json({ result: 'ok', data: createdPeople });
  } catch (error) {
    next(error);
  }
};

export const getAllPeople: Handler = async (req, res, next) => {
  const people = await PeopleService.findAll();

  try {
    res.status(200).json({ result: 'ok', data: people });
  } catch (error) {
    next(error);
  }
};

export const removePerson: Handler = async (req, res, next) => {
  const id = req.params.id;

  try {
    const removedPerson = await PeopleService.remove(id);

    res.status(200).json({ result: 'ok', data: removedPerson });
  } catch (error) {
    next(error);
  }
};
