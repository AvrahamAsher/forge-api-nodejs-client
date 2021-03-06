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
   * The UploadFile model module.
   * @module model/UploadFile
   * @version 0.1.5
   */

   /**
    * Constructs a <code>UploadFile</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UploadFile} obj Optional instance to populate.
    * @return {module:model/UploadFile} The populated <code>UploadFile</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('bucketKey')) {
        obj['bucketKey'] = ApiClient.convertToType(data['bucketKey'], 'String');
      }
      if (data.hasOwnProperty('objectId')) {
        obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
      }
      if (data.hasOwnProperty('objectKey')) {
        obj['objectKey'] = ApiClient.convertToType(data['objectKey'], 'String');
      }
      if (data.hasOwnProperty('sha1')) {
        obj['sha1'] = ApiClient.convertToType(data['sha1'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
      if (data.hasOwnProperty('contentType')) {
        obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>UploadFile</code>.
   * @alias module:model/UploadFile
   * @class
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/UploadFile} obj Optional instance to populate.
   */
  var exports = function(theData, obj) {
    var _this = this;









    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>UploadFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UploadFile} obj Optional instance to populate.
   * @return {module:model/UploadFile} The populated <code>UploadFile</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * The key of the Bucket
   * @member {String} bucketKey
   */
  exports.prototype['bucketKey'] = undefined;
  /**
   * The object id
   * @member {String} objectId
   */
  exports.prototype['objectId'] = undefined;
  /**
   * The key for uploaded object
   * @member {String} objectKey
   */
  exports.prototype['objectKey'] = undefined;
  /**
   * The hash value for uploaded object (fingerprint)
   * @member {String} sha1
   */
  exports.prototype['sha1'] = undefined;
  /**
   * The size (bytes) of the uploaded object
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;
  /**
   * The content-type of uploaded object
   * @member {String} contentType
   */
  exports.prototype['contentType'] = undefined;
  /**
   * The location from which you can download the object (download URL)
   * @member {String} location
   */
  exports.prototype['location'] = undefined;



  return exports;
}());


