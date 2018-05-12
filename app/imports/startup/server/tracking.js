import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Tracking } from '../../api/tracking/tracking.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.subject} `);
  Tracking.insert(data);
}

/** Initialize the collection if empty. */
if (Tracking.find().count() === 0) {
  if (Meteor.settings.defaultTracking) {
    console.log('Creating default data.');
    Meteor.settings.defaultTracking.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Tracking', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Tracking.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('TrackAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Tracking.find();
  }
  return this.ready();
});
