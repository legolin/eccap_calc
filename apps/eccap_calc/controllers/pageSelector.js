// ==========================================================================
// Project:   EccapCalc.pageSelectorController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  Controller for option pages.
  Content type is Eccap.OptionPage.

  @extends SC.ArrayController
*/
EccapCalc.pageSelectorController = SC.ArrayController.create(
  SC.CollectionViewDelegate,

  /** @scope EccapCalc.pageSelectorController.prototype */ {

    allowsMultipleSelection: NO,
    isEditable: YES,

    // create new Option and add it to the list
    add_page: function() {
      var account = EccapCalc.pageController.get('account');
      var page = EccapCalc.store.createRecord(EccapCalc.OptionPage, {
        account: account.get('id'), // value is id for inverse relation 
        initialCostsLedger: EccapCalc.store.createRecord(EccapCalc.Ledger, {
          recurring: NO,
          credit: NO,
        }),
        recurringCostsLedger: EccapCalc.store.createRecord(EccapCalc.Ledger, {
          recurring: YES,
          credit: NO,
        }),
      });
      this.selectObject(page); 
      EccapCalc.pageController.showOptionPage();
      return YES ;
  },
});
