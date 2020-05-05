export const removeWarningKeys = (object, keys) => {
  return Object.keys(object).reduce((newObject, currentKey) => {
    if (!keys.includes(currentKey)) {
      newObject[currentKey] = object[currentKey];
    }
    return newObject;
  }, {});
};
