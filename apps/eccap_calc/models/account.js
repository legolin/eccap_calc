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
  personal_page: SC.Record.toOne('EccapCalc.Personal', {
    inverse: 'account',
    isMaster: YES,
  }),
  options: SC.Record.toMany('EccapCalc.Option', {
    inverse: 'account',
    isMaster: YES,
  }),
  assetsLedger: SC.Record.toOne('EccapCalc.Ledger', {
    inverse: 'account',
    isMaster: YES,
  }),
  incomeLedger: SC.Record.toOne('EccapCalc.Ledger', {
    inverse: 'account',
    isMaster: YES,
  }),
  expensesLedger: SC.Record.toOne('EccapCalc.Ledger', {
    inverse: 'account',
    isMaster: YES,
  }),
  ror: SC.Record.attr(SC.T_NUMBER), // rate of return on investments, as a percentage, 0..100
  inflation: SC.Record.attr(SC.T_NUMBER),// 0..100
}) ;

EccapCalc.Account = EccapCalc.store.dataSource.instanceOf(SC.FixturesDataSource)
  ? EccapCalc.Account_.extend({
    options: function() {
      var q = SC.Query.local(EccapCalc.Option, {
        conditions: 'account = {account}', 
        account: this,
      });
      return this.get('store').find(q);
     }.property().cacheable() 
  })
  : EccapCalc.Account_.extend();
