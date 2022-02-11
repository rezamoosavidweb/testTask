
const logger = (state) => (next) => (action) => {
  if (process.env.NODE_ENV === "development") console.log(action);
  next(action)
};
export default logger;
