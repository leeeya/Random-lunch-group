import Person from '../models/Person';

class PeopleService {
  async create(name: string) {
    return await Person.create({ name });
  }

  async findAll() {
    return await Person.find();
  }

  async remove(id: string) {
    return await Person.findByIdAndRemove(id);
  }
};

export default new PeopleService();
