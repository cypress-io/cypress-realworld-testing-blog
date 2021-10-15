import { parseISO, format } from "date-fns";

export default function Date({ dateString, index }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} data-test={`post-date-${index}`}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
