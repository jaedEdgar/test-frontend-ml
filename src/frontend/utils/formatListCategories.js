export default function formatListCategories(data) {
  const result = data.path_from_root.map((category) => category.name);
  return result;
}
