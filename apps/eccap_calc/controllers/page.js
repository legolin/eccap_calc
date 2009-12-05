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
  nowShowing: 'personalPage',

  showPersonalPage: function() {
    var page = EccapCalc.store.find(EccapCalc.PersonalPage, 'personal'); 
    EccapCalc.pageController.set('content', page);
    this.set('nowShowing', 'personalPage');
  },

  showFacilityPage: function(facility_id, initial_costs_ledger_id, monthly_costs_ledger_id) {
    var page = EccapCalc.store.find(EccapCalc.FacilityPage, facility_id); 
    EccapCalc.pageController.set('content', page);

    var initial_cost_entries = EccapCalc.findLedgerEntries(initial_costs_ledger_id);
    EccapCalc.initialFacilityCostsController.set('content', initial_cost_entries);
    EccapCalc.initialFacilityCostsController.ledger_id = initial_costs_ledger_id;

    var monthly_cost_entries = EccapCalc.findLedgerEntries(monthly_costs_ledger_id);
    EccapCalc.monthlyFacilityCostsController.set('content', monthly_cost_entries);
    EccapCalc.monthlyFacilityCostsController.ledger_id = monthly_costs_ledger_id;
  },

  showFacilityPage1: function() {
    this.showFacilityPage('facility-1', 'facility-1-initial', 'facility-1-monthly');
    this.set('nowShowing', 'facilityPage');
  },

  showFacilityPage2: function() {
    this.showFacilityPage('facility-2', 'facility-2-initial', 'facility-2-monthly');
    this.set('nowShowing', 'facilityPage');
  },

}) ;
