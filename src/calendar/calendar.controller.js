const Calendar = require("../models/calendar");
const Chance = require("chance");
const log = require("../utils/logger");
const chance = new Chance();


class CalendarData {
  constructor() {
    this.id = chance.guid();
    this.title = null;
    this.isAllDay = false;
    this.start = null;
    this.end = null;
    this.category = null;
    this.dueDateClass = null;
    this.color = null;
    this.bgColor = null;
    this.dragBgColor = null;
    this.borderColor = null;
    this.location = null;
    this.calendarId = null;
    this.createdAt = null;
    this.updatedAt = null;
  }
}

async function getCalendarEvents(ctx) {
  const results = await Calendar.query();
  console.log({ calendars: results });

  ctx.status = 200;
  // ctx.body = { 'events': results };
  ctx.body = { calendars: results };
}


async function getCalendarEventById(ctx) {
  const id = ctx.params.id;
  const result = await Calendar.query()
    .select("*")
    .findById(id);
  console.log(result);
  ctx.status = 200;
  ctx.body = result ? result : {};
}
async function saveNewCalendarEvent(ctx) {
  const { calendar } = ctx.request.body;

  try {
    let newCalendar = new CalendarData();
    newCalendar.title = calendar.title;
    newCalendar.isAllDay = calendar.isAllDay;
    newCalendar.start = calendar.start;
    newCalendar.end = calendar.end;
    newCalendar.category = calendar.category;
    newCalendar.dueDateClass = calendar.dueDateClass;
    newCalendar.color = calendar.color;
    newCalendar.bgColor = calendar.bgColor;
    newCalendar.dragBgColor = calendar.dragBgColor;
    newCalendar.borderColor = calendar.borderColor;
    newCalendar.location = calendar.location;
    newCalendar.calendarId = calendar.calendarId;
    newCalendar.createdAt = new Date();
    newCalendar.updatedAt = new Date();
    log.info(newCalendar);

    const results = await Calendar.query().insert(newCalendar);

    ctx.status = 201;
    ctx.body = results;

  } catch (e) {
    log.info("Email verification already requested");
    if (e.statusCode) {
      ctx.throw(e.statusCode, e, { errors: [e.message] });
    } else { ctx.throw(400, e, { errors: [e.message] }); }
    throw e;
  }
}


module.exports = {
  saveNewCalendarEvent,
  getCalendarEvents,
  getCalendarEventById,
};
