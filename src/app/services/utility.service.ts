import {Injectable} from '@angular/core';
import {Device} from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor() {}
  getTimezoneOffset() {
    return new Date().getTimezoneOffset();
  }
  getDateTime() {
    // YYYY-MM-DDTHH:MM:SS
    return new Date().toISOString().slice(0, 19);
  }
  getDate() {
    // YYYY-MM-DD
    return new Date().toISOString().slice(0, 10);
  }
  getFutureDate(days) {
    const date = new Date();
    return date.setDate(date.getDate() + days);
  }
  getFutureDateYYYYMMDD(days) {
    const timestamp = this.getFutureDate(days);
    const date = new Date(timestamp);
    return date.toISOString().slice(0, 10);
  }
  getPastDate(days) {
    const date = new Date();
    return date.setDate(date.getDate() - days);
  }
  // https://stackoverflow.com/questions/46068084/calculating-week-number-with-typescript-right-hand-side-of-an-arithmetic-opera
  getWeekNumber(dt: Date, type: 'int' | 'string' = 'int'): string {
    const firstDayOfYear = new Date(dt.getFullYear(), 0, 1);

    const startOfYearWeek = new Date(firstDayOfYear);
    startOfYearWeek.setDate(firstDayOfYear.getDate() - firstDayOfYear.getDay());

    const startOfCurrentWeek = new Date(dt);
    startOfCurrentWeek.setDate(dt.getDate() - dt.getDay());

    const msInWeek = 7 * 24 * 60 * 60 * 1000;
    const weekNum = Math.floor((startOfCurrentWeek.getTime() - startOfYearWeek.getTime()) / msInWeek) + 1;
    // returns ISO week date format YYYY-W01 minus current day, because we want the year / week number only.
    if (type === 'string') {
      return dt.getFullYear().toString() + '-W' + weekNum;
    }
    return weekNum.toString();
  }
  // https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
  getMonday(dt) {
    const d = new Date(dt);
    const day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
    const mon = new Date(d.setDate(diff));
    return mon.getDate() + ' ' + this.months(mon.getMonth()) + ' ' + mon.getFullYear();
  }
  months(month) {
    const monthL = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthS = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return monthL[month];
  }
  days(day) {
    const dayL = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    const dayS = [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ];
    return dayL[day];
  }
  getFirstDayOfWeek(week, y) {
    const d = new Date('Jan 01, ' + y + ' 01:00:00');
    const dayMs = (24 * 60 * 60 * 1000);
    const offSetTimeStart = dayMs * (d.getDay() - 1);
    const w = d.getTime() + 604800000 * (week - 1) - offSetTimeStart; // reducing the offset here
    const n1 = new Date(w).toISOString().slice(0, 10);
    const n2 = new Date(w + 518400000).toISOString().slice(0, 10);
    return {
      dateFrom: n1,
      dateTo: n2,
    }
  }
  timestampToMysqlDate(timestamp: number): string {
    // Create a Date object from the Unix timestamp
    const date = new Date(timestamp * 1000);

    // Extract year, month, day, hours, minutes, and seconds
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Combine into MySQL date format (YYYY-MM-DD HH:MM:SS)
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  pagination(content, start, end) {
    const result = [];
    content.slice(start, end).map(i => {
      result.push(i);
    });
    return result;
  }
  getRandomList(array, numberRequired) {
    const result = [];
    const taken = [];
    const length = array.length;
    if (numberRequired > length) {
      throw new RangeError('getRandom: more elements taken than available');
    }
    let currentAmount = 0; // create an index to iterate through
    while (currentAmount < numberRequired) { // while our index iterator (current items) is less than the required number of items..
      const randomInt = Math.floor(Math.random() * length); // generate a random number between 0 and length of source array
      if(taken.includes(randomInt)) { // if the random number exists in our taken array..
        continue;  // skip this iteration to avoid a duplicate
      } else {
        taken[randomInt] = randomInt; // if random number not already used, then add it to the taken array to prevent it being used again
      }
      result[currentAmount] = array[randomInt]; // use the random number to get an item from source array and add to our result array
      currentAmount++; // increment the index to move onto the next item
    }
    return result;
  }
  // removes duplicates from an array of objects
  removeDuplicates(originalArray, field) {
    const newArray = [];
    const lookupObject  = {};
    for (const x of Object.keys(originalArray)) {
      lookupObject[originalArray[x][field]] = originalArray[x];
    }
    for(const x of Object.keys(lookupObject)) {
      newArray.push(lookupObject[x]);
    }
    return newArray;
  }
  videoFormat() {
    const video = document.createElement('video');
    let format = '';
    if (Boolean(video.canPlayType('application/x-mpegURL'))) {
      format = 'x-mpegURL';
    } else if (Boolean(video.canPlayType('application/dash+xml'))) {
      format = 'dash+xml';
    } else if (Boolean(video.canPlayType('video/mp4'))) {
      format = 'video/mp4';
    } else {
      format = 'video playback not possible';
    }
    return format;
  }
  // accepts an array and an object property name to group by, returns an associative array.
  groupBy(objectArray: any[], property: string) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj);
      return acc;
    }, {})
  }
  async deviceInfo() {
    return await Device.getInfo();
  }
  async operatingSystem() {
    const deviceInformation = await this.deviceInfo();
    const operatingSystem = deviceInformation.operatingSystem; // 'ios' | 'android' | 'windows' | 'mac' | 'unknown'
    if (operatingSystem === 'mac' || operatingSystem === 'ios') {
      return 'ios';
    }
    return operatingSystem;
  }
}
