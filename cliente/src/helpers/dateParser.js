import { format, parseISO } from "date-fns";

const dateParser = (date) => {
  const dateParsed = parseISO(date);
  const dateFormated = format(dateParsed, "dd MMMM yyyy");
  return dateFormated;
};

export default dateParser;
