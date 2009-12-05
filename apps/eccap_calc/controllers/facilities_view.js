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
    var page = EccapCalc.facilitiesViewController.selection().firstObject();
    var ledgers = page.get('ledgers');

    // Assume that there are exactly two ledgers for each page -
    // the first is the fixed-cost ledger, followed by monthly costs.
    var initial_cost_ledger = ledgers.objectAt(0);
    EccapCalc.initialFacilityCostsController.set('content', initial_cost_ledger.get('entries'));
    EccapCalc.initialFacilityCostsController.ledger_id = initial_costs_ledger.get('id');

    var recurring_cost_ledger = ledgers.objectAt(1);
    EccapCalc.recurringFacilityCostsController.set('content', recurring_cost_ledger.get('entries'));
    EccapCalc.recurringFacilityCostsController.ledger_id = recurring_costs_ledger.get('id');

    EccapCalc.pageController.set('nowShowing', page.get('id'));
  },


}) ;
