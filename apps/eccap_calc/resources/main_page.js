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
    childViews: 'labelView assetsView incomeView expensesView'.w(),

    labelView: SC.LabelView.design({
      layout: { left: 100, top: 0, height: 50},
      displayValue: 'Personal',
      //fontWeight: SC.BOLD_WEIGHT,
      tagName: 'h1',
    }),
    assetsView: EccapCalc.LedgerView(100, 100, 'EccapCalc.assetsLedgerController'),
    incomeView: EccapCalc.LedgerView(100, 350, 'EccapCalc.incomeLedgerController'),
    expensesView: EccapCalc.LedgerView(100, 600, 'EccapCalc.expensesLedgerController'),
  }),
});
