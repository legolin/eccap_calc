// ==========================================================================
// Project:   EccapCalc.pageController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  Switch pages.

  @extends SC.Object
*/
EccapCalc.pageController = SC.Object.create(
/** @scope EccapCalc.pageController.prototype */ {
  nowShowing: 'personalPage',

  showPersonalPage: function() {
    var page = EccapCalc.store.find(EccapCalc.PersonalPage, 'personal'); 
    EccapCalc.pageController.set('content', page);
    this.set('nowShowing', 'personalPage');
  },

  showFacilityPage1: function() {
    var page = EccapCalc.store.find(EccapCalc.FacilityPage, 'facility-1'); 
    EccapCalc.pageController.set('content', page);
    EccapCalc.initialFacilityCostsController.set('content', EccapCalc.findLedgerEntries('facility-1-initial'));
    EccapCalc.monthlyFacilityCostsController.set('content', EccapCalc.findLedgerEntries('facility-1-monthly'));
    this.set('nowShowing', 'facilityPage');
  },

  showFacilityPage2: function() {
    var page = EccapCalc.store.find(EccapCalc.FacilityPage, 'facility-2'); 
    EccapCalc.pageController.set('content', page);
    EccapCalc.initialFacilityCostsController.set('content', EccapCalc.findLedgerEntries('facility-2-initial'));
    EccapCalc.monthlyFacilityCostsController.set('content', EccapCalc.findLedgerEntries('facility-2-monthly'));
    this.set('nowShowing', 'facilityPage');
  },
}) ;
