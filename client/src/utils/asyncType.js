export default (TYPE) => {
  return {
    [TYPE]: {
      START: `${TYPE}_START`,
      FINISH: `${TYPE}_FINISH`,
      ERROR: `${TYPE}_ERROR`,
    },
  };
};
