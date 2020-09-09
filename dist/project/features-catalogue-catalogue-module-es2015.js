(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-catalogue-catalogue-module"],{

/***/ "RK7A":
/*!********************************************************!*\
  !*** ./src/app/features/catalogue/catalogue.module.ts ***!
  \********************************************************/
/*! exports provided: CatalogueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueModule", function() { return CatalogueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _catalogue_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogue-routing.module */ "ofE7");
/* harmony import */ var _pages_proposals_proposals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/proposals/proposals.page */ "WEHQ");





class CatalogueModule {
}
CatalogueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CatalogueModule });
CatalogueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CatalogueModule_Factory(t) { return new (t || CatalogueModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _catalogue_routing_module__WEBPACK_IMPORTED_MODULE_2__["CatalogueRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CatalogueModule, { declarations: [_pages_proposals_proposals_page__WEBPACK_IMPORTED_MODULE_3__["ProposalsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _catalogue_routing_module__WEBPACK_IMPORTED_MODULE_2__["CatalogueRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_proposals_proposals_page__WEBPACK_IMPORTED_MODULE_3__["ProposalsPage"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _catalogue_routing_module__WEBPACK_IMPORTED_MODULE_2__["CatalogueRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "WEHQ":
/*!**********************************************************************!*\
  !*** ./src/app/features/catalogue/pages/proposals/proposals.page.ts ***!
  \**********************************************************************/
/*! exports provided: ProposalsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalsPage", function() { return ProposalsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProposalsPage {
    constructor() { }
    ngOnInit() {
    }
}
ProposalsPage.ɵfac = function ProposalsPage_Factory(t) { return new (t || ProposalsPage)(); };
ProposalsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProposalsPage, selectors: [["ng-component"]], decls: 2, vars: 0, template: function ProposalsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "proposals works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NhdGFsb2d1ZS9wYWdlcy9wcm9wb3NhbHMvcHJvcG9zYWxzLnBhZ2UuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProposalsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './proposals.page.html',
                styleUrls: ['./proposals.page.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ofE7":
/*!****************************************************************!*\
  !*** ./src/app/features/catalogue/catalogue-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CatalogueRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueRoutingModule", function() { return CatalogueRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_proposals_proposals_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/proposals/proposals.page */ "WEHQ");





const routes = [{ path: 'proposals', component: _pages_proposals_proposals_page__WEBPACK_IMPORTED_MODULE_2__["ProposalsPage"] }];
class CatalogueRoutingModule {
}
CatalogueRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CatalogueRoutingModule });
CatalogueRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CatalogueRoutingModule_Factory(t) { return new (t || CatalogueRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CatalogueRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogueRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-catalogue-catalogue-module-es2015.js.map