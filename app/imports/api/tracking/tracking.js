import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Tracking = new Mongo.Collection('Tracking');

/** Create a schema to constrain the structure of documents associated with this collection. */
const TrackingSchema = new SimpleSchema({
  subject: String,
  compare: String,
  location: String,
  avgdistance: Number,
  tickstart: Number,
  tickend: Number,
  duration: Number,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Tracking.attachSchema(TrackingSchema);

/** Make the collection and schema available to other code. */
export { Tracking, TrackingSchema };
