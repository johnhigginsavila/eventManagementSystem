webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SIGN_UP_ATTEMPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SIGNED_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SIGNED_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SIGNED_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FETCH_USER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHECK_USER_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGED_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_EVENTS; });
var SIGN_UP_ATTEMPT = 'SIGN_UP_ATTEMPT';
var SIGNED_UP = 'SIGNED_UP';
var SIGNED_IN = 'SIGNED_IN';
var SIGNED_OUT = 'SIGNED_OUT';
var FETCH_USER_LIST = 'FETCH_USER_LIST';
var CHECK_USER_SESSION = 'CHECK_USER_SESSION';
var CHANGED_PAGE = 'CHANGED_PAGE';
var FETCH_EVENTS = 'FETCH_EVENTS';
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div [class]=\"'container'\">\n  <router-outlet ></router-outlet>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(ngRedux, sessionService, userService) {
        this.ngRedux = ngRedux;
        this.sessionService = sessionService;
        this.userService = userService;
        this.logedIn = false;
        this.title = 'Informatics Event Management System';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* CHECK_USER_SESSION */] });
        this.userService.GetAllUser()
            .subscribe(function (users) {
            var userSession = _this.sessionService.CheckUserSession();
            _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__actions__["h" /* FETCH_USER_LIST */], usersList: users, userSession: userSession });
        }, function (error) { return console.log(error); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "usersList", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "userSession", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__route_config_router_config__ = __webpack_require__("../../../../../src/app/route-config/router.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_service_module__ = __webpack_require__("../../../../../src/app/services/service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_login_guard__ = __webpack_require__("../../../../../src/app/guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__feature_modules_event_management_module_event_management_module__ = __webpack_require__("../../../../../src/app/feature-modules/event-management-module/event-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__feature_modules_home_module_home_module__ = __webpack_require__("../../../../../src/app/feature-modules/home-module/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__feature_modules_login_module_login_module__ = __webpack_require__("../../../../../src/app/feature-modules/login-module/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_component_menu_menu_component__ = __webpack_require__("../../../../../src/app/common-component/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store__ = __webpack_require__("../../../../../src/app/store.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/* Router Configurations */

/* Custom Material */
//import { MaterialModule } from './material/material.module';
/* Service Module */

/* Guards */

/* Feature modules */



/* Main Component */

/* Common Components */

/* Redux */


var AppModule = (function () {
    function AppModule(ngRedux, devTools) {
        var enhancers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["isDevMode"])() ? [devTools.enhancer()] : [];
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_17__store__["a" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_17__store__["b" /* INITIAL_STATE */], [], enhancers);
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__common_component_menu_menu_component__["a" /* MenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__services_service_module__["a" /* ServiceModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_ng2_redux__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__route_config_router_config__["a" /* routerConfig */], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__feature_modules_home_module_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_13__feature_modules_login_module_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_11__feature_modules_event_management_module_event_management_module__["a" /* EventManagementModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__guards_login_guard__["a" /* LoginGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_16_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16_ng2_redux__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_16_ng2_redux__["DevToolsExtension"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16_ng2_redux__["DevToolsExtension"]) === "function" && _b || Object])
    ], AppModule);
    return AppModule;
    var _a, _b;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common-component/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common-component/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ul class=\"nav navbar-default\">\n        <li class=\"nav-item\"><a class=\"nav-link nav-btn btn-default\" role=\"button\" aria-pressed=\"true\" [routerLink]=\"['/home']\">Home</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link nav-btn btn-default\" role=\"button\" aria-pressed=\"true\" [routerLink]=\"['/event-viewer']\" >Event Viewer</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link nav-btn btn-default\" role=\"button\" aria-pressed=\"true\" [routerLink]=\"['/event-management']\">Event Management</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link nav-btn btn-default\" role=\"button\" aria-pressed=\"true\" [routerLink]=\"['/accounts']\">Accounts</a></li>\n</ul> -->\n\n<!--  <nav class=\"navbar navbar-default\">\n <div class=\"container\">\n    <Brand and toggle get grouped for better mobile display />\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"></a>\n    </div>\n\n     Collect the nav links, forms, and other content for toggling \n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink]=\"['/home']\" class=\"btn\">Home</a></li>\n        <li><a [routerLink]=\"['/event-viewer']\" class=\"btn\">Event Viewer</a></li>\n        <li><a [routerLink]=\"['/event-management']\" class=\"btn\">Event Management</a></li>\n        <li><a [routerLink]=\"['/accounts']\" class=\"btn\">Accounts</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav> -->\n\n<!-- <nav class='nav navbar-default'>\n    <div class='container'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Event Management</a> \n        </div>\n        <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>\n            <ul class='nav navbar-nav'>\n                <li [ngClass]=\"{'active': (page | async) === 'home'}\"><a [routerLink]=\"['/home']\">Home</a></li>\n                <li *ngIf=\"(userSession | async)\" [ngClass]=\"{'active': (page | async) === 'event-management'}\" ><a [routerLink]=\"['/event-management']\">Event Management</a></li>\n                <li class=''><a [routerLink]=\"['/event-viewer']\">Events</a></li>\n                <li class=''><a [routerLink]=\"['/accounts']\">Accounts</a></li>\n                <li *ngIf=\"(userSession | async)\"><a link=\"#\" (click)=\"onSignOut()\">Sign out</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"nav-item dropdown\">\n                <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Options<span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">User</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li role=\"separator\" class=\"divider\"></li>\n                        <li><a (click)=\"logout()\">Log Out</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav> -->\n\n\n<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n    <div class=\"container\">\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n            <ul class=\"navbar-nav\">\n                <li [ngClass]=\"{'nav-item active': (page | async) === 'home', 'nav-item': (page | async) !== 'home'  }\"><a class='nav-link' [routerLink]=\"['/home']\">Home</a></li>\n                <li *ngIf=\"(userSession | async)\" [ngClass]=\"{'nav-item active': (page | async) === 'event-management', 'nav-item' : (page | async) !== 'event-management'}\" ><a class='nav-link' [routerLink]=\"['/event-management']\">Event Management</a></li>\n                <li class=\"nav-item dropdown\">\n                <a *ngIf=\"(userSession | async)\"  class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Options\n                </a>\n                <div *ngIf=\"(userSession | async)\" class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"#\">User Accounts</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <a  (click)=\"onSignOut()\" class=\"dropdown-item\" href=\"#\">Sign-out</a>\n                </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/common-component/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = (function () {
    function MenuComponent(ngRedux, sessionService, router) {
        this.ngRedux = ngRedux;
        this.sessionService = sessionService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* CHECK_USER_SESSION */] });
    };
    MenuComponent.prototype.onSignOut = function () {
        this.sessionService.SessionDestroy();
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__actions__["g" /* SIGNED_OUT */] });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__["select"])(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "userSession", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__["select"])(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "page", void 0);
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/common-component/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common-component/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/common-component/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form class='form-horizontal form-signin' id='sign-up-form' [formGroup]='sessionNewForm'>\n    <fieldset class='container-fluid col-lg-4 col-lg-offset-4'>\n      <legend>Sign In</legend>\n        <div *ngIf=\"error\" class=\"alert alert-danger\">\n          <p>{{error}}</p>\n        </div> \n        <div *ngIf=\"success\" class=\"alert alert-success\">\n          <p>{{success}}</p>\n        </div>\n        <!-- LoginName -->\n      <div class='form-group'>\n        <input type=\"text\"\n          formControlName='loginName'\n          class='form-control'\n          placeholder='Email or ID Number'\n          required\n        />\n        <div\n          *ngIf=\"sessionNewForm.controls['loginName'].hasError('required')\n            && (sessionNewForm.controls['loginName'].dirty || sessionNewForm.controls['loginName'].touched)\"\n          class=\"alert alert-danger\"\n        >Please Enter ID Number or Email\n        </div>\n      </div><!-- LoginName -->\n        <!-- Password -->\n      <div class='form-group'>\n        <input type='password'\n          formControlName='password'\n          class='form-control'\n          placeholder=\"Password\"\n          required\n        />\n        <div\n          *ngIf=\"sessionNewForm.controls['password'].hasError('required')\n            && (sessionNewForm.controls['password'].dirty || sessionNewForm.controls['password'].touched)\"\n          class=\"alert alert-danger\"\n        >Please Enter Password\n        </div>\n      </div><!-- Password -->\n      <div class='form-group'>\n        <input *ngIf=\"sessionNewForm.valid\"\n          type=\"submit\"\n          class=\"btn btn-info\"\n          (click)=\"onSubmit()\"\n        />\n        <input *ngIf=\"!sessionNewForm.valid\"\n          type=\"submit\"\n          class=\"btn btn-info\"\n          disabled\n        />\n        <input type='button'\n          class='btn btn-danger'\n          value='Cancel'\n          (click)='onCancel()'\n        />\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/common-component/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common-component/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninComponent = (function () {
    function SigninComponent(userService, formBuilder, ngRedux, sessionService) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.ngRedux = ngRedux;
        this.sessionService = sessionService;
        this.sessionNewForm = formBuilder.group({
            loginName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required)
        });
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.sessionNewForm = this.formBuilder.group({
            loginName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required)
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sessionService.CreateUserSession(this.sessionNewForm.value)
            .subscribe(function (userData) {
            _this.sessionService.SaveUserSession(userData);
            _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__actions__["d" /* SIGNED_IN */], user: userData, signedIn: { success: 'Sign in success!', error: null } });
        }, function (error) {
            _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__actions__["d" /* SIGNED_IN */], user: null, signedIn: { success: null, error: JSON.stringify(error._body) } });
        });
    };
    SigninComponent.prototype.onCancel = function () {
        this.sessionNewForm = this.formBuilder.group({
            loginName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required)
        });
    };
    SigninComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/common-component/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common-component/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_redux__["NgRedux"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _d || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/common-component/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form class='form-horizontal form-signin' id='sign-up-form' [formGroup]='userNewForm'>\n    <fieldset class='container-fluid col-lg-4 col-lg-offset-4'>\n      <legend>Create an account</legend>\n         <div *ngIf=\"errors\" class=\"alert alert-danger\">\n          <p>{{errors}}</p>\n        </div> \n        <div *ngIf=\"success\" class=\"alert alert-success\">\n          <p>{{success}}</p>\n        </div>\n        <!-- Firsname -->\n      <div class='form-group'>\n        <input type='text'\n          formControlName='firstname'\n          class='form-control'\n          placeholder='Firstname'\n          required\n        />\n        <div\n          *ngIf=\"userNewForm.controls['firstname'].hasError('required') && (userNewForm.controls['firstname'].dirty || userNewForm.controls['firstname'].touched)\"\n          class=\"alert alert-danger\"\n        >Please enter your Firstname\n        </div>\n      </div><!-- Firstname -->\n        <!-- Lastname -->\n      <div class='form-group'>\n        <input type='text'\n          formControlName='lastname'\n          class='form-control'\n          placeholder='Lastname'\n          required\n        />\n        <div\n          *ngIf=\"userNewForm.controls['lastname'].hasError('required')\n            && (userNewForm.controls['lastname'].dirty || userNewForm.controls['lastname'].touched)\"\n          class=\"alert alert-danger\"\n        >Please enter your Lastname\n        </div>\n      </div><!-- Lastname -->\n        <!-- Email -->\n      <div class='form-group'>\n        <input type='text'\n          formControlName='email'\n          class='form-control'\n          placeholder='Email'\n          required\n          email\n        />\n        <div\n          *ngIf=\"userNewForm.controls['email'].hasError('required')\n            && (userNewForm.controls['email'].dirty || userNewForm.controls['email'].touched)\"\n          class=\"alert alert-danger\"\n        >Please Enter Email\n        </div>\n        <div\n          *ngIf=\"userNewForm.controls['email'].hasError('email') \n            && userNewForm.controls['email'].dirty\"\n          class=\"alert alert-danger\"\n        >Invalid Email\n        </div>\n      </div><!-- Email -->\n        <!-- ID Number -->\n      <div class='form-group'>\n        <input type=\"text\"\n          formControlName='idNumber'\n          class='form-control'\n          placeholder='ID number'\n          required\n        />\n        <div\n          *ngIf=\"userNewForm.controls['idNumber'].hasError('required')\n            && (userNewForm.controls['idNumber'].dirty || userNewForm.controls['idNumber'].touched)\"\n          class=\"alert alert-danger\"\n        >Please Enter ID Number\n        </div>\n      </div><!-- ID Number -->\n        <!-- Password -->\n      <div class='form-group'>\n        <input type='password'\n          formControlName='password'\n          class='form-control'\n          placeholder=\"Password\"\n          required\n        />\n        <div\n          *ngIf=\"userNewForm.controls['password'].hasError('required')\n            && (userNewForm.controls['password'].dirty || userNewForm.controls['password'].touched)\"\n          class=\"alert alert-danger\"\n        >Please Enter Password\n        </div>\n      </div><!-- Password -->\n      <!-- Confirmation -->\n      <div class='form-group'>\n        <input type='password'\n          formControlName='confirmation'\n          class='form-control'\n          placeholder=\"Confirmed Password\"\n          required\n        />\n        <div\n          *ngIf=\"userNewForm.controls['confirmation'].hasError('required')\n            && (userNewForm.controls['confirmation'].dirty || userNewForm.controls['confirmation'].touched)\"\n          class=\"alert alert-danger\"\n        >Please Enter Confirmed Password\n        </div>\n        <div\n          *ngIf=\"(userNewForm.controls['password'].value !== userNewForm.controls['confirmation'].value)\n            && (userNewForm.controls['confirmation'].dirty || userNewForm.controls['confirmation'].touched)\"\n            class=\"alert alert-danger\"\n        >Password do not match\n        </div>\n      </div><!-- Confirmation -->\n      <div class='form-group'>\n        <input *ngIf=\"userNewForm.valid && (userNewForm.controls['password'].value === userNewForm.controls['confirmation'].value)\"\n          type=\"submit\"\n          class=\"btn btn-info\"\n          (click)=\"onSubmit()\"\n        />\n        <input *ngIf=\"!userNewForm.valid || (userNewForm.controls['password'].value !== userNewForm.controls['confirmation'].value && !userNewForm.controls.valid)\"\n          type=\"submit\"\n          class=\"btn btn-info\"\n          disabled\n        />\n        <input type='button'\n          class='btn btn-danger'\n          value='Cancel'\n          (click)='onCancel()'\n        />\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/common-component/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common-component/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = (function () {
    function SignupComponent(sessionService, formBuilder, userService, ngRedux) {
        this.sessionService = sessionService;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.ngRedux = ngRedux;
        this.userNewForm = formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email),
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            idNumber: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            confirmation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required)
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.userNewForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email),
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            idNumber: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            confirmation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required)
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.CreateUser(this.userNewForm.value)
            .subscribe(function (newUser) {
            _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__actions__["e" /* SIGNED_UP */], signUpAttempt: false, user: newUser, signedUp: { success: 'Sign Up Success!', error: undefined } });
            _this.sessionService.SaveUserSession(newUser);
        }, function (error) {
            _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__actions__["f" /* SIGN_UP_ATTEMPT */], signedUp: { success: undefined, error: JSON.stringify(error._body) } });
        });
    };
    SignupComponent.prototype.onCancel = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__actions__["f" /* SIGN_UP_ATTEMPT */], signUpAttempt: false });
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        //this.ngRedux.dispatch({type: SIGN_UP_ATTEMPT, signUpAttempt:false});
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/common-component/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common-component/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_redux__["NgRedux"]) === "function" && _d || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/content/admin-view/admin-view.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<!--- Add Event Modal -->\n<h2>\n  Admin\n</h2>\n<ng-template #addEventModal let-close=\"close\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Create New Event</h5>\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-group\">\n            <form class=\"form-horizontal\" [formGroup]='newEventForm'>\n                <div class=\"form-group row\">\n                      <label for=\"eventName\" class=\"col-2 col-form-label\">Event Name:</label>\n                      <div class=\"col-6\">\n                      <input type=\"text\" class=\"form-control\" type=\"text\" placeholder=\"Event Name\" formControlName=\"eventName\" autofocus required>\n                      </div>\n                </div>\n                <div class=\"form-group row\">\n                      <label for=\"dateStart\" class=\"col-2 col-form-label\">Date Start:</label>\n                      <div class=\"col-6\">\n                      <app-date-picker\n                      [placeholder]=\"clickedDate\">\n                      </app-date-picker>\n                      </div>\n                </div>\n                <div class=\"form-group row\">\n                      <label for=\"dateStart\" class=\"col-2 col-form-label\">Date End:</label>\n                      <div class=\"col-6\">\n                      <app-date-picker\n                      [placeholder]=\"clickedDate\">\n                      </app-date-picker>\n                      </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"newEvent()\" (click)=\"close()\">Submit</button>\n      <button class=\"btn btn-danger\" (click)=\"close()\">Close</button>\n    </div>\n</ng-template>\n\n\n\n\n<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Event Details</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div>\n      Event:\n      <pre>{{ modalData?.event.title }}</pre>\n      Date Start:\n      <pre>{{ modalData?.event.start }}</pre>\n      Date End:\n      <pre>{{ modalData?.event.end }}</pre>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-primary\">\n      <a role=\"button\" class=\"nav-btn\" aria-pressed=\"true\" href=\"#/admin-view/program-management\" (click)=\"close()\">\n        Manage\n      </a>\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\">OK</button>\n  </div>\n</ng-template>\n\n<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\">\n        Previous\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\">\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\">\n        Next\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'month'\"\n        [class.active]=\"view === 'month'\">\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'week'\"\n        [class.active]=\"view === 'week'\">\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'day'\"\n        [class.active]=\"view === 'day'\">\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"><button class=\"btn btn-primary\">Sample</button>\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-day-view>\n</div>\n\n<br><br>\n\n<button class=\"btn-primary\" (click)=\"addEventModalToggle()\">Create Event</button>\n"

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/content/admin-view/admin-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/content/admin-view/admin-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var AdminViewComponent = (function () {
    function AdminViewComponent(formBuilder, modal) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.view = 'month';
        this.viewDate = new Date();
        this.eventCounter = 0;
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.events = [
            {
                start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 1),
                end: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red
            },
            {
                start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow
            },
            {
                start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                end: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addHours"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = false;
        this.newEventForm = formBuilder.group({
            eventName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required)
        });
    }
    //constructor(private modal: NgbModal) {}
    /*  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
          if ((isSameDay(this.viewDate, date))|| events.length > 0){
            this.activeDayIsOpen = true;
          } else {
            this.addEventModalToggle();
            this.activeDayIsOpen = false;
          }
          alert(events.length);
        }
      }*/
    AdminViewComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameDay"])(this.viewDate, date)) && this.activeDayIsOpen === true) {
                this.activeDayIsOpen = false;
            }
            else if (events.length === 0) {
                this.addEventModalToggle();
                this.clickedDate = date;
            }
            else {
                this.clickedDate = date;
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    AdminViewComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    AdminViewComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    AdminViewComponent.prototype.newEvent = function () {
        this.events.push({
            title: this.newEventForm.value.eventName,
            start: this.clickedDate,
            end: this.clickedDate,
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
        console.log(this.newEventForm);
    };
    AdminViewComponent.prototype.addEventModalToggle = function () {
        this.modal.open(this.addEventModal, { size: 'lg' });
    };
    AdminViewComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
            end: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    AdminViewComponent.prototype.ngOnInit = function () {
        this.newEventForm = this.formBuilder.group({
            eventName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required)
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalContent'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
    ], AdminViewComponent.prototype, "modalContent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('addEventModal'),
        __metadata("design:type", Object)
    ], AdminViewComponent.prototype, "addEventModal", void 0);
    AdminViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-view',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__("../../../../../src/app/feature-modules/event-management-module/content/admin-view/admin-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feature-modules/event-management-module/content/admin-view/admin-view.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _c || Object])
    ], AdminViewComponent);
    return AdminViewComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=admin-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/content/admin-view/program-management/program-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><br><br>\n  <h3>Event Details</h3><br>\n    <form>\n        <div class=\"form-group row\">\n            <label for=\"eventName\" class=\"col-2 col-form-label\">Event Name:</label>\n            <div class=\"col-6\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Event Name\" id=\"eventName\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"dateStart\" class=\"col-2 col-form-label\">Date Start:</label>\n            <div class=\"col-6\">\n                <app-date-picker>\n                </app-date-picker>\n            </div>\n          </div>\n            <div class=\"form-group row\">\n            <label for=\"dateStart\" class=\"col-2 col-form-label\">Date End:</label>\n                <div class=\"col-6\">\n                    <app-date-picker>\n                    </app-date-picker>\n                </div>\n            </div>\n          <div class=\"form-group row\">\n            <label for=\"location\" class=\"col-2 col-form-label\">Location:</label>\n            <div class=\"col-6\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Location\" id=\"location\">\n            </div>\n          </div>\n    </form>\n      <br><br>\n<h3>Program List</h3>\n<table class=\"table\">\n  <thead>\n    <tr>\n    <th>#</th>\n    <th>Program Name</th>\n    <th>Program Start</th>\n    <th>Program End</th>\n    <th>Category</th>\n    <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td scope=\"row\">1</td>\n      <td>Program 1</td>\n      <td>date start</td>\n      <td>date end</td>\n      <td>Ceromony or Contest</td>\n      <td><button role=\"button\" class=\"btn btn-danger btn-block\">Remove</button></td>\n    </tr>\n  </tbody>\n</table>\n<!-- modal trigger -->\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addProgramModal\">\n  Add Program\n</button>\n<!-- modal -->\n<div class=\"modal fade\" id=\"addProgramModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addProgramModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"addProgramModalHeader\">Program Details</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container col-12\">\n          <form>\n            <div class=\"form-group row\">\n              <label for=\"programName\" class=\"col-sm-3 col-form-label\">Program Name:</label>\n              <div class=\"col-sm-9\">\n                  <input type=\"name\" class=\"form-control\" id=\"programName\" placeholder=\"Program Name\"> \n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"programDateStart\" class=\"col-sm-3 col-form-label\">Date Start: </label>\n              <div class=\"col-sm-6\">\n                  <app-date-picker></app-date-picker>\n              </div> \n            </div>\n            <div class=\"form-group row\">\n              <label for=\"programDateEnd\" class=\"col-sm-3 col-form-label\">Date End: </label>\n              <div class=\"col-sm-6\">\n                  <app-date-picker></app-date-picker>\n                </div> \n            </div>\n            <div class=\"form-group row\">\n              <label for=\"programLocation\" class=\"col-sm-3 col-form-label\">Location: </label>\n              <div class=\"col-sm-6\">\n                  <input type=\"name\" class=\"form-control\" id=\"programLocation\" placeholder=\"Location\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-3 col-form-label\" for=\"inlineFormCustomeSelect\">Category: </label>\n              <div class=\"col-sm-6\">\n                <select class=\"custom-select form-control\" id=\"inlineFormCustomSelect\">\n                  <option value=\"1\">Ceremony</option>\n                  <option value=\"2\">Contest</option>\n               </select>\n              </div>\n            </div>\n          </form>\n          \n\n\n\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/content/admin-view/program-management/program-management.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/content/admin-view/program-management/program-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgramManagementComponent = (function () {
    function ProgramManagementComponent() {
    }
    ProgramManagementComponent.prototype.ngOnInit = function () { };
    ProgramManagementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-program-management',
            template: __webpack_require__("../../../../../src/app/feature-modules/event-management-module/content/admin-view/program-management/program-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feature-modules/event-management-module/content/admin-view/program-management/program-management.component.scss"), __webpack_require__("../../../../font-awesome/scss/font-awesome.scss")]
        })
    ], ProgramManagementComponent);
    return ProgramManagementComponent;
}());

//# sourceMappingURL=program-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/content/ordinary-view/ordinary-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  event-viewer works!\n</p>\n<br>\n<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Event Details</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n<!--    <div>\n      Action:\n      <pre>{{ modalData?.action }}</pre>\n    </div>-->\n    <div>\n      Event:\n      <pre>{{ modalData?.event.title }}</pre>\n      Date Start:\n      <pre>{{ modalData?.event.start }}</pre>\n      Date End:\n      <pre>{{ modalData?.event.end }}</pre>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-primary\">\n      <a role=\"button\" class=\"nav-btn\" [href]=\"['/event-management/program-management']\">\n        Manage\n      </a>\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\">OK</button>\n  </div>\n</ng-template>\n\n<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\">\n        Previous\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\">\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\">\n        Next\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'month'\"\n        [class.active]=\"view === 'month'\">\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'week'\"\n        [class.active]=\"view === 'week'\">\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'day'\"\n        [class.active]=\"view === 'day'\">\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-day-view>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/content/ordinary-view/ordinary-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/content/ordinary-view/ordinary-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdinaryViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var OrdinaryViewComponent = (function () {
    function OrdinaryViewComponent(modal) {
        var _this = this;
        this.modal = modal;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.events = [
            {
                start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 1),
                end: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            },
            {
                start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                end: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addHours"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
        this.input = document.getElementById("input");
    }
    OrdinaryViewComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    OrdinaryViewComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    OrdinaryViewComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    OrdinaryViewComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
            end: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    OrdinaryViewComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalContent'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
    ], OrdinaryViewComponent.prototype, "modalContent", void 0);
    OrdinaryViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ordinary-view',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__("../../../../../src/app/feature-modules/event-management-module/content/ordinary-view/ordinary-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feature-modules/event-management-module/content/ordinary-view/ordinary-view.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object])
    ], OrdinaryViewComponent);
    return OrdinaryViewComponent;
    var _a, _b;
}());

//# sourceMappingURL=ordinary-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/event-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div *ngIf=\"(userSession | async) && (userSession|async ).admin\">\n      <app-admin-view></app-admin-view>\n    </div>\n    <div *ngIf=\"(userSession | async) && !(userSession|async ).admin\">\n      <app-ordinary-view></app-ordinary-view>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/event-management.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  margin: 0 0 10px; }\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/event-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventManagementComponent = (function () {
    function EventManagementComponent(ngRedux, eventService) {
        this.ngRedux = ngRedux;
        this.eventService = eventService;
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* CHECK_USER_SESSION */] });
    }
    EventManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* CHANGED_PAGE */], page: 'event-management' });
        this.eventService.GetEvents()
            .subscribe(function (events) {
            _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* FETCH_EVENTS */], events: events });
        }, function (error) { return console.log(error); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(),
        __metadata("design:type", Object)
    ], EventManagementComponent.prototype, "userSession", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(),
        __metadata("design:type", Object)
    ], EventManagementComponent.prototype, "events", void 0);
    EventManagementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-management',
            template: __webpack_require__("../../../../../src/app/feature-modules/event-management-module/event-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feature-modules/event-management-module/event-management.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_event_service__["a" /* EventService */]) === "function" && _b || Object])
    ], EventManagementComponent);
    return EventManagementComponent;
    var _a, _b;
}());

//# sourceMappingURL=event-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/feature-modules/event-management-module/event-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_management_component__ = __webpack_require__("../../../../../src/app/feature-modules/event-management-module/event-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_date_time_picker_module__ = __webpack_require__("../../../../../src/app/shared/components/date-time-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_admin_view_program_management_program_management_component__ = __webpack_require__("../../../../../src/app/feature-modules/event-management-module/content/admin-view/program-management/program-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__content_admin_view_admin_view_component__ = __webpack_require__("../../../../../src/app/feature-modules/event-management-module/content/admin-view/admin-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__content_ordinary_view_ordinary_view_component__ = __webpack_require__("../../../../../src/app/feature-modules/event-management-module/content/ordinary-view/ordinary-view.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventManagementModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EventManagementModule = (function () {
    function EventManagementModule() {
    }
    EventManagementModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__shared_components_date_time_picker_module__["a" /* DateTimePickerModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__event_management_component__["a" /* EventManagementComponent */], __WEBPACK_IMPORTED_MODULE_7__content_admin_view_program_management_program_management_component__["a" /* ProgramManagementComponent */], __WEBPACK_IMPORTED_MODULE_8__content_admin_view_admin_view_component__["a" /* AdminViewComponent */], __WEBPACK_IMPORTED_MODULE_9__content_ordinary_view_ordinary_view_component__["a" /* OrdinaryViewComponent */]]
        })
    ], EventManagementModule);
    return EventManagementModule;
}());

//# sourceMappingURL=event-management.module.js.map

/***/ }),

/***/ "../../../../../src/app/feature-modules/home-module/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature-modules/home-module/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Home</h1>\n  <div *ngIf=\"!(userSession | async) && !(signUpAttempt | async)\">\n    <app-signin></app-signin>\n    <button class=\"btn btn-block btn-success\" (click)=\"onSignUp()\">Sign-up</button>\n  </div>\n  <div *ngIf=\"!(userSession | async) && (signUpAttempt | async)\">\n    <app-signup></app-signup>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feature-modules/home-module/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(ngRedux) {
        this.ngRedux = ngRedux;
        this.isLoging = false;
        this.isRegistering = false;
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* CHECK_USER_SESSION */] });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* CHANGED_PAGE */], page: 'home' });
    };
    HomeComponent.prototype.onSignUp = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["f" /* SIGN_UP_ATTEMPT */], signUpAttempt: true });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "userSession", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "signUpAttempt", void 0);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            /*selector: 'app-home',*/
            template: __webpack_require__("../../../../../src/app/feature-modules/home-module/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feature-modules/home-module/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"]) === "function" && _a || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/feature-modules/home-module/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/feature-modules/home-module/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_component_signup_signup_component__ = __webpack_require__("../../../../../src/app/common-component/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_component_signin_signin_component__ = __webpack_require__("../../../../../src/app/common-component/signin/signin.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__common_component_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_5__common_component_signin_signin_component__["a" /* SigninComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/feature-modules/login-module/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: []
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/guards/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = (function () {
    function LoginGuard() {
    }
    //constructor(private ngRedux: NgRedux<IAppState>, private router: Router){}
    /* canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return true;
    } */
    LoginGuard.prototype.canActivate = function () {
        return this.isLogin();
    };
    LoginGuard.prototype.isLogin = function () {
        var admin;
        this.userSession.subscribe(function (userSession) {
            if (!userSession) {
                admin = false;
            }
            else {
                admin = true;
            }
        });
        if (!admin) {
            console.log("LogInGuard: Please Login to continue");
        }
        else {
            return admin;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(),
        __metadata("design:type", Object)
    ], LoginGuard.prototype, "userSession", void 0);
    LoginGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoginGuard);
    return LoginGuard;
}());

//# sourceMappingURL=login.guard.js.map

/***/ }),

/***/ "../../../../../src/app/route-config/router.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature_modules_home_module_home_component__ = __webpack_require__("../../../../../src/app/feature-modules/home-module/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feature_modules_event_management_module_event_management_component__ = __webpack_require__("../../../../../src/app/feature-modules/event-management-module/event-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feature_modules_event_management_module_content_admin_view_program_management_program_management_component__ = __webpack_require__("../../../../../src/app/feature-modules/event-management-module/content/admin-view/program-management/program-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_login_guard__ = __webpack_require__("../../../../../src/app/guards/login.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerConfig; });




var routerConfig = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__feature_modules_home_module_home_component__["a" /* HomeComponent */] },
    { path: 'event-management', component: __WEBPACK_IMPORTED_MODULE_1__feature_modules_event_management_module_event_management_component__["a" /* EventManagementComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_login_guard__["a" /* LoginGuard */]] },
    { path: 'event-management/program-management', component: __WEBPACK_IMPORTED_MODULE_2__feature_modules_event_management_module_content_admin_view_program_management_program_management_component__["a" /* ProgramManagementComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_login_guard__["a" /* LoginGuard */]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
//# sourceMappingURL=router.config.js.map

/***/ }),

/***/ "../../../../../src/app/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.allEventsUrl = 'event';
    }
    EventService.prototype.GetEvents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('ContentType', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.allEventsUrl, options)
            .map(function (response) { return response.json(); });
    };
    EventService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], EventService);
    return EventService;
    var _a;
}());

//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ServiceModule = (function () {
    function ServiceModule() {
    }
    ServiceModule_1 = ServiceModule;
    ServiceModule.forRoot = function () {
        return {
            ngModule: ServiceModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_4__event_service__["a" /* EventService */]
            ]
        };
    };
    ServiceModule = ServiceModule_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: []
        })
    ], ServiceModule);
    return ServiceModule;
    var ServiceModule_1;
}());

//# sourceMappingURL=service.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionService = (function () {
    function SessionService(http, router) {
        this.http = http;
        this.router = router;
        this.loginUserUrl = 'session/create';
    }
    SessionService.prototype.CheckUserSession = function () {
        var userSession = JSON.parse(sessionStorage.getItem('user'));
        return userSession;
    };
    SessionService.prototype.SaveUserSession = function (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
    };
    SessionService.prototype.SessionDestroy = function () {
        sessionStorage.clear();
        this.router.navigate(['home']);
    };
    SessionService.prototype.CreateUserSession = function (userCredentials) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.loginUserUrl, userCredentials, options)
            .map(function (response) { return response.json(); });
    };
    SessionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], SessionService);
    return SessionService;
    var _a, _b;
}());

//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.newUserUrl = 'user/create';
        this.allUserUrl = 'user';
    }
    UserService.prototype.GetAllUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('ContentType', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.allUserUrl, options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.CreateUser = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.newUserUrl, newUser, options)
            .map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/date-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<!--    <input ngbDatepicker #d1=\"ngbDatepicker\">\n      <div class=\"input-group-addon\"(click)=\"d1.toggle()\">\n      <i class=\"fa fa-calendar\"></i>\n    </div>-->\n\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            readonly\n            class=\"form-control\"\n            [placeholder]=\"placeholder\"\n            name=\"date\"\n            [(ngModel)]=\"dateStruct\"\n            (ngModelChange)=\"updateDate()\"\n            ngbDatepicker\n            #datePicker=\"ngbDatepicker\">\n            <div class=\"input-group-addon\" (click)=\"datePicker.toggle()\">\n            <i class=\"fa fa-calendar\"></i>\n            </div>\n        </div>\n      </div>\n    </form>"

/***/ }),

/***/ "../../../../../src/app/shared/components/date-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/date-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* unused harmony export DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = (function () {
    function DatePickerComponent(cdr) {
        this.cdr = cdr;
        this.onChangeCallback = function () { };
    }
    DatePickerComponent.prototype.writeValue = function (date) {
        this.date = date;
        this.dateStruct = {
            day: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getDate"])(date),
            month: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getMonth"])(date) + 1,
            year: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getYear"])(date)
        };
        this.timeStruct = {
            second: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getSeconds"])(date),
            minute: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getMinutes"])(date),
            hour: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getHours"])(date)
        };
        this.cdr.detectChanges();
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) { };
    DatePickerComponent.prototype.updateDate = function () {
        var newDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setYear"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setMonth"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setDate"])(this.date, this.dateStruct.day), this.dateStruct.month - 1), this.dateStruct.year);
        this.onChangeCallback(newDate);
    };
    DatePickerComponent.prototype.updateTime = function () {
        var newDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setHours"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setMinutes"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setSeconds"])(this.date, this.timeStruct.second), this.timeStruct.minute), this.timeStruct.hour);
        this.onChangeCallback(newDate);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "placeholder", void 0);
    DatePickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-date-picker',
            template: __webpack_require__("../../../../../src/app/shared/components/date-picker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/date-picker.component.scss"), __webpack_require__("../../../../font-awesome/scss/font-awesome.scss")],
            providers: [DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object])
    ], DatePickerComponent);
    return DatePickerComponent;
    var _a;
}());

//# sourceMappingURL=date-picker.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/date-time-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            readonly\n            class=\"form-control\"\n            [placeholder]=\"placeholder\"\n            name=\"date\"\n            [(ngModel)]=\"dateStruct\"\n            (ngModelChange)=\"updateDate()\"\n            ngbDatepicker\n            #datePicker=\"ngbDatepicker\">\n            <div class=\"input-group-addon\" (click)=\"datePicker.toggle()\">\n            <i class=\"fa fa-calendar\"></i>\n            </div>\n        </div>\n      </div>\n    </form>\n    <ngb-timepicker\n      [(ngModel)]=\"timeStruct\"\n      (ngModelChange)=\"updateTime()\"\n      [meridian]=\"true\">\n    </ngb-timepicker>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/date-time-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/date-time-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* unused harmony export DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimePickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DateTimePickerComponent; }),
    multi: true
};
var DateTimePickerComponent = (function () {
    function DateTimePickerComponent(cdr) {
        this.cdr = cdr;
        this.onChangeCallback = function () { };
    }
    DateTimePickerComponent.prototype.writeValue = function (date) {
        this.date = date;
        this.dateStruct = {
            day: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getDate"])(date),
            month: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getMonth"])(date) + 1,
            year: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getYear"])(date)
        };
        this.timeStruct = {
            second: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getSeconds"])(date),
            minute: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getMinutes"])(date),
            hour: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getHours"])(date)
        };
        this.cdr.detectChanges();
    };
    DateTimePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DateTimePickerComponent.prototype.registerOnTouched = function (fn) { };
    DateTimePickerComponent.prototype.updateDate = function () {
        var newDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setYear"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setMonth"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setDate"])(this.date, this.dateStruct.day), this.dateStruct.month - 1), this.dateStruct.year);
        this.onChangeCallback(newDate);
    };
    DateTimePickerComponent.prototype.updateTime = function () {
        var newDate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setHours"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setMinutes"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setSeconds"])(this.date, this.timeStruct.second), this.timeStruct.minute), this.timeStruct.hour);
        this.onChangeCallback(newDate);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DateTimePickerComponent.prototype, "placeholder", void 0);
    DateTimePickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-date-time-picker',
            template: __webpack_require__("../../../../../src/app/shared/components/date-time-picker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/date-time-picker.component.scss"), __webpack_require__("../../../../font-awesome/scss/font-awesome.scss")],
            providers: [DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object])
    ], DateTimePickerComponent);
    return DateTimePickerComponent;
    var _a;
}());

//# sourceMappingURL=date-time-picker.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/date-time-picker.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__date_time_picker_component__ = __webpack_require__("../../../../../src/app/shared/components/date-time-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__date_picker_component__ = __webpack_require__("../../../../../src/app/shared/components/date-picker.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimePickerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DateTimePickerModule = (function () {
    function DateTimePickerModule() {
    }
    DateTimePickerModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbTimepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["a" /* CalendarModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__date_time_picker_component__["a" /* DateTimePickerComponent */], __WEBPACK_IMPORTED_MODULE_6__date_picker_component__["a" /* DatePickerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__date_time_picker_component__["a" /* DateTimePickerComponent */], __WEBPACK_IMPORTED_MODULE_6__date_picker_component__["a" /* DatePickerComponent */]]
        })
    ], DateTimePickerModule);
    return DateTimePickerModule;
}());

//# sourceMappingURL=date-time-picker.module.js.map

/***/ }),

/***/ "../../../../../src/app/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tassign__ = __webpack_require__("../../../../tassign/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tassign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tassign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["a"] = rootReducer;


var INITIAL_STATE = {
    userSession: null,
    usersList: [],
    page: null,
    signedIn: {
        success: null,
        error: null
    },
    signedUp: {
        success: null,
        error: null
    },
    signUpAttempt: false,
    events: []
};
function rootReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions__["h" /* FETCH_USER_LIST */]: return fetchUserList(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["f" /* SIGN_UP_ATTEMPT */]: return signUpAttempt(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["e" /* SIGNED_UP */]: return signedUp(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["d" /* SIGNED_IN */]: return signedIn(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* CHANGED_PAGE */]: return changedPage(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["g" /* SIGNED_OUT */]: return signedOut(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* CHECK_USER_SESSION */]: return checkUserSession(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* FETCH_EVENTS */]: return fetchEvents(state, action);
    }
    return state;
}
var fetchUserList = function (state, action) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        userSession: action.userSession,
        usersList: action.usersList,
        page: state.page,
        signedUp: state.signedUp,
        signUpAttempt: state.signUpAttempt,
        events: state.events
    });
};
var signUpAttempt = function (state, action) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        userSession: state.userSession,
        usersList: state.usersList,
        page: state.page,
        signedIn: state.signedIn,
        signedUp: state.signedUp,
        signUpAttempt: action.signUpAttempt,
        events: state.events
    });
};
var signedUp = function (state, action) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        userSession: action.user,
        usersList: state.usersList.concat(action.user),
        page: state.page,
        signedIn: state.signedIn,
        signedUp: action.signedUp,
        signUpAttempt: action.signUpAttempt,
        events: state.events
    });
};
var signedIn = function (state, action) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        userSession: action.user,
        usersList: state.usersList,
        page: state.page,
        signedIn: action.signedIn,
        signedUp: action.signedUp,
        signUpAttempt: action.signUpAttempt,
        events: state.events
    });
};
var signedOut = function (state, action) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        userSession: null,
        usersList: state.usersList,
        page: state.page,
        signedIn: state.signedIn,
        signedUp: state.signedUp,
        signUpAttempt: state.signUpAttempt,
        events: state.events
    });
};
var checkUserSession = function (state, action) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        userSession: state.userSession,
        usersList: state.usersList,
        page: state.page,
        signedIn: state.signedIn,
        signedUp: state.signedUp,
        signUpAttempt: state.signUpAttempt,
        events: state.events
    });
};
var changedPage = function (state, action) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        userSession: state.userSession,
        usersList: state.usersList,
        page: action.page,
        signedIn: state.signedIn,
        signedUp: state.signedUp,
        signUpAttempt: state.signUpAttempt,
        events: state.events
    });
};
var fetchEvents = function (state, action) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        userSession: state.userSession,
        usersList: state.usersList,
        page: state.page,
        signedIn: state.signedIn,
        signedUp: state.signedUp,
        signUpAttempt: state.signUpAttempt,
        events: action.events
    });
};
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map