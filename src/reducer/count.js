export default function (state = { count: 0 }, action) {
  switch (action.type) {
    case "UpdateCount":
      return { count: action.payload };
    default:
      return state;
  }
}
