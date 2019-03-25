/* eslint-disable */
'use strict';
import moment from 'moment';

const DATE_FORMAT = 'DD.MM.YYYY';
const DATE_FORMAT_WITH_MINUS = 'YYYY-MM-DD';
const DATE_FORMAT_MIN_YEARS = 'DD.MM.YY';
const TIME_FORMAT = 'HH:mm:ss';
export const TIME_FORMAT_WITHOUT_SEC = 'HH:mm';
const UNIX_STAMP_IN_MILLISECONDS = 'x';
const UNIX_STAMP_IN_SECONDS = 'X';

export const UNIX_ONE_DAY = 86400;
export const UNIX_ONE_WEEK = 604800;
export const UNIX_ONE_MONTH = 2629743;

export function dateTime(date, hasSeconds = true) {
  return moment(date).format(`${hasSeconds ? TIME_FORMAT : TIME_FORMAT_WITHOUT_SEC}`);
}

export function dateToUnixTime(date) {
  const unix = moment(date).format(UNIX_STAMP_IN_MILLISECONDS);
  return parseInt(unix / 1000, 10);
}

export function dateNow(isUnix = false, hasSeconds = true) {
  const date = new Date();
  return isUnix ? dateToUnixTime(date) : dateTime(date, hasSeconds);
}

export function dateToUTCString(dateUtc) {
  dateUtc = new Date(dateUtc);

  function formatNumber(num) {
    return num > 9 ? num : '0' + num;
  }

  const timezone = -(new Date().getTimezoneOffset() / 60);
  let formatedDate =
    formatNumber(dateUtc.getDate()) +
    '.' +
    formatNumber(dateUtc.getMonth() + 1) +
    '.' +
    formatNumber(dateUtc.getFullYear()) +
    ' ' +
    formatNumber(dateUtc.getHours()) +
    ':' +
    formatNumber(dateUtc.getMinutes()) +
    ':' +
    formatNumber(dateUtc.getSeconds());

  if (timezone > 0) {
    formatedDate += ` (UTC+ ${formatNumber(timezone)}:00)`;
  } else if (timezone < 0) {
    formatedDate += ` (UTC" ${formatNumber(timezone)}:00)`;
  }

  return formatedDate;
}

export function dateYesterdayFromNow(isUnix = false, hasSeconds = true) {
  const date = dateNow(true);
  const oneDay = UNIX_ONE_DAY;

  return isUnix ? date - oneDay : dateTime(date - oneDay, hasSeconds);
}

export function dateTreeDaysAgoFromNow(isUnix = false, hasSeconds = true) {
  const date = dateNow(true);
  const threeDay = 3 * UNIX_ONE_DAY;

  return isUnix ? date - threeDay : dateTime(date - threeDay, hasSeconds);
}

export function dateOneWeekAgoFromNow(isUnix = false, hasSeconds = true) {
  const date = dateNow(true);
  const oneWeek = UNIX_ONE_WEEK;

  return isUnix ? date - oneWeek : dateTime(date - oneWeek, hasSeconds);
}

export function dateOneWeekNextFromNow(isUnix = false, hasSeconds = true, withoutTime = false) {
  const date = dateNow(true, false, withoutTime);
  const oneWeek = UNIX_ONE_WEEK;
  return isUnix ? date - oneWeek : dateTime(date + oneWeek, hasSeconds);
}

export function dateOneMonthAgoFromNow(isUnix = false, hasSeconds = true) {
  const date = dateNow(true);
  const oneMonth = UNIX_ONE_MONTH;

  return isUnix ? date - oneMonth : dateTime(date - oneMonth, hasSeconds);
}

export function dottedToDashed(date) {
  return moment(date, DATE_FORMAT).format(DATE_FORMAT_WITH_MINUS);
}

export function dashedToDotted(date) {
  return moment(date, DATE_FORMAT_WITH_MINUS).format(DATE_FORMAT);
}

export function dateConvertUnixToUTC(date, isFull = false) {
  return date ? moment.unix(date).format(isFull ? `${DATE_FORMAT_WITH_MINUS}T${TIME_FORMAT}` : DATE_FORMAT) : '';
}

export function dateFormat(date, isMinYears = false, pattern) {
  if (!date) {
    return '';
  }

  return moment(date).format(pattern ? pattern : `${isMinYears ? DATE_FORMAT_MIN_YEARS : DATE_FORMAT}`);
}

export function dateToObject(value, isMinYears = true) {
  if (!value) {
    return null;
  }

  return {
    time: dateTime(value, false),
    date: dateFormat(value, isMinYears),
  };
}

export function floatToDate(floatNum, toString = false) {
  if (!floatNum) {
    return null;
  }

  let parts = ('' + floatNum).split('.');

  if (parts.length > 0 && parts[0]) {
    let date = new Date(1899, 11, 30);

    date.setDate(date.getDate() + parseInt(parts[0], 10));
    return toString ? new Date(date).toLocaleDateString() : new Date(date);
  }

  return null;
}

export function dateFullToObject(value) {
  if (!value) {
    return null;
  }

  return {
    year: moment(value).format('YYYY'),
    month: moment(value).format('MM'),
    day: moment(value).format('DD'),
    hour: moment(value).format('HH'),
    minutes: moment(value).format('mm'),
    seconds: moment(value).format('ss'),
  };
}

export function calculateDuration(start, end) {
  if (!start) {
    return false;
  }

  if (!end) {
    end = moment(new Date()).format(`${DATE_FORMAT_WITH_MINUS}T${TIME_FORMAT}`);
  }

  let startUnix = dateToUnixTime(start);
  let endUnix = dateToUnixTime(end);
  let result = (endUnix - startUnix) * 1000;

  let days = Math.floor(result / 86400000);
  result = result % 86400000;
  let hours = Math.floor(result / 3600000);
  result = result % 3600000;
  let minutes = Math.floor(result / 60000);

  if (!days && !hours && !minutes) {
    return false;
  }

  return {
    hours: Math.abs(hours + (days ? days * 24 : 0)),
    minutes: Math.abs(minutes),
  };
}

export function getTimeZone(date) {
  return moment(date).format('z/zz');
}

export function dateFormatWithTime(date, hasSeconds = true) {
  return moment(date).format(`${DATE_FORMAT} ${hasSeconds ? TIME_FORMAT : TIME_FORMAT_WITHOUT_SEC}`);
}

export function duration(date) {
  let duration = moment.duration(date);

  return {
    years: duration.years(),
    months: duration.months(),
    days: duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes(),
  };
}

export function isValidTime(string, hasSeconds = true) {
  return moment(string, `${hasSeconds ? TIME_FORMAT : TIME_FORMAT_WITHOUT_SEC}`).isValid();
}

export function isAfter(dateOne, dateTwo = new Date()) {
  return moment(dateOne).isAfter(dateTwo);
}
