// ==========================================================================
// Project:   EccapCalc.LedgerEntry Fixtures
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

sc_require('models/ledger_entry');

EccapCalc.LedgerEntry.FIXTURES = [{
    guid: '1,',
    description: '401K',
    amount: '150000',
    ledger: 'assets',
  }, {
    guid: '2,',
    description: 'Home',
    amount: '400000',
    ledger: 'assets',
  }, {
    guid: '3,',
    description: 'Pension',
    amount: '1500',
    ledger: 'income',
  }, {
    guid: '4,',
    description: 'Social Security',
    amount: '1200',
    ledger: 'income',
  }, {
    guid: '5,',
    description: 'Home Insurance',
    amount: '2000',
    ledger: 'expenses',
  }, {
    guid: '6,',
    description: 'Property Taxes',
    amount: '750',
    ledger: 'expenses',
  }, {
    guid: '7,',
    description: 'Medical Insurance',
    amount: '800',
    ledger: 'expenses',
  }, {
    guid: '8,',
    description: 'Initial Deposit',
    amount: '5000',
    ledger: 'facility-1-initial',
  }, {
    guid: '9,',
    description: 'Rent',
    amount: '2000',
    ledger: 'facility-1-monthly',
  }, {
    guid: '10,',
    description: 'Meals',
    amount: '1500',
    ledger: 'facility-1-monthly',
  }, {
    guid: '11,',
    description: 'Initial Deposit',
    amount: '8000',
    ledger: 'facility-2-initial',
  }, {
    guid: '12,',
    description: 'Rent',
    amount: '2500',
    ledger: 'facility-2-monthly',
  }, {
    guid: '13,',
    description: 'Meals',
    amount: '1800',
    ledger: 'facility-2-monthly',
  },

];
