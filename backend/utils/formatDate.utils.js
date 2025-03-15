export const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, "0"); // Ensure two-digit month
  const day = String(d.getUTCDate()).padStart(2, "0"); // Ensure two-digit day
  return `${year}-${month}-${day}`;
};
