// ==========================================================================
// Project:   EccapCalc.Account
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
EccapCalc.Account = SC.Record.extend(
/** @scope EccapCalc.Account.prototype */ {

  auth_id: SC.Record.attr(SC.T_STRING, {
    isRequired: YES,
    isEditable: NO,
  }), // authentication id
  email: SC.Record.attr(SC.T_STRING, {
    isRequired: YES,
    isEditable: NO,
  }),
  zipcode: SC.Record.attr(SC.T_STRING, {
    isRequired: NO,
    isEditable: YES,
  }),
  personal_page: SC.Record.toOne('EccapCalc.PersonalPage', {
    inverse: 'account',
    isMaster: YES,
  }),
  facility_pages: SC.Record.toMany('EccapCalc.FacilityPage', {
    inverse: 'account',
    isMaster: YES,
  }),
}) ;
