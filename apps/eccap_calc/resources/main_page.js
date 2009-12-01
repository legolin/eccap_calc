// ==========================================================================
// Project:   EccapCalc - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

EccapCalc.assetsLedgerController = EccapCalc.ledgerController('mainPane.assetsView', 'assets');
EccapCalc.incomeLedgerController = EccapCalc.ledgerController('mainPane.incomeView', 'income');
EccapCalc.expensesLedgerController = EccapCalc.ledgerController('mainPane.expensesView', 'expenses');

// This page describes the main user interface for your application.  
EccapCalc.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'assetsView incomeView expensesView'.w(),
    assetsView: EccapCalc.LedgerView(100, 100, 400, 200, 'Liquid Assets', 'EccapCalc.assetsLedgerController'),
    incomeView: EccapCalc.LedgerView(100, 350, 400, 200, 'Monthly Income', 'EccapCalc.incomeLedgerController'),
    expensesView: EccapCalc.LedgerView(100, 600, 400, 200, 'Monthly Expenses', 'EccapCalc.expensesLedgerController'),
  }),

});
