function partition<T>(
  collection: Array<T>,
  predicate: (item: T) => string
): Record<string, Array<T>> {
  const safeCollection = collection || [];
  const partitions: Record<string, Array<T>> = {};

  for (let i = 0; i < safeCollection.length; i++) {
    const item = safeCollection[i];
    const key = predicate(item);
    partitions[key] = [...(partitions[key] || []), item];
  }

  return partitions;
}

export default partition;
