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
EccapCalc.Account_ = SC.Record.extend(
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
  option_pages: SC.Record.toMany('EccapCalc.OptionPage', {
    inverse: 'account',
    isMaster: YES,
  }),
}) ;

EccapCalc.Account = EccapCalc.store.dataSource.instanceOf(SC.FixturesDataSource)
  ? EccapCalc.Account_.extend({
    option_pages: function() {
      var q = SC.Query.local(EccapCalc.OptionPage, {
        conditions: 'account = {account}', 
        account: this,
      });
      return this.get('store').find(q);
     }.property().cacheable() 
  })
  : EccapCalc.Account_.extend();
