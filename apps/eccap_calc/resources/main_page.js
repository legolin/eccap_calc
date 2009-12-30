// ==========================================================================
// Project:   EccapCalc - mainPage
// Copyright: ©2009 Westside Consulting LLC, Ann Arbor, MI, USA
// ==========================================================================
/*globals EccapCalc */

EccapCalc.LEFT_MARGIN_SCROLL = 200;
EccapCalc.LEFT_MARGIN_LEDGERS = 50;

// This page describes the main user interface for your application.  
EccapCalc.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: [
      SC.ButtonView.design({
        layout: { left: 20, width: 140, top: 100, height: 24 },
        title: 'Personal',
        target: 'EccapCalc.currentViewController',
        action: 'showPersonal',
      }),
      SC.LabelView.design({
        layout: { left: 20, top: 140, width: 175, height: 18},
        displayValue: 'Inflation Rate (%)',
      }),
      SC.TextFieldView.design({
        layout: { left: 20, top: 158, width: 25, height: 18},
        valueBinding: 'EccapCalc.currentViewController.account.inflation',
      }),
      SC.LabelView.design({
        layout: { left: 20, top: 185, width: 175, height: 18},
        displayValue: 'Return on Investments (%)',
      }),
      SC.TextFieldView.design({
        layout: { left: 20, top: 203, width: 25, height: 18},
        valueBinding: 'EccapCalc.currentViewController.account.ror',
      }),
      SC.ButtonView.design({
        layout: { left: 20, top: 235, width: 100, height: 25},
        title: 'New Option',
        target: 'EccapCalc.optionController',
        action: "add_option"
      }),
      'options',

      SC.ContainerView.design({
        layout: { left: EccapCalc.LEFT_MARGIN_SCROLL},
        nowShowingBinding: 'EccapCalc.currentViewController.nowShowing',
      }),
    ],
    options: SC.ListView.design({
      layout: { left: 20, width: 140, top: 260, height: 0 },
      contentBinding: 'EccapCalc.optionController.arrangedObjects',
      selectionBinding: 'EccapCalc.optionController.selection',
      contentValueKey: 'title',
      target: 'EccapCalc.currentViewController', 
      action: 'showOption',
      actOnSelect: YES,
      canEditContent: YES,
      canDeleteContent: YES,
    }),
  }),
  personalPage: SC.View.design({
    childViews: 'labelView scrollView'.w(),

    labelView: SC.LabelView.design({
      layout: { top: 20, left: EccapCalc.LEFT_MARGIN_LEDGERS, height: 50},
      displayValue: 'Personal',
      controlSize: SC.HUGE_CONTROL_SIZE,
    }),
    scrollView: SC.ScrollView.design({
      layout: { top: 50, },
      contentView: SC.View.design({
        layout: { left: EccapCalc.LEFT_MARGIN_LEDGERS},
        childViews: 'assetsView incomeView expensesView resultsView'.w(),
        assetsView: EccapCalc.LedgerView(0, 50,
                      'EccapCalc.assetsLedgerController', 'Liquid Assets'),
        incomeView: EccapCalc.LedgerView(0, 300, 
                      'EccapCalc.incomeLedgerController', 'Monthly Income'),
        expensesView: EccapCalc.LedgerView(0, 550, 
                      'EccapCalc.expensesLedgerController', 'Monthly Expenses'),
        resultsView: EccapCalc.ResultView(0, 800),
      }),
    }),
  }),
  optionPage: SC.View.design({
    childViews: 'labelView deleteButton scrollView'.w(),
    labelView: SC.LabelView.design({
      layout: { left: EccapCalc.LEFT_MARGIN_LEDGERS, top: 20, width:400, height: 50},
      valueBinding: 'EccapCalc.currentViewController.title',
      controlSize: SC.HUGE_CONTROL_SIZE,
    }),
    deleteButton: SC.ButtonView.design({
      layout: { right: 50, width: 100, top: 20, height: 24 },
      title: 'Delete Page',
      target: 'EccapCalc.optionController',
      action: 'delete_option',
    }),
    scrollView: SC.ScrollView.design({
      layout: { top: 50, },
      contentView: SC.View.design({
        layout: { left: EccapCalc.LEFT_MARGIN_LEDGERS},
        childViews: 'ledger1 ledger2 resultsView'.w(),
        ledger1: EccapCalc.LedgerView(0, 50, 'EccapCalc.initialOptionCostsController', 'Initial Costs'),
        ledger2: EccapCalc.LedgerView(0, 300, 'EccapCalc.recurringOptionCostsController', 'Monthly Costs'),
        resultsView: EccapCalc.ResultView(0, 550),
      }),
    }),
  }),
});
