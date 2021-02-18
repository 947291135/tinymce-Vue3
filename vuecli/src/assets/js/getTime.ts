import { ref } from "vue";
interface TimeType {
  y: number;
  m: number;
  d: number;
  h: number;
  i: number;
  s: number;
  a: number;
}
const nowTime = ref("");
const getTime = (
  time?: number | string | Date,
  pattern = "{y}-{m}-{d} {h}:{i}:{s}"
): string => {
  if (!time) {
    time = new Date();
  }
  const format = pattern || "{y}-{m}-{d} {h}:{i}:{s}";
  let date: Date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj: TimeType = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const timestr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  nowTime.value = timestr;
  return timestr;
};

export { nowTime, getTime };
