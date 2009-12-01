// ==========================================================================
// Project:   EccapCalc.Page
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  A page contains one or more ledgers to be displayed together.

  @extends SC.Record
  @version 0.1
*/
EccapCalc.Page = SC.Record.extend(
/** @scope EccapCalc.Page.prototype */ {

  ledgers: SC.Record.toMany('EccapCalc.Ledger', {
    inverse: 'page',
    isMaster: YES,
  }),
});

EccapCalc.PersonalPage = EccapCalc.Page.extend({
  title: SC.Record.attr(SC.T_STRING, {
    defaultValue: 'Personal',
    isEditable: NO,
  }),
  account: SC.Record.toOne('EccapCalc.Account', {
    inverse: 'personal_page',
    isMaster: NO,
  }),
});

EccapCalc.FacilityPage = EccapCalc.Page.extend({
  title: SC.Record.attr(SC.T_STRING, {
    defaultValue: 'Facility',
    isEditable: YES,
    isRequired: YES,
  }),
  account: SC.Record.toOne('EccapCalc.Account', {
    inverse: 'facility_pages',
    isMaster: NO,
  }),
});
