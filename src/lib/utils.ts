import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (dateString: string): string => {
  return dayjs.utc(dateString).tz("Asia/Tokyo").format("YYYY.MM.DD");
};
