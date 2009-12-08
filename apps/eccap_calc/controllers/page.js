// ==========================================================================
// Project:   EccapCalc.pageController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  Switch pages.

  @extends SC.Object
*/
EccapCalc.pageController = SC.ObjectController.create(
/** @scope EccapCalc.pageController.prototype */ {
  account: null,
  nowShowing: null,

  content: function() {
    switch (this.nowShowing) {
      case 'personalPage':
        return this.account.get('personal_page');
      case 'facilityPage':
        return EccapCalc.pageSelectorController.selection().firstObject();
    };
  }.property('account', 'nowShowing').cacheable(),

  showPersonalPage: function() {
    this.set('nowShowing', 'personalPage');
    EccapCalc.pageSelectorController.set('selection', null);
  },

  showFacilityPage: function() {
    this.set('nowShowing', 'facilityPage');
    this.notifyPropertyChange('content'); // Facility selection may have changed.

    EccapCalc.initialFacilityCostsController.set(
      'ledger', this.getPath('content.initialCostsLedger'));
    EccapCalc.recurringFacilityCostsController.set(
      'ledger', this.getPath('content.recurringCostsLedger'));

    EccapCalc.initialFacilityCostsController.updateSelectionAfterContentChange();
    EccapCalc.recurringFacilityCostsController.updateSelectionAfterContentChange();
  }
});
