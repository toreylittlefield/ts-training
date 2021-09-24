/**
 * This program must be able to search courses and study groups from a list,
 * enroll in them, and print a list of currently enrolled events.
 */

import courses from './courses';
import studyGroups from './studyGroups';

type Course = typeof courses[0];
type StudyGroup = typeof studyGroups[0];
type SearchEventsOptions = {
  query: string | number;
  eventType: 'courses' | 'groups';
};

const searchEvents = (options: SearchEventsOptions): (Course | StudyGroup)[] => {
  let events: (Course | StudyGroup)[];
  if (options.eventType === 'courses') events = courses;
  if (options.eventType === 'groups') events = studyGroups;

  const filteredEvents = events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === 'number') {
      return options.query === event.id;
    }
    if (typeof options.query === 'string') {
      return event.keywords.includes(options.query);
    }
  });
  console.log(filteredEvents);
  return filteredEvents;
};

searchEvents({ query: 2, eventType: 'groups' });
