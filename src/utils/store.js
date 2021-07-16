export function addStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
