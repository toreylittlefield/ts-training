import { RaccoonMeadowsVolunteers, RaccoonMeadowsActivity, raccoonMeadowsVolunteers } from './raccoon-meadows-log';

import { WolfPointVolunteers, WolfPointActivity, wolfPointVolunteers } from './wolf-point-log';

type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

function combineVolunteers(volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]) {
  return volunteers.map((volunteer) => {
    let { id } = volunteer;
    if (typeof id === 'string') {
      id = parseInt(id, 10);
    }
    return {
      id,
      name: volunteer.name,
      activities: volunteer.activities,
    };
  });
}

function isVerified(verified: string | boolean) {
  if (typeof verified === 'string') {
    return verified === 'Yes';
  }
  return verified === true;
}

function getHours(activity: CombinedActivity) {
  if ('hours' in activity) return activity.hours;
  if ('time' in activity) return activity.time;
}

function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map((volunteer) => {
    let hours = 0;

    volunteer.activities.forEach((activity) => {
      if (isVerified(activity.verified)) {
        hours += getHours(activity);
      }
    });

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}

const combinedVolunteers = combineVolunteers([...wolfPointVolunteers, ...raccoonMeadowsVolunteers]);

console.log(combineVolunteers);

const result = calculateHours(combinedVolunteers);
