

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('calendar').del();
  const calendarEvents = [
    // {
    //   'id': '0488379f-4502-5f60-9005-cad17ab9bd3f',
    //   'title': 'stored data',
    //   'isAllDay': false,
    //   'start': {
    //     '_date': '2022-02-08T16:30:00.000Z'
    //   },
    //   'end': {
    //     '_date': '2022-02-08T17:30:00.000Z'
    //   },
    //   'category': 'time',
    //   'dueDateClass': '',
    //   'color': '#000000',
    //   'bgColor': '#56983F',
    //   'dragBgColor': '#56983F',
    //   'borderColor': '#56983F',
    //   'location': 'home office',
    //   'calendarId': '3'
    // },
    {
      id: '1',
      calendarId: '1',
      title: 'schedule',
      category: 'time',
      dueDateClass: '',
      start: '2022-02-22T22:30:00+09:00',
      end: '2022-02-24T02:30:00+09:00',
    },
    {
      id: '2',
      calendarId: '1',
      title: 'second schedule',
      category: 'time',
      dueDateClass: '',
      start: '2022-02-24T17:30:00+09:00',
      end: '2022-02-26T17:30:00+09:00',
      isReadOnly: true,
    },
    {
      id: '3',
      calendarId: '2',
      title: 'third schedule',
      category: 'time',
      dueDateClass: '',
      start: '2022-02-24T17:30:00+09:00',
      end: '2022-02-26T17:30:00+09:00',
      isReadOnly: true,
    },
  ];

  return knex('calendar').insert(calendarEvents);
};