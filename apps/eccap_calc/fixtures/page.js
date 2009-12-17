// ==========================================================================
// Project:   EccapCalc.Page Fixtures
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

sc_require('models/page');

EccapCalc.PersonalPage.FIXTURES = [{
    guid: 'personal',
    account: 'account-1',
    assetsLedger: 'assets',
    incomeLedger: 'income',
    expensesLedger: 'expenses',
  },
];

EccapCalc.OptionPage.FIXTURES = [{
    guid: 'option-1',
    title: 'Option 1',
    account: 'account-1',
    initialCostsLedger: 'option-1-initial',
    recurringCostsLedger: 'option-1-recurring',
  }, {
    guid: 'option-2',
    title: 'Option 2',
    account: 'account-1',
    initialCostsLedger: 'option-2-initial',
    recurringCostsLedger: 'option-2-recurring',
  },
];
