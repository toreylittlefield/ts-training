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

const searchEvents = (options: SearchEventsOptions) => {};
