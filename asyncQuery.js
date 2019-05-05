export default (query, callback) => {
  setTimeout(() => {
    const qs = Array.from(document.querySelectorAll(query));
    callback(qs);
  }, 0);
}
