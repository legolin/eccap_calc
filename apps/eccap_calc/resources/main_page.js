// ==========================================================================
// Project:   EccapCalc - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

// This page describes the main user interface for your application.  
EccapCalc.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'assetsView'.w(),
    assetsView: EccapCalc.LedgerView(100, 100, 'Liquid Assets', 'EccapCalc.assetsController'),
/*
    zipcodeView: SC.TextFieldView.design({
      layout: { centerX: 0, centerY: 350, width: 100, height: 18 },
      //tagName: "input", 
      valueBinding: "EccapCalc.calcDataController.zipcode",
    }),
*/
  }),

});
