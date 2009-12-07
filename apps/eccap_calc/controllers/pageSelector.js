// ==========================================================================
// Project:   EccapCalc.pageSelectorController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  Controller for facility pages.
  Content type is Eccap.FacilityPage.

  @extends SC.ArrayController
*/
EccapCalc.pageSelectorController = SC.ArrayController.create(
/** @scope EccapCalc.pageSelectorController.prototype */ {

  allowsMultipleSelection: NO,

  showFacilityPage: function() {
    var page = this.selection().firstObject();

    EccapCalc.initialFacilityCostsController.set('ledger_id', 'initialCostsLedger');
    EccapCalc.initialFacilityCostsController.set('content', page.getPath('initialCostsLedger.entries'));

    EccapCalc.recurringFacilityCostsController.set('ledger_id', 'recurringCostsLedger');
    EccapCalc.recurringFacilityCostsController.set('content', page.getPath('recurringCostsLedger.entries'));

    EccapCalc.pageController.set('title', page.get('title'));
    EccapCalc.pageController.set('nowShowing', 'facilityPage');
  },
}) ;
