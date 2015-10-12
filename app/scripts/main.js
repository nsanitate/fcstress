'use strict';

$(document).ready(function() {

	var cal = $('#calendar').fullCalendar({
    	defaultView: 'agendaWeek',
    	slotDuration: '00:10:00',
    	allDayDefault: false,
    	editable: true
    });

	cal.fullCalendar('select', new Date('2015/05/21 07:00:00'));
	cal.fullCalendar('select', new Date('2015/05/21 12:00:00'));
});