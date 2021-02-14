import { getRandomInt } from './getRandomInt';

export const getRandomGroupList = (
  minMemberSize: number,
  groupSize: number,
  memberSize: number,
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

  while (randomKeyList.length) {
    let group: number[] = [];

    if (groupList.length === groupSize) {
      const groupKey = getRandomInt(0, groupSize);
      groupList[groupKey].push(randomKeyList[0]);
      randomKeyList.splice(0, 1);
      console.log(groupList);
    } else {
      group = randomKeyList.splice(0, minMemberSize);
      groupList.push(group);
    }
  }

  return groupList;
};
