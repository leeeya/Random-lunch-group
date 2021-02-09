const PeopleService = require('../../service/people.service');

exports.getAllPeople = async (req, res, next) => {
  try {
    const people = await PeopleService.findAll();

    res.status(200).json({ result: 'ok', data: people });
  } catch (error) {
    next(error);
  }
};
