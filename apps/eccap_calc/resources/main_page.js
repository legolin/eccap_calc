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
    assetsView: EccapCalc.LedgerView(100, 100, 400, 200, 'Liquid Assets', 'EccapCalc.assetsLedgerController'),
/*
    assetsView2: EccapCalc.LedgerView(100, 350, 400, 200, 'Liquid Assets2', 'EccapCalc.ledgerController'),
    assetsView3: EccapCalc.LedgerView(100, 600, 400, 200, 'Liquid Assets3', 'EccapCalc.ledgerController'),
*/
  }),

});
