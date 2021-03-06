/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. From visualizing data to 3D printing, take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient');



  /**
   * The InlineResponse200Items model module.
   * @module model/InlineResponse200Items
   * @version 0.1.5
   */

   /**
    * Constructs a <code>InlineResponse200Items</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse200Items} obj Optional instance to populate.
    * @return {module:model/InlineResponse200Items} The populated <code>InlineResponse200Items</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('bucketKey')) {
        obj['bucketKey'] = ApiClient.convertToType(data['bucketKey'], 'String');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Integer');
      }
      if (data.hasOwnProperty('policyKey')) {
        obj['policyKey'] = ApiClient.convertToType(data['policyKey'], 'String');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>InlineResponse200Items</code>.
   * @alias module:model/InlineResponse200Items
   * @class
   * @param bucketKey {String} Bucket key
   * @param createdDate {Integer} Timestamp in epoch time
   * @param policyKey {module:model/InlineResponse200Items.PolicyKeyEnum} Policy values: `transient`, `temporary` or `persistent` 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200Items} obj Optional instance to populate.
   */
  var exports = function(bucketKey, createdDate, policyKey, theData, obj) {
    var _this = this;

    _this['bucketKey'] = bucketKey;
    _this['createdDate'] = createdDate;
    _this['policyKey'] = policyKey;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>InlineResponse200Items</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200Items} obj Optional instance to populate.
   * @return {module:model/InlineResponse200Items} The populated <code>InlineResponse200Items</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * Bucket key
   * @member {String} bucketKey
   */
  exports.prototype['bucketKey'] = undefined;
  /**
   * Timestamp in epoch time
   * @member {Integer} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * Policy values: `transient`, `temporary` or `persistent` 
   * @member {module:model/InlineResponse200Items.PolicyKeyEnum} policyKey
   */
  exports.prototype['policyKey'] = undefined;


  /**
   * Allowed values for the <code>policyKey</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PolicyKeyEnum = {
    /**
     * value: "transient"
     * @const
     */
    "transient": "transient",
    /**
     * value: "temporary"
     * @const
     */
    "temporary": "temporary",
    /**
     * value: "persistent"
     * @const
     */
    "persistent": "persistent"  };


  return exports;
}());


