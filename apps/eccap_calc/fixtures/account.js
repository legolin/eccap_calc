// ==========================================================================
// Project:   EccapCalc.Account Fixtures
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

sc_require('models/account');

EccapCalc.Account.FIXTURES = [{
    guid: 'account-1',
    auth_id: 'xyz',
    email: 'foo@bar.com',
    zipcode: '12345',
    personal_page: 'personal',
    assetsLedger: 'assets',
    incomeLedger: 'income',
    expensesLedger: 'expenses',
    ror: '5',
    inflation: '3',
  }
];
