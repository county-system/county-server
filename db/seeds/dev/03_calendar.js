const Chance = require('chance');
const chance = new Chance();
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('calendar').del();
  const calendarEvents = [
    {
      'id': '0488379f-4502-5f60-9005-cad17ab9bd3f',
      'title': 'stored data',
      'is_all_day': false,
      'start': '2022-03-08T16:30:00.000Z',
      'end': '2022-03-08T17:30:00.000Z',
      'category': 'time',
      'due_date_class': '',
      'color': '#000000',
      'bg_color': '#56983F',
      'drag_bg_color': '#56983F',
      'border_color': '#56983F',
      'location': 'home office',
      'calendar_id': '3'
    },
    {
      'id': '1',
      'calendar_id': '1',
      'title': 'schedule',
      'category': 'time',
      'due_date_class': '',
      'start': '2022-03-22T22:30:00+09:00',
      'end': '2022-03-24T02:30:00+09:00',
    },
    {
      'id': '2',
      'calendar_id': '1',
      'title': 'second schedule',
      'category': 'time',
      'due_date_class': '',
      'start': '2022-03-24T17:30:00+09:00',
      'end': '2022-03-26T17:30:00+09:00',
      'is_read_only': true,
    },
    {
      'id': '3',
      'calendar_id': '2',
      'title': 'third schedule',
      'category': 'time',
      'due_date_class': '',
      'start': '2022-03-24T17:30:00+09:00',
      'end': '2022-03-26T17:30:00+09:00',
      'is_read_only': true,
    },
  ];

  // Inserts seed entries
  for (let i = 0; i < 30; i++) {
    calendarEvents.push({
      id: chance.guid(),
      calendar_id: chance.integer({ min: 1, max: 3 }),
      title: chance.sentence({ words: chance.integer({ min: 1, max: 5 }) }),
      category: chance.pickone(['time', 'event', 'task']),
      due_date_class: chance.pickone(['', 'due', 'overdue']),
      start: chance.date({ year: 2022, month: 3 + i % 2, day: chance.integer({ min: 1, max: 28 }) }),
      end: chance.date({ year: 2022, month: 3 + i % 2, day: chance.integer({ min: 1, max: 28 }) }),
      is_read_only: chance.bool(),
      created_at: new Date(),
      updated_at: new Date(),
      color: chance.color({ format: 'hex' }),
      bg_color: chance.color({ format: 'hex' }),
      drag_bg_color: chance.color({ format: 'hex' }),
      border_color: chance.color({ format: 'hex' }),
      is_all_day: chance.bool(),
      location: chance.address(),
    });
  }


  return knex('calendar').insert(calendarEvents);
};