// ==========================================================================
// Project:   EccapCalc - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

EccapCalc.assetsLedgerController = EccapCalc.ledgerController('mainPane.assetsView', 'assets');
EccapCalc.incomeLedgerController = EccapCalc.ledgerController('mainPane.incomeView', 'income');
EccapCalc.expensesLedgerController = EccapCalc.ledgerController('mainPane.expensesView', 'expenses');
EccapCalc.LEFT_MARGIN = 200;

// This page describes the main user interface for your application.  
EccapCalc.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: [
      SC.ContainerView.design({
        //nowShowingBinding: 'SampleControls.containerController.nowShowing',
        nowShowing: 'personalPage',
      }),
    ],
  }),
  personalPage: SC.View.design({
    childViews: [
      SC.ScrollView.design({
        contentView: SC.View.design({
          childViews: 'labelView assetsView incomeView expensesView'.w(),

          labelView: SC.LabelView.design({
            layout: { left: EccapCalc.LEFT_MARGIN, top: 0, height: 50},
            displayValue: 'Personal',
            //fontWeight: SC.BOLD_WEIGHT,
            tagName: 'h1',
          }),
          assetsView: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN, 100, 'EccapCalc.assetsLedgerController'),
          incomeView: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN, 350, 'EccapCalc.incomeLedgerController'),
          expensesView: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN, 600, 'EccapCalc.expensesLedgerController'),
        }),
      }),
    ]
  }),
  facilityPage: SC.View.design({
    childViews: [
      SC.ScrollView.design({
        contentView: SC.View.design({
          childViews: 'labelView ledger1 ledger2'.w(),
          labelView: SC.LabelView.design({
            layout: { left: EccapCalc.LEFT_MARGIN, top: 0, height: 50},
            displayValue: 'Facility-1',
            //fontWeight: SC.BOLD_WEIGHT,
            tagName: 'h1',
          }),
          ledger1: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN, 100, 'EccapCalc.initialFacilityCostsController'),
          ledger2: EccapCalc.LedgerView(EccapCalc.LEFT_MARGIN, 350, 'EccapCalc.monthlyFacilityCostsController'),
        }),
      }),
    ],
  }),
});
