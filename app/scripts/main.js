'use strict';
(function(_, moment) {
	$(document).ready(function() {

		var end, start = moment().startOf('week');
		var events = [];

		_.times(7, function() {
			_.times(287, function() {
				end = moment(start).add(5,'minutes');
				events.push({
					title: 'Event',
					start: start,
					end: end
				});
				start = moment(end);
			});
			start.add(1,'days');
			start.startOf('day');
		});

		$('#calendar').fullCalendar({
	    	defaultView: 'agendaWeek',
	    	slotDuration: '00:05:00',
	    	allDayDefault: false,
	    	editable: true,
	    	events: events
	    });
	});
})(window._, window.moment);