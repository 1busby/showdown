function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      query tournaments($skip: Int, $take: Int) {\n        tournaments(skip: $skip, take: $take ) {\n          id\n          name\n          createdOn\n          linkCode\n        }\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      query tournamentFromLinkCode($linkCode: String!) {\n        tournamentFromLinkCode(linkCode: $linkCode) {\n          id\n          name\n          contestantCount\n          linkCode\n          createdOn\n        }\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      query tournamentFromLinkCode($linkCode: String!) {\n        tournamentFromLinkCode(linkCode: $linkCode) {\n          id\n          name\n          contestantCount\n          linkCode\n          createdOn\n        }\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      mutation addTournament($name: String!, $contestantCount: Int!) {\n        addTournament(\n          newTournamentData: { name: $name, contestantCount: $contestantCount }\n        ) {\n          id\n          name\n          contestantCount\n          linkCode\n          createdOn\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _core_authentication_components_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/authentication/components/login/login.component.ngfactory */
    "./src/core/authentication/components/login/login.component.ngfactory.js");
    /* harmony import */


    var _core_authentication_components_register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../core/authentication/components/register/register.component.ngfactory */
    "./src/core/authentication/components/register/register.component.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/dialog/index.ngfactory */
    "./node_modules/@angular/material/dialog/index.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_app_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../shared/app.store */
    "./src/shared/app.store.ts");
    /* harmony import */


    var _core_authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../core/authentication/services/authentication.service */
    "./src/core/authentication/services/authentication.service.ts");
    /* harmony import */


    var _core_authentication_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../core/authentication/helpers/jwt.interceptor */
    "./src/core/authentication/helpers/jwt.interceptor.ts");
    /* harmony import */


    var _core_authentication_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../core/authentication/helpers/error.interceptor */
    "./src/core/authentication/helpers/error.interceptor.ts");
    /* harmony import */


    var _core_authentication_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../core/authentication/helpers/fake-backend */
    "./src/core/authentication/helpers/fake-backend.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _core_authentication_services_alert_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../core/authentication/services/alert.service */
    "./src/core/authentication/services/alert.service.ts");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "./node_modules/apollo-angular-link-http/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var _graphql_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./graphql.module */
    "./src/app/graphql.module.ts");
    /* harmony import */


    var _shared_data_tournament_tournament_data_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ../shared/data/tournament/tournament.data.service */
    "./src/shared/data/tournament/tournament.data.service.ts");
    /* harmony import */


    var _modules_bracket_data_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ../modules/bracket/data.service */
    "./src/modules/bracket/data.service.ts");
    /* harmony import */


    var _modules_bracket_bracket_handler_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ../modules/bracket/bracket-handler.service */
    "./src/modules/bracket/bracket-handler.service.ts");
    /* harmony import */


    var _core_app_routing_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ../core/app-routing.module */
    "./src/core/app-routing.module.ts");
    /* harmony import */


    var _core_authentication_components_login_login_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ../core/authentication/components/login/login.component */
    "./src/core/authentication/components/login/login.component.ts");
    /* harmony import */


    var _core_authentication_components_register_register_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ../core/authentication/components/register/register.component */
    "./src/core/authentication/components/register/register.component.ts");
    /* harmony import */


    var _core_authentication_auth_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ../core/authentication/auth.module */
    "./src/core/authentication/auth.module.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ../core/core.module */
    "./src/core/core.module.ts");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/fesm2015/tabs.js");
    /* harmony import */


    var _shared_material_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ../shared/material.module */
    "./src/shared/material.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/shared/shared.module.ts");
    /* harmony import */


    var _modules_bracket_bracket_module__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ../modules/bracket/bracket.module */
    "./src/modules/bracket/bracket.module.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _core_authentication_components_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LoginComponentNgFactory"], _core_authentication_components_register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RegisterComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["MatDialogContainerNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_12__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_app_store__WEBPACK_IMPORTED_MODULE_14__["AppStore"], _shared_app_store__WEBPACK_IMPORTED_MODULE_14__["AppStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"], _core_authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _shared_app_store__WEBPACK_IMPORTED_MODULE_14__["AppStore"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0, p1_0, p2_0) {
        return [p0_0, new _core_authentication_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__["JwtInterceptor"](p1_0), new _core_authentication_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"](p2_0), new _core_authentication_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_18__["FakeBackendInterceptor"]()];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _shared_app_store__WEBPACK_IMPORTED_MODULE_14__["AppStore"], _core_authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_19__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_19__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_19__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_19__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) {
        return [p0_0];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_authentication_services_alert_service__WEBPACK_IMPORTED_MODULE_21__["AlertService"], _core_authentication_services_alert_service__WEBPACK_IMPORTED_MODULE_21__["AlertService"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_27__["HttpLink"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_27__["HttpLink"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, apollo_angular__WEBPACK_IMPORTED_MODULE_28__["APOLLO_OPTIONS"], _graphql_module__WEBPACK_IMPORTED_MODULE_29__["createApollo"], [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_27__["HttpLink"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, apollo_angular__WEBPACK_IMPORTED_MODULE_28__["Apollo"], apollo_angular__WEBPACK_IMPORTED_MODULE_28__["Apollo"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, apollo_angular__WEBPACK_IMPORTED_MODULE_28__["APOLLO_OPTIONS"]], [2, apollo_angular__WEBPACK_IMPORTED_MODULE_28__["APOLLO_NAMED_OPTIONS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_data_tournament_tournament_data_service__WEBPACK_IMPORTED_MODULE_30__["TournamentDataService"], _shared_data_tournament_tournament_data_service__WEBPACK_IMPORTED_MODULE_30__["TournamentDataService"], [apollo_angular__WEBPACK_IMPORTED_MODULE_28__["Apollo"], _shared_app_store__WEBPACK_IMPORTED_MODULE_14__["AppStore"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _modules_bracket_data_service__WEBPACK_IMPORTED_MODULE_31__["DataService"], _modules_bracket_data_service__WEBPACK_IMPORTED_MODULE_31__["DataService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _modules_bracket_bracket_handler_service__WEBPACK_IMPORTED_MODULE_32__["BracketHandler"], _modules_bracket_bracket_handler_service__WEBPACK_IMPORTED_MODULE_32__["BracketHandler"], [_modules_bracket_data_service__WEBPACK_IMPORTED_MODULE_31__["DataService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_i"](p1_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_19__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"], "/", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTES"], function () {
        return [[{
          path: "",
          loadChildren: _core_app_routing_module__WEBPACK_IMPORTED_MODULE_33__["ɵ0"]
        }, {
          path: "login",
          component: _core_authentication_components_login_login_component__WEBPACK_IMPORTED_MODULE_34__["LoginComponent"]
        }, {
          path: "register",
          component: _core_authentication_components_register_register_component__WEBPACK_IMPORTED_MODULE_35__["RegisterComponent"]
        }, {
          path: "**",
          redirectTo: "/",
          pathMatch: "full"
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_app_routing_module__WEBPACK_IMPORTED_MODULE_33__["AppRoutingModule"], _core_app_routing_module__WEBPACK_IMPORTED_MODULE_33__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_authentication_auth_module__WEBPACK_IMPORTED_MODULE_36__["AuthModule"], _core_authentication_auth_module__WEBPACK_IMPORTED_MODULE_36__["AuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_37__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_37__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_43__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_43__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_45__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_45__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_46__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_46__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_47__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_47__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_48__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_48__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_50__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_50__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_51__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_51__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_52__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_52__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_material_module__WEBPACK_IMPORTED_MODULE_53__["MaterialModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_53__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_54__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_54__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_bracket_bracket_module__WEBPACK_IMPORTED_MODULE_55__["BracketModule"], _modules_bracket_bracket_module__WEBPACK_IMPORTED_MODULE_55__["BracketModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, apollo_angular__WEBPACK_IMPORTED_MODULE_28__["ApolloModule"], apollo_angular__WEBPACK_IMPORTED_MODULE_28__["ApolloModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_27__["HttpLinkModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_27__["HttpLinkModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _graphql_module__WEBPACK_IMPORTED_MODULE_29__["GraphQLModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_29__["GraphQLModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/graphql.module.ts":
  /*!***********************************!*\
    !*** ./src/app/graphql.module.ts ***!
    \***********************************/

  /*! exports provided: createApollo, GraphQLModule */

  /***/
  function srcAppGraphqlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createApollo", function () {
      return createApollo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
      return GraphQLModule;
    });
    /* harmony import */


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "./node_modules/apollo-angular-link-http/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-cache-inmemory */
    "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");

    var uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here

    function createApollo(httpLink) {
      return {
        link: httpLink.create({
          uri: uri
        }),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]()
      };
    }

    var GraphQLModule = function GraphQLModule() {
      _classCallCheck(this, GraphQLModule);
    };
    /***/

  },

  /***/
  "./src/core/app-routing.module.ts":
  /*!****************************************!*\
    !*** ./src/core/app-routing.module.ts ***!
    \****************************************/

  /*! exports provided: AppRoutingModule, ɵ0 */

  /***/
  function srcCoreAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication/components/login/login.component */
    "./src/core/authentication/components/login/login.component.ts");
    /* harmony import */


    var _authentication_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication/components/register/register.component */
    "./src/core/authentication/components/register/register.component.ts");

    var ɵ0 = function ɵ0() {
      return __webpack_require__.e(
      /*! import() | modules-home-home-module-ngfactory */
      "modules-home-home-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./../modules/home/home.module.ngfactory */
      "./src/modules/home/home.module.ngfactory.js")).then(function (m) {
        return m.HomeModuleNgFactory;
      });
    };

    var routes = [{
      path: '',
      loadChildren: ɵ0
    }, {
      path: 'login',
      component: _authentication_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }, {
      path: 'register',
      component: _authentication_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }, {
      path: '**',
      redirectTo: '/',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/core/authentication/auth.module.ts":
  /*!************************************************!*\
    !*** ./src/core/authentication/auth.module.ts ***!
    \************************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcCoreAuthenticationAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };
    /***/

  },

  /***/
  "./src/core/authentication/components/login/login.component.ngfactory.js":
  /*!*******************************************************************************!*\
    !*** ./src/core/authentication/components/login/login.component.ngfactory.js ***!
    \*******************************************************************************/

  /*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */

  /***/
  function srcCoreAuthenticationComponentsLoginLoginComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function () {
      return RenderType_LoginComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function () {
      return View_LoginComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function () {
      return View_LoginComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function () {
      return LoginComponentNgFactory;
    });
    /* harmony import */


    var _login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.component.scss.shim.ngstyle */
    "./src/core/authentication/components/login/login.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login.component */
    "./src/core/authentication/components/login/login.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/core/authentication/services/authentication.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/core/authentication/services/alert.service.ts");
    /* harmony import */


    var _shared_app_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/app.store */
    "./src/shared/app.store.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_LoginComponent = [_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_LoginComponent,
      data: {}
    });

    function View_LoginComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Username is required"]))], null, null);
    }

    function View_LoginComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.f.username.errors.required;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_LoginComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password is required"]))], null, null);
    }

    function View_LoginComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.f.password.errors.required;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_LoginComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner-border spinner-border-sm mr-1"]], null, null, null, null, null))], null, null);
    }

    function View_LoginComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 37, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("ngSubmit" === en) {
          var pd_2 = _co.onSubmit() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, {
        ngSubmit: "ngSubmit"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "label", [["for", "username"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Username"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 7, "input", [["class", "form-control"], ["formControlName", "username"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](12, {
        "is-invalid": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 7, "input", [["class", "form-control"], ["formControlName", "password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](25, {
        "is-invalid": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 3, "button", [["class", "btn btn-primary"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Login "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "a", [["class", "btn btn-link"], ["routerLink", "/register"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Register"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.loginForm;

        _ck(_v, 4, 0, currVal_7);

        var currVal_15 = "form-control";

        var currVal_16 = _ck(_v, 12, 0, _co.submitted && _co.f.username.errors);

        _ck(_v, 11, 0, currVal_15, currVal_16);

        var currVal_17 = "username";

        _ck(_v, 15, 0, currVal_17);

        var currVal_18 = _co.submitted && _co.f.username.errors;

        _ck(_v, 19, 0, currVal_18);

        var currVal_26 = "form-control";

        var currVal_27 = _ck(_v, 25, 0, _co.submitted && _co.f.password.errors);

        _ck(_v, 24, 0, currVal_26, currVal_27);

        var currVal_28 = "password";

        _ck(_v, 28, 0, currVal_28);

        var currVal_29 = _co.submitted && _co.f.password.errors;

        _ck(_v, 32, 0, currVal_29);

        var currVal_31 = _co.loading;

        _ck(_v, 36, 0, currVal_31);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassUntouched;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassTouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPristine;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassDirty;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassValid;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassInvalid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPending;

        _ck(_v, 10, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassUntouched;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassTouched;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPristine;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassDirty;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassValid;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassInvalid;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPending;

        _ck(_v, 23, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);

        var currVal_30 = _co.loading;

        _ck(_v, 34, 0, currVal_30);
      });
    }

    function View_LoginComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _shared_app_store__WEBPACK_IMPORTED_MODULE_8__["AppStore"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/core/authentication/components/login/login.component.scss.shim.ngstyle.js":
  /*!***************************************************************************************!*\
    !*** ./src/core/authentication/components/login/login.component.scss.shim.ngstyle.js ***!
    \***************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcCoreAuthenticationComponentsLoginLoginComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29yZS9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"];
    /***/
  },

  /***/
  "./src/core/authentication/components/login/login.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/core/authentication/components/login/login.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcCoreAuthenticationComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/core/authentication/services/index.ts");
    /* harmony import */


    var src_shared_app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/shared/app.store */
    "./src/shared/app.store.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(formBuilder, route, router, authenticationService, alertService, appStore) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.appStore = appStore;
        this.loading = false;
        this.submitted = false; // redirect to home if already logged in

        if (this.appStore.loggedInUser.value) {
          this.router.navigate(['/']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.submitted = true; // reset alerts on submit

          this.alertService.clear(); // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.authenticationService.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
          }, function (error) {
            _this.alertService.error(error);

            _this.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();
    /***/

  },

  /***/
  "./src/core/authentication/components/register/register.component.ngfactory.js":
  /*!*************************************************************************************!*\
    !*** ./src/core/authentication/components/register/register.component.ngfactory.js ***!
    \*************************************************************************************/

  /*! exports provided: RenderType_RegisterComponent, View_RegisterComponent_0, View_RegisterComponent_Host_0, RegisterComponentNgFactory */

  /***/
  function srcCoreAuthenticationComponentsRegisterRegisterComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_RegisterComponent", function () {
      return RenderType_RegisterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_RegisterComponent_0", function () {
      return View_RegisterComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_RegisterComponent_Host_0", function () {
      return View_RegisterComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponentNgFactory", function () {
      return RegisterComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.component */
    "./src/core/authentication/components/register/register.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/core/authentication/services/user.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/core/authentication/services/alert.service.ts");
    /* harmony import */


    var _shared_app_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/app.store */
    "./src/shared/app.store.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_RegisterComponent = [];

    var RenderType_RegisterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_RegisterComponent,
      data: {}
    });

    function View_RegisterComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["First Name is required"]))], null, null);
    }

    function View_RegisterComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.f.firstName.errors.required;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_RegisterComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Last Name is required"]))], null, null);
    }

    function View_RegisterComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.f.lastName.errors.required;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_RegisterComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Username is required"]))], null, null);
    }

    function View_RegisterComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.f.username.errors.required;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_RegisterComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Password is required"]))], null, null);
    }

    function View_RegisterComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Password must be at least 6 characters"]))], null, null);
    }

    function View_RegisterComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [["class", "invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.f.password.errors.required;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.f.password.errors.minlength;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_RegisterComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "span", [["class", "spinner-border spinner-border-sm mr-1"]], null, null, null, null, null))], null, null);
    }

    function View_RegisterComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Register"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 63, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("ngSubmit" === en) {
          var pd_2 = _co.onSubmit() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, {
        ngSubmit: "ngSubmit"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "label", [["for", "firstName"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["First Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 7, "input", [["class", "form-control"], ["formControlName", "firstName"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](12, {
        "is-invalid": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "label", [["for", "lastName"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Last Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 7, "input", [["class", "form-control"], ["formControlName", "lastName"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](25, {
        "is-invalid": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 1, "label", [["for", "username"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Username"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 7, "input", [["class", "form-control"], ["formControlName", "username"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](38, {
        "is-invalid": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 7, "input", [["class", "form-control"], ["formControlName", "password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 52)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 52).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 52)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 52)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](50, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](51, {
        "is-invalid": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](52, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](58, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 3, "button", [["class", "btn btn-primary"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](62, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Register "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 1, "a", [["class", "btn btn-link"], ["routerLink", "/login"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Cancel"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.registerForm;

        _ck(_v, 4, 0, currVal_7);

        var currVal_15 = "form-control";

        var currVal_16 = _ck(_v, 12, 0, _co.submitted && _co.f.firstName.errors);

        _ck(_v, 11, 0, currVal_15, currVal_16);

        var currVal_17 = "firstName";

        _ck(_v, 15, 0, currVal_17);

        var currVal_18 = _co.submitted && _co.f.firstName.errors;

        _ck(_v, 19, 0, currVal_18);

        var currVal_26 = "form-control";

        var currVal_27 = _ck(_v, 25, 0, _co.submitted && _co.f.lastName.errors);

        _ck(_v, 24, 0, currVal_26, currVal_27);

        var currVal_28 = "lastName";

        _ck(_v, 28, 0, currVal_28);

        var currVal_29 = _co.submitted && _co.f.lastName.errors;

        _ck(_v, 32, 0, currVal_29);

        var currVal_37 = "form-control";

        var currVal_38 = _ck(_v, 38, 0, _co.submitted && _co.f.username.errors);

        _ck(_v, 37, 0, currVal_37, currVal_38);

        var currVal_39 = "username";

        _ck(_v, 41, 0, currVal_39);

        var currVal_40 = _co.submitted && _co.f.username.errors;

        _ck(_v, 45, 0, currVal_40);

        var currVal_48 = "form-control";

        var currVal_49 = _ck(_v, 51, 0, _co.submitted && _co.f.password.errors);

        _ck(_v, 50, 0, currVal_48, currVal_49);

        var currVal_50 = "password";

        _ck(_v, 54, 0, currVal_50);

        var currVal_51 = _co.submitted && _co.f.password.errors;

        _ck(_v, 58, 0, currVal_51);

        var currVal_53 = _co.loading;

        _ck(_v, 62, 0, currVal_53);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassPending;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassUntouched;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassTouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassPristine;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassDirty;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassValid;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassInvalid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassPending;

        _ck(_v, 10, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassUntouched;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassTouched;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassPristine;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassDirty;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassValid;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassInvalid;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassPending;

        _ck(_v, 23, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassUntouched;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassTouched;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassPristine;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassDirty;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassValid;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassInvalid;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassPending;

        _ck(_v, 36, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36);

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).ngClassUntouched;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).ngClassTouched;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).ngClassPristine;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).ngClassDirty;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).ngClassValid;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).ngClassInvalid;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).ngClassPending;

        _ck(_v, 49, 0, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47);

        var currVal_52 = _co.loading;

        _ck(_v, 60, 0, currVal_52);
      });
    }

    function View_RegisterComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_RegisterComponent_0, RenderType_RegisterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _shared_app_store__WEBPACK_IMPORTED_MODULE_7__["AppStore"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var RegisterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], View_RegisterComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/core/authentication/components/register/register.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/core/authentication/components/register/register.component.ts ***!
    \***************************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcCoreAuthenticationComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/core/authentication/services/index.ts");
    /* harmony import */


    var src_shared_app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/shared/app.store */
    "./src/shared/app.store.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(formBuilder, router, userService, alertService, appStore) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.appStore = appStore;
        this.loading = false;
        this.submitted = false; // redirect to home if already logged in

        if (this.appStore.loggedInUser.value) {
          this.router.navigate(['/']);
        }
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.submitted = true; // reset alerts on submit

          this.alertService.clear(); // stop here if form is invalid

          if (this.registerForm.invalid) {
            return;
          }

          this.loading = true;
          this.userService.register(this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            _this2.alertService.success('Registration successful', true);

            _this2.router.navigate(['/login']);
          }, function (error) {
            _this2.alertService.error(error);

            _this2.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }]);

      return RegisterComponent;
    }();
    /***/

  },

  /***/
  "./src/core/authentication/helpers/error.interceptor.ts":
  /*!**************************************************************!*\
    !*** ./src/core/authentication/helpers/error.interceptor.ts ***!
    \**************************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcCoreAuthenticationHelpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/core/authentication/services/authentication.service.ts");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(authenticationService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this3 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
              // auto logout if 401 response returned from api
              _this3.authenticationService.logout();

              location.reload(true);
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();
    /***/

  },

  /***/
  "./src/core/authentication/helpers/fake-backend.ts":
  /*!*********************************************************!*\
    !*** ./src/core/authentication/helpers/fake-backend.ts ***!
    \*********************************************************/

  /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

  /***/
  function srcCoreAuthenticationHelpersFakeBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return FakeBackendInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return fakeBackendProvider;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // array in local storage for registered users


    var users = JSON.parse(localStorage.getItem('users')) || [];

    var FakeBackendInterceptor =
    /*#__PURE__*/
    function () {
      function FakeBackendInterceptor() {
        _classCallCheck(this, FakeBackendInterceptor);
      }

      _createClass(FakeBackendInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var url = request.url,
              method = request.method,
              headers = request.headers,
              body = request.body; // wrap in delayed observable to simulate server api call

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(handleRoute)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["dematerialize"])());

          function handleRoute() {
            switch (true) {
              case url.endsWith('/users/authenticate') && method === 'POST':
                return authenticate();

              case url.endsWith('/users/register') && method === 'POST':
                return register();

              case url.endsWith('/users') && method === 'GET':
                return getUsers();

              case url.match(/\/users\/\d+$/) && method === 'DELETE':
                return deleteUser();

              default:
                // pass through any requests not handled above
                return next.handle(request);
            }
          } // route functions


          function authenticate() {
            var username = body.username,
                password = body.password;
            var user = users.find(function (x) {
              return x.username === username && x.password === password;
            });
            if (!user) return error('Username or password is incorrect');
            return ok({
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              token: 'fake-jwt-token'
            });
          }

          function register() {
            var user = body;

            if (users.find(function (x) {
              return x.username === user.username;
            })) {
              return error('Username "' + user.username + '" is already taken');
            }

            user.id = users.length ? Math.max.apply(Math, _toConsumableArray(users.map(function (x) {
              return x.id;
            }))) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
          }

          function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
          }

          function deleteUser() {
            if (!isLoggedIn()) return unauthorized();
            users = users.filter(function (x) {
              return x.id !== idFromUrl();
            });
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
          } // helper functions


          function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
              status: 200,
              body: body
            }));
          }

          function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({
              error: {
                message: message
              }
            });
          }

          function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({
              status: 401,
              error: {
                message: 'Unauthorised'
              }
            });
          }

          function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
          }

          function idFromUrl() {
            var urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
          }
        }
      }]);

      return FakeBackendInterceptor;
    }();

    var fakeBackendProvider = {
      // use fake backend in place of Http service for backend-less development
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
      useClass: FakeBackendInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/core/authentication/helpers/jwt.interceptor.ts":
  /*!************************************************************!*\
    !*** ./src/core/authentication/helpers/jwt.interceptor.ts ***!
    \************************************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcCoreAuthenticationHelpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_shared_app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/shared/app.store */
    "./src/shared/app.store.ts");

    var JwtInterceptor =
    /*#__PURE__*/
    function () {
      function JwtInterceptor(appStore) {
        _classCallCheck(this, JwtInterceptor);

        this.appStore = appStore;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add authorization header with jwt token if available
          var currentUser = this.appStore.loggedInUser.value;

          if (currentUser && currentUser.token) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();
    /***/

  },

  /***/
  "./src/core/authentication/services/alert.service.ts":
  /*!***********************************************************!*\
    !*** ./src/core/authentication/services/alert.service.ts ***!
    \***********************************************************/

  /*! exports provided: AlertService */

  /***/
  function srcCoreAuthenticationServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService(router) {
        var _this4 = this;

        _classCallCheck(this, AlertService);

        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keepAfterRouteChange = false; // clear alert messages on route change unless 'keepAfterRouteChange' flag is true

        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
            if (_this4.keepAfterRouteChange) {
              // only keep for a single route change
              _this4.keepAfterRouteChange = false;
            } else {
              // clear alert message
              _this4.clear();
            }
          }
        });
      }

      _createClass(AlertService, [{
        key: "getAlert",
        value: function getAlert() {
          return this.subject.asObservable();
        }
      }, {
        key: "success",
        value: function success(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            type: 'success',
            text: message
          });
        }
      }, {
        key: "error",
        value: function error(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            type: 'error',
            text: message
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          // clear by calling subject.next() without parameters
          this.subject.next();
        }
      }]);

      return AlertService;
    }();

    AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function AlertService_Factory() {
        return new AlertService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      },
      token: AlertService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/core/authentication/services/authentication.service.ts":
  /*!********************************************************************!*\
    !*** ./src/core/authentication/services/authentication.service.ts ***!
    \********************************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcCoreAuthenticationServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_shared_app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/shared/app.store */
    "./src/shared/app.store.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http, appStore) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.appStore = appStore;
        this.appStore.loggedInUser.next(JSON.parse(localStorage.getItem('loggedInUser')));
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(username, password) {
          var _this5 = this;

          return this.http.post('http://localhost:4000'.concat("/users/authenticate"), {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('loggedInUser', JSON.stringify(user));

            _this5.appStore.loggedInUser.next(user);

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage and set current user to null
          localStorage.removeItem('loggedInUser');
          this.appStore.loggedInUser.next(null);
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      factory: function AuthenticationService_Factory() {
        return new AuthenticationService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_shared_app_store__WEBPACK_IMPORTED_MODULE_2__["AppStore"]));
      },
      token: AuthenticationService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/core/authentication/services/index.ts":
  /*!***************************************************!*\
    !*** ./src/core/authentication/services/index.ts ***!
    \***************************************************/

  /*! exports provided: AlertService, AuthenticationService, UserService */

  /***/
  function srcCoreAuthenticationServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./alert.service */
    "./src/core/authentication/services/alert.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"];
    });
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/core/authentication/services/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.service */
    "./src/core/authentication/services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"];
    });
    /***/

  },

  /***/
  "./src/core/authentication/services/user.service.ts":
  /*!**********************************************************!*\
    !*** ./src/core/authentication/services/user.service.ts ***!
    \**********************************************************/

  /*! exports provided: UserService */

  /***/
  function srcCoreAuthenticationServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get('http://localhost:4000'.concat("/users"));
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post('http://localhost:4000'.concat("/users/register"), user);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete('http://localhost:4000'.concat("/users/", id));
        }
      }]);

      return UserService;
    }();

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function UserService_Factory() {
        return new UserService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      },
      token: UserService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/core/core.module.ts":
  /*!*********************************!*\
    !*** ./src/core/core.module.ts ***!
    \*********************************/

  /*! exports provided: CoreModule */

  /***/
  function srcCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/modules/bracket/bracket-handler.service.ts":
  /*!********************************************************!*\
    !*** ./src/modules/bracket/bracket-handler.service.ts ***!
    \********************************************************/

  /*! exports provided: BracketHandler */

  /***/
  function srcModulesBracketBracketHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BracketHandler", function () {
      return BracketHandler;
    });
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./data.service */
    "./src/modules/bracket/data.service.ts");
    /* harmony import */


    var _shared_data_match_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/data/match-container */
    "./src/shared/data/match-container.ts");

    var BracketHandler =
    /*#__PURE__*/
    function () {
      function BracketHandler(data) {
        _classCallCheck(this, BracketHandler);

        this.data = data;
        this.activeContestants = [];
        this.matchContainers = []; // all the matches in this tournament
        // positions of seeds in order.
        // the index corresponds to the seed, the value
        // is the position in the first row for that seed

        this.seedsByIndex = []; // two dimensional array to store matches for each round
        // matchesPerRound[round][match]

        this.matchesPerRound = [];
        this.containerWidth = 0;
        this.containerHeight = 0;
        this.padding = 16;
      }

      _createClass(BracketHandler, [{
        key: "createBracket",
        value: function createBracket(bracket) {
          var _this6 = this;

          this.activeTournament = bracket;
          this.activeContestants = bracket.contestants;
          this.matchContainers = [];
          this.numContestants = this.activeContestants.length;
          this.createSeededBracket();
          this.defineLayoutPlacements(); // if this is a previously stored match, update the winners

          if (this.activeTournament.matches) {
            this.matchContainers.forEach(function (match, i) {
              if (_this6.activeTournament.matches[i].winnerSeed) {
                match.updateWinner(_this6.activeTournament.matches[i].winnerSeed);
              }
            });
          }

          this.data.setMatchContainers(this.matchContainers);
        }
      }, {
        key: "createSeededBracket",
        value: function createSeededBracket() {
          this.high2Power = this.pow2RoundUp(this.numContestants);
          this.bigSkip = this.high2Power / 4;
          this.seedsByIndex = [];
          this.seedMatcher(1);
          console.log('seedsByIndex: ', this.seedsByIndex);
          this.numRounds = Math.log(this.high2Power) / Math.log(2);
          this.matchesPerRound = [];
          var numFirstRoundMatchesTops = this.high2Power / 2;

          for (var i = 0; i < this.numRounds; i++) {
            this.matchesPerRound[i] = [];
          } // Add the appropriate amount of matches per round.
          // Starts from the winner and moves back.


          for (var _i = 0; _i < this.numRounds; _i++) {
            for (var j = 0; j < numFirstRoundMatchesTops / Math.pow(2, _i); j++) {
              this.matchesPerRound[_i][j] = new _shared_data_match_container__WEBPACK_IMPORTED_MODULE_1__["MatchContainer"]();
              this.matchContainers.push(this.matchesPerRound[_i][j]);
            }
          } // Subscribe each match to the appropriate preceding matches.


          for (var _i2 = this.numRounds - 1; _i2 > 0; _i2--) {
            for (var _j = 0; _j < numFirstRoundMatchesTops / Math.pow(2, _i2); _j++) {
              this.matchesPerRound[_i2][_j].setHighMatch(this.matchesPerRound[_i2 - 1][_j * 2]);

              this.matchesPerRound[_i2][_j].setLowMatch(this.matchesPerRound[_i2 - 1][_j * 2 + 1]);

              this.matchesPerRound[_i2 - 1][_j * 2].addObserver(this.matchesPerRound[_i2][_j]);

              this.matchesPerRound[_i2 - 1][_j * 2 + 1].addObserver(this.matchesPerRound[_i2][_j]);
            }
          }

          var numSeeded = 0; // place contestants in the correct match based on their seed

          for (var _i3 = 0; _i3 < this.high2Power / 2; _i3++) {
            if (numSeeded >= this.high2Power / 2) {
              break;
            }

            console.log(this.activeContestants[_i3]);
            this.matchesPerRound[0][this.seedsByIndex[_i3] - 1].addContestant(this.activeContestants[_i3]);
            numSeeded++;
          } // loop backwards the other way for the second half


          for (var _i4 = 0; _i4 < this.activeContestants.length - this.bigSkip * 2; _i4++) {
            if (numSeeded >= this.numContestants) {
              break;
            }

            this.matchesPerRound[0][this.seedsByIndex[this.seedsByIndex.length - 1 - _i4] - 1].addContestant(this.activeContestants[this.bigSkip * 2 + _i4]);
            numSeeded++;
          }
        }
        /**
         * Recursive function that seeds first round matches
         * depending on the number of matchSlots
         *
         * MUST be given 1 as a parameter when
         * called outside itself
         *
         * TODO: Change that ^ so this function doesn't
         * rely on this class
         *
         * @param moveSpaces  The amount of matches to move
         * @return            New indexes to apply algorithm to
         */

      }, {
        key: "seedMatcher",
        value: function seedMatcher(moveSpaces) {
          moveSpaces *= 2;
          var indexes;

          if (moveSpaces < this.bigSkip) {
            indexes = this.seedMatcher(moveSpaces);
          } else {
            // First 2 seed are anomalous to the pattern
            if (this.bigSkip === 1) {
              // if tourny size is 4
              this.seedsByIndex.push(1);
              this.seedsByIndex.push(2);
            } else if (this.bigSkip === 2) {
              // if tournament size 8
              this.seedsByIndex.push(1);
              this.seedsByIndex.push(3);
              this.seedsByIndex.push(4);
              this.seedsByIndex.push(2);
            } else {
              this.seedsByIndex.push(1);
              this.seedsByIndex.push(1 + moveSpaces);
            }

            indexes = [];
            indexes[0] = 1;
            indexes[1] = 0;
            return indexes;
          } // indexes of newly placed seed
          // this will be returned to use for the next placements


          var newIndexes = [];
          var movesDone = 0;

          for (var i = 0; i < indexes.length; i++) {
            newIndexes[i] = this.seedsByIndex.length;
            this.seedsByIndex.push(this.seedsByIndex[indexes[i]] + moveSpaces);
            ++movesDone;
          }

          if (movesDone < this.bigSkip / moveSpaces) {
            for (var j = indexes.length - 1; j >= 0; j--) {
              newIndexes[movesDone] = this.seedsByIndex.length;
              this.seedsByIndex.push(this.seedsByIndex[indexes[j]] - moveSpaces);
              ++movesDone;
            }
          } // Reverse new indexes so next cycle indexes backwards


          newIndexes.reverse(); // Because we

          if (moveSpaces === 2) {
            moveSpaces = 1;

            for (var k = this.seedsByIndex.length - 1; k >= 0; k--) {
              this.seedsByIndex.push(this.seedsByIndex[k] + moveSpaces);
            }
          }

          return newIndexes;
        }
      }, {
        key: "defineLayoutPlacements",
        value: function defineLayoutPlacements() {
          // this.containerWidth = window.innerWidth - this.padding * 2;
          // this.containerHeight = window.innerHeight - this.padding * 2;
          this.matchWidth = this.containerWidth / 3 - this.padding;
          this.matchHeight = this.containerHeight / 4 - this.padding;
          debugger;
          var soonToBeRemovedMatches = [];

          for (var i = 0; i < this.matchesPerRound.length; i++) {
            for (var j = 0; j < this.matchesPerRound[i].length; j++) {
              var thisMatch = this.matchesPerRound[i][j];

              if (i === 0) {
                if (!thisMatch.lowSeed) {
                  thisMatch.updateWinner(thisMatch.highSeed);
                  soonToBeRemovedMatches.push(thisMatch);
                  thisMatch.updateWinner(_shared_data_match_container__WEBPACK_IMPORTED_MODULE_1__["MatchContainer"].HIGHSEED);
                }

                thisMatch.top = (this.matchHeight + this.padding) * j + this.padding;
                thisMatch.left = 0 + this.padding;
                thisMatch.width = this.matchWidth;
                thisMatch.height = this.matchHeight;
              } else {
                thisMatch.top = thisMatch.highMatch.top - (thisMatch.highMatch.top - thisMatch.lowMatch.top) / 2;
                thisMatch.left = thisMatch.highMatch.left + this.matchWidth + this.padding;
                thisMatch.width = this.matchWidth;
                thisMatch.height = this.matchHeight;
              }
            }
          }

          this.matchContainers = this.matchContainers.filter(function (m) {
            return soonToBeRemovedMatches.indexOf(m) === -1;
          });
        }
        /**
         * Round down to next higher power of 2 (return x if it's already a power of 2).
         *
         * @param x  The number in question
         * @return   The next highest power of 2
         */

      }, {
        key: "pow2RoundUp",
        value: function pow2RoundUp(x) {
          if (x < 0) {
            return 0;
          }

          --x; // tslint:disable-next-line: no-bitwise

          x |= x >> 1; // tslint:disable-next-line: no-bitwise

          x |= x >> 2; // tslint:disable-next-line: no-bitwise

          x |= x >> 4; // tslint:disable-next-line: no-bitwise

          x |= x >> 8; // tslint:disable-next-line: no-bitwise

          x |= x >> 16;
          return x + 1;
        }
        /**
         * Round down to next lower power of 2 (return x if it's already a power of 2).
         *
         * @param x  The number in question
         * @return   The next lowest power of 2
         */

      }, {
        key: "pow2RoundDown",
        value: function pow2RoundDown(x) {
          if (x < 0) {
            return 0;
          } // tslint:disable-next-line: no-bitwise


          x |= x >> 1; // tslint:disable-next-line: no-bitwise

          x |= x >> 2; // tslint:disable-next-line: no-bitwise

          x |= x >> 4; // tslint:disable-next-line: no-bitwise

          x |= x >> 8; // tslint:disable-next-line: no-bitwise

          x |= x >> 16; // tslint:disable-next-line: no-bitwise

          return x - (x >> 1);
        }
      }, {
        key: "setContainerDimensions",
        value: function setContainerDimensions(width, height) {
          this.containerWidth = width - this.padding * 2;
          this.containerHeight = height - this.padding * 2;
        }
      }]);

      return BracketHandler;
    }();
    /***/

  },

  /***/
  "./src/modules/bracket/bracket.module.ts":
  /*!***********************************************!*\
    !*** ./src/modules/bracket/bracket.module.ts ***!
    \***********************************************/

  /*! exports provided: BracketModule */

  /***/
  function srcModulesBracketBracketModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BracketModule", function () {
      return BracketModule;
    });

    var BracketModule = function BracketModule() {
      _classCallCheck(this, BracketModule);
    };
    /***/

  },

  /***/
  "./src/modules/bracket/data.service.ts":
  /*!*********************************************!*\
    !*** ./src/modules/bracket/data.service.ts ***!
    \*********************************************/

  /*! exports provided: DataService */

  /***/
  function srcModulesBracketDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.matchContainers = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
      }

      _createClass(DataService, [{
        key: "setMatchContainers",
        value: function setMatchContainers(matchContainers) {
          this.matchContainers.next(matchContainers);
        }
      }, {
        key: "getMatchContainers",
        value: function getMatchContainers() {
          return this.matchContainers;
        }
      }]);

      return DataService;
    }();
    /***/

  },

  /***/
  "./src/shared/app.store.ts":
  /*!*********************************!*\
    !*** ./src/shared/app.store.ts ***!
    \*********************************/

  /*! exports provided: AppStore */

  /***/
  function srcSharedAppStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppStore", function () {
      return AppStore;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AppStore = function AppStore() {
      _classCallCheck(this, AppStore);

      this.loggedInUser = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
      this.currentTournament = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
      this.allTournaments = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    };
    /***/

  },

  /***/
  "./src/shared/data/match-container.ts":
  /*!********************************************!*\
    !*** ./src/shared/data/match-container.ts ***!
    \********************************************/

  /*! exports provided: MatchContainer */

  /***/
  function srcSharedDataMatchContainerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchContainer", function () {
      return MatchContainer;
    });
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../utils */
    "./src/shared/utils/index.ts");

    var MatchContainer =
    /*#__PURE__*/
    function (_utils__WEBPACK_IMPOR) {
      _inherits(MatchContainer, _utils__WEBPACK_IMPOR);

      function MatchContainer() {
        var _this7;

        _classCallCheck(this, MatchContainer);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(MatchContainer).apply(this, arguments));
        _this7.sets = [];
        return _this7;
      }

      _createClass(MatchContainer, [{
        key: "update",
        value: function update() {
          this.highSeed = this.highMatch.winner;
          this.lowSeed = this.lowMatch.winner;
        }
      }, {
        key: "updateWinner",
        value: function updateWinner(seed) {
          if (seed === MatchContainer.HIGHSEED) {
            this.winner = this.highSeed;
            this.winnerSeed = MatchContainer.HIGHSEED;
          }

          if (seed === MatchContainer.LOWSEED) {
            this.winner = this.lowSeed;
            this.winnerSeed = MatchContainer.LOWSEED;
          }

          this.notifyObservers(); // this.next(this.match);
        }
        /**
         * Places the given contestant in the high seed slot
         *
         * @param matchSlot MatchSlot to add to match
         * @return           Returns either replaced contestant or null if spot was open
         */

      }, {
        key: "setHighSeed",
        value: function setHighSeed(contestant) {
          if (this.highSeed === null) {
            this.highSeed = contestant;
            return null;
          } else {
            var temp = this.highSeed;
            this.highSeed = contestant;
            return temp;
          }
        }
        /**
         * Places the given contestant in the high seed slot
         *
         * @param matchSlot MatchSlot to add to match
         * @return           Returns either replaced contestant or null if spot was open
         */

      }, {
        key: "setLowSeed",
        value: function setLowSeed(contestant) {
          if (this.lowSeed === null) {
            this.lowSeed = contestant;
            return null;
          } else {
            var temp = this.lowSeed;
            this.lowSeed = contestant;
            return temp;
          }
        }
        /**
         * This method is used to add a contestant to a match
         * and will add it to the correct seed based on
         * contestant's seed.
         *
         * WARNING!
         * If match is full, will kick a player out of the match
         * and return it.
         *
         * @param contestant Contestant to add to match
         * @return
         */

      }, {
        key: "addContestant",
        value: function addContestant(contestant) {
          if (!this.highSeed && !this.lowSeed) {
            // if both high and low seeds are empty
            console.log('New high seed by default.');
            this.highSeed = contestant; // store in high seed

            return null;
          } else if (!this.lowSeed) {
            // if only low seed is empty
            if (this.highSeed.seed <= contestant.seed || !contestant.seed) {
              // if the current higher seed has better or equal seed
              console.log('New low seed.');
              this.lowSeed = contestant; // store in low seed

              return null;
            } else {
              console.log('New high seed, demoted prev to low seed.');
              this.lowSeed = this.highSeed; // move current high seed to low

              this.highSeed = contestant; // store new contestant in high seed

              return null;
            }
          } else if (!this.highSeed) {
            // if only the high seed is empty
            if (contestant.seed && this.lowSeed.seed > contestant.seed) {
              // if the current lower seed has worse seed
              console.log('New high seed.');
              this.highSeed = contestant; // sotre in high seed

              return null;
            } else {
              console.log('New low seed, promoted prev to high seed.');
              this.highSeed = this.lowSeed; // move current low seed to high seed

              this.lowSeed = contestant; // store new contestant in high seed

              return null;
            }
          } else {
            // if the new contestant has better seed than the low seed and worse than the high seed
            if (this.highSeed.seed <= contestant.seed && contestant.seed > this.lowSeed.seed) {
              console.log('New low seed, returned old low seed.');
              var temp = this.lowSeed;
              this.lowSeed = contestant; // save newbie to low seed

              return temp; // and return the removed contestant
              // the new contestant had more than the high seed
            } else if (this.highSeed.seed > contestant.seed) {
              console.log('New high seed, returned old low seed.');
              var _temp = this.lowSeed;
              this.lowSeed = this.highSeed;
              this.highSeed = contestant;
              return _temp;
            } else {
              console.log("OOPS! ".concat(contestant.name, " was not added to the match."));
              return contestant;
            }
          }
        } // save a reference to the high match so we can
        // try to grab the winner in our update function

      }, {
        key: "setHighMatch",
        value: function setHighMatch(match) {
          this.highMatch = match;
          this.highSeed = match.winner;
        }
      }, {
        key: "getHighMatch",
        value: function getHighMatch() {
          return this.highMatch;
        } // save a reference to the low match so we can
        // try to grab the winner in our update function

      }, {
        key: "setLowMatch",
        value: function setLowMatch(match) {
          this.lowMatch = match;
          this.lowSeed = match.winner;
        }
      }, {
        key: "getLowMatch",
        value: function getLowMatch() {
          return this.lowMatch;
        }
      }, {
        key: "getStyleObject",
        value: function getStyleObject() {
          return {
            position: 'absolute',
            'top.px': this.top,
            'left.px': this.left,
            'width.px': this.width,
            'height.px': this.height
          };
        }
      }, {
        key: "getData",
        value: function getData() {
          return {
            highSeed: this.highSeed.id,
            lowSeed: this.lowSeed.id,
            highMatch: this.highMatch,
            lowMatch: this.lowMatch,
            matchRounds: this.sets,
            winner: this.winner.id,
            winnerSeed: this.winnerSeed
          };
        }
      }]);

      return MatchContainer;
    }(_utils__WEBPACK_IMPORTED_MODULE_0__["MatchSubject"]);

    MatchContainer.HIGHSEED = 'HIGHSEED';
    MatchContainer.LOWSEED = 'LOWSEED';
    /***/
  },

  /***/
  "./src/shared/data/tournament/tournament.data.service.ts":
  /*!***************************************************************!*\
    !*** ./src/shared/data/tournament/tournament.data.service.ts ***!
    \***************************************************************/

  /*! exports provided: TournamentDataService */

  /***/
  function srcSharedDataTournamentTournamentDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TournamentDataService", function () {
      return TournamentDataService;
    });
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var _tournament_gql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tournament.gql */
    "./src/shared/data/tournament/tournament.gql.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_shared_app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/shared/app.store */
    "./src/shared/app.store.ts");

    var TournamentDataService =
    /*#__PURE__*/
    function () {
      function TournamentDataService(apollo, appStore) {
        _classCallCheck(this, TournamentDataService);

        this.apollo = apollo;
        this.appStore = appStore;
      }

      _createClass(TournamentDataService, [{
        key: "getAllTournaments",
        value: function getAllTournaments() {
          var _this8 = this;

          return this.apollo.query({
            query: _tournament_gql__WEBPACK_IMPORTED_MODULE_1__["TournamentGqlFunctions"].queries.tournaments
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) {
            _this8.appStore.allTournaments.next(result.data.tournaments);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error, caught) {
            return caught;
          })).toPromise();
        }
      }, {
        key: "createTournament",
        value: function createTournament(_ref) {
          var _this9 = this;

          var name = _ref.name,
              contestantCount = _ref.contestantCount;
          return this.apollo.mutate({
            mutation: _tournament_gql__WEBPACK_IMPORTED_MODULE_1__["TournamentGqlFunctions"].mutations.createTournament,
            variables: {
              name: name,
              contestantCount: contestantCount
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) {
            _this9.appStore.currentTournament.next(result.data.addTournament);
          }));
        }
      }, {
        key: "getTournamentFromId",
        value: function getTournamentFromId(linkCode) {
          var _this10 = this;

          return this.apollo.query({
            query: _tournament_gql__WEBPACK_IMPORTED_MODULE_1__["TournamentGqlFunctions"].queries.tournamentFromLinkCode,
            variables: {
              linkCode: linkCode
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) {
            _this10.appStore.currentTournament.next(result.data.tournamentFromLinkCode);
          }));
        }
      }, {
        key: "getTournamentFromLinkCode",
        value: function getTournamentFromLinkCode(linkCode) {
          var _this11 = this;

          return this.apollo.query({
            query: _tournament_gql__WEBPACK_IMPORTED_MODULE_1__["TournamentGqlFunctions"].queries.tournamentFromLinkCode,
            variables: {
              linkCode: linkCode
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) {
            _this11.appStore.currentTournament.next(result.data.tournamentFromLinkCode);
          }));
        }
      }, {
        key: "addContestant",
        value: function addContestant(tournamentId, contestant) {}
      }]);

      return TournamentDataService;
    }();
    /***/

  },

  /***/
  "./src/shared/data/tournament/tournament.gql.ts":
  /*!******************************************************!*\
    !*** ./src/shared/data/tournament/tournament.gql.ts ***!
    \******************************************************/

  /*! exports provided: TournamentGqlFunctions */

  /***/
  function srcSharedDataTournamentTournamentGqlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TournamentGqlFunctions", function () {
      return TournamentGqlFunctions;
    });
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

    var TournamentGqlFunctions = {
      mutations: {
        createTournament: graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject())
      },
      queries: {
        tournamentFromId: graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject2()),
        tournamentFromLinkCode: graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject3()),
        tournaments: graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a(_templateObject4())
      }
    };
    /***/
  },

  /***/
  "./src/shared/material.module.ts":
  /*!***************************************!*\
    !*** ./src/shared/material.module.ts ***!
    \***************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcSharedMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };
    /***/

  },

  /***/
  "./src/shared/shared.module.ts":
  /*!*************************************!*\
    !*** ./src/shared/shared.module.ts ***!
    \*************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };
    /***/

  },

  /***/
  "./src/shared/utils/index.ts":
  /*!***********************************!*\
    !*** ./src/shared/utils/index.ts ***!
    \***********************************/

  /*! exports provided: MatchSubject */

  /***/
  function srcSharedUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _match_subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./match-subject */
    "./src/shared/utils/match-subject.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MatchSubject", function () {
      return _match_subject__WEBPACK_IMPORTED_MODULE_0__["MatchSubject"];
    });
    /***/

  },

  /***/
  "./src/shared/utils/match-subject.ts":
  /*!*******************************************!*\
    !*** ./src/shared/utils/match-subject.ts ***!
    \*******************************************/

  /*! exports provided: MatchSubject */

  /***/
  function srcSharedUtilsMatchSubjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchSubject", function () {
      return MatchSubject;
    });

    var MatchSubject =
    /*#__PURE__*/
    function () {
      function MatchSubject() {
        _classCallCheck(this, MatchSubject);

        this.observers = [];
      }

      _createClass(MatchSubject, [{
        key: "addObserver",
        value: function addObserver(observer) {
          if (this.observers.indexOf(observer) === -1) {
            this.observers.push(observer);
          }
        }
      }, {
        key: "removeObserver",
        value: function removeObserver(observer) {
          this.observers = this.observers.filter(function (obs) {
            return observer !== obs;
          });
        }
      }, {
        key: "notifyObservers",
        value: function notifyObservers() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.observers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var observer = _step.value;
              observer.update();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }]);

      return MatchSubject;
    }();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Michael\Projects\brackets\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map