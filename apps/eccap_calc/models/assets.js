// ==========================================================================
// Project:   EccapCalc.Assets
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals EccapCalc */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
EccapCalc.Asset = SC.Record.extend(
/** @scope EccapCalc.Assets.prototype */ {

    description: SC.Record.attr(String),
    value: SC.Record.attr(Number),
}) ;
