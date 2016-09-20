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

  var ApiClient = require('../ApiClient'),
      JobIgesOutputPayload = require('./JobIgesOutputPayload'),
      JobObjOutputPayload = require('./JobObjOutputPayload'),
      JobObjOutputPayloadAdvanced = require('./JobObjOutputPayloadAdvanced'),
      JobStepOutputPayload = require('./JobStepOutputPayload'),
      JobStlOutputPayload = require('./JobStlOutputPayload'),
      JobSvfOutputPayload = require('./JobSvfOutputPayload'),
      JobThumbnailOutputPayload = require('./JobThumbnailOutputPayload');



  /**
   * The JobPayloadItem model module.
   * @module model/JobPayloadItem
   * @version 0.1.7
   */

   /**
    * Constructs a <code>JobPayloadItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobPayloadItem} obj Optional instance to populate.
    * @return {module:model/JobPayloadItem} The populated <code>JobPayloadItem</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
        JobSvfOutputPayload.constructFromObject(data, obj);
        JobThumbnailOutputPayload.constructFromObject(data, obj);
        JobStlOutputPayload.constructFromObject(data, obj);
        JobStepOutputPayload.constructFromObject(data, obj);
        JobIgesOutputPayload.constructFromObject(data, obj);
        JobObjOutputPayload.constructFromObject(data, obj);
    }
    return obj;
  };

  /**
   * Constructs a new <code>JobPayloadItem</code>.
   * Output description object, depends of the type
   * @alias module:model/JobPayloadItem
   * @class
   * @implements module:model/JobSvfOutputPayload
   * @implements module:model/JobThumbnailOutputPayload
   * @implements module:model/JobStlOutputPayload
   * @implements module:model/JobStepOutputPayload
   * @implements module:model/JobIgesOutputPayload
   * @implements module:model/JobObjOutputPayload
   * @param type {module:model/JobObjOutputPayload.TypeEnum} The requested output types. Possible values include `svf`, `thumbnai`, `stl`, `step`, `iges`, or `obj`. For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobPayloadItem} obj Optional instance to populate.
   */
  var exports = function(type, theData, obj) {
    var _this = this;

    JobSvfOutputPayload.call(_this, type);
    JobThumbnailOutputPayload.call(_this, type);
    JobStlOutputPayload.call(_this, type);
    JobStepOutputPayload.call(_this, type);
    JobIgesOutputPayload.call(_this, type);
    JobObjOutputPayload.call(_this, type);

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>JobPayloadItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobPayloadItem} obj Optional instance to populate.
   * @return {module:model/JobPayloadItem} The populated <code>JobPayloadItem</code> instance.
   */
  exports.constructFromObject = constructFromObject;


  // Implement JobSvfOutputPayload interface:
  /**
   * The requested output types. Possible values include `svf`, `thumbnai`, `stl`, `step`, `iges`, or `obj`. For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
   * @member {module:model/JobSvfOutputPayload.TypeEnum} type
   */
exports.prototype['type'] = undefined;

  /**
   * @member {Array.<module:model/JobSvfOutputPayload.ViewsEnum>} views
   */
exports.prototype['views'] = undefined;

  // Implement JobThumbnailOutputPayload interface:
  /**
   * The requested output types. Possible values include `svf`, `thumbnai`, `stl`, `step`, `iges`, or `obj`. For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
   * @member {module:model/JobThumbnailOutputPayload.TypeEnum} type
   */
exports.prototype['type'] = undefined;

  /**
   * @member {module:model/JobThumbnailOutputPayloadAdvanced} advanced
   */
exports.prototype['advanced'] = undefined;

  // Implement JobStlOutputPayload interface:
  /**
   * The requested output types. Possible values include `svf`, `thumbnai`, `stl`, `step`, `iges`, or `obj`. For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
   * @member {module:model/JobStlOutputPayload.TypeEnum} type
   */
exports.prototype['type'] = undefined;

  /**
   * @member {module:model/JobStlOutputPayloadAdvanced} advanced
   */
exports.prototype['advanced'] = undefined;

  // Implement JobStepOutputPayload interface:
  /**
   * The requested output types. Possible values include `svf`, `thumbnai`, `stl`, `step`, `iges`, or `obj`. For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
   * @member {module:model/JobStepOutputPayload.TypeEnum} type
   */
exports.prototype['type'] = undefined;

  /**
   * @member {module:model/JobStepOutputPayloadAdvanced} advanced
   */
exports.prototype['advanced'] = undefined;

  // Implement JobIgesOutputPayload interface:
  /**
   * The requested output types. Possible values include `svf`, `thumbnai`, `stl`, `step`, `iges`, or `obj`. For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
   * @member {module:model/JobIgesOutputPayload.TypeEnum} type
   */
exports.prototype['type'] = undefined;

  /**
   * @member {module:model/JobIgesOutputPayloadAdvanced} advanced
   */
exports.prototype['advanced'] = undefined;

  // Implement JobObjOutputPayload interface:
  /**
   * The requested output types. Possible values include `svf`, `thumbnai`, `stl`, `step`, `iges`, or `obj`. For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
   * @member {module:model/JobObjOutputPayload.TypeEnum} type
   */
exports.prototype['type'] = undefined;

  /**
   * @member {module:model/JobObjOutputPayloadAdvanced} advanced
   */
exports.prototype['advanced'] = undefined;



  return exports;
}());


