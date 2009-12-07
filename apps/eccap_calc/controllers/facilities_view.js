// ==========================================================================
// Project:   EccapCalc.facilitiesViewController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  Controller for facility pages.
  Content type is Eccap.FacilityPage.

  @extends SC.ArrayController
*/
EccapCalc.facilitiesViewController = SC.ArrayController.create(
/** @scope EccapCalc.facilitiesViewController.prototype */ {

  allowsMultipleSelection: NO,

  showFacilityPage: function() {
    var page = this.selection().firstObject();
    EccapCalc.initialFacilityCostsController.set('page', page);
    EccapCalc.initialFacilityCostsController.set('ledger_id', 'initialCostsLedger');
    EccapCalc.monthlyFacilityCostsController.set('page', page);
    EccapCalc.monthlyFacilityCostsController.set('ledger_id', 'monthlyCostsLedger');
    EccapCalc.pageController.set('nowShowing', page.get('id'));
  },
}) ;
