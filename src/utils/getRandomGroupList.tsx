import { getRandomInt } from './getRandomInt';

export const getRandomGroupList = (
  minMemberSize: number,
  groupSize: number,
  memberSize: number
): number[][] | Error => {
  if (memberSize < minMemberSize * groupSize) return Error('memberSize should be larger');

  const randomkeysMap: Map<number, number> = new Map();
  const keysOfMemberList = [...new Array(memberSize).keys()];

  while (randomkeysMap.size !== memberSize) {
    const randomNumber = getRandomInt(0, keysOfMemberList.length);

    randomkeysMap.set(randomNumber, randomNumber);

    if (!randomkeysMap.has(randomNumber)) {
      keysOfMemberList.splice(randomNumber, 1);
    }
  }

  const randomKeyList = Array.from(randomkeysMap.values());
  const groupList: number[][] = [];
  const numberOfperGroup = memberSize / groupSize;
  let remainder = memberSize % groupSize;
  let person = 1;

  while (groupList.length !== groupSize) {
    let group: number[] = [];

    if (remainder === 0) {
      group = randomKeyList.splice(0, numberOfperGroup);
    } else if (remainder >= 1) {
      group = randomKeyList.splice(0, numberOfperGroup + person);
      remainder -= 1;
    }
    groupList.push(group);
  }

  return groupList;
};
