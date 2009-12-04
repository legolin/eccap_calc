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
    this.set('nowShowing', 'personalPage');    
  },

  showFacilityPage: function() {
    this.set('nowShowing', 'facilityPage');    
  },
}) ;
