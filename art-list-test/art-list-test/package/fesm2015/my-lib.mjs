import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, ViewChild, Input, Output, NgModule } from '@angular/core';
import * as i3 from '@angular/material/paginator';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import * as i2 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

class MyLibService {
    constructor() { }
}
MyLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: MyLibComponent, selector: "lib-my-lib", ngImport: i0, template: `
    <p>
      my-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-my-lib',
                    template: `
    <p>
      my-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

;
class BasicTableComponent {
    constructor() {
        this.outputSelection = new EventEmitter();
    }
    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.data);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onRowClick(row) {
        this.outputSelection.emit(row);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}
BasicTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BasicTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BasicTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: BasicTableComponent, selector: "lib-basic-table", inputs: { data: "data", displayedColumns: "displayedColumns" }, outputs: { outputSelection: "outputSelection" }, viewQueries: [{ propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true }], ngImport: i0, template: "<p>basic-table works!</p>\n<mat-form-field>\n    <mat-label>Filter</mat-label>\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\" #input>\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onRowClick(row)\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n        <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n</table>\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons aria-label=\"Select page of periodic elements\">\n</mat-paginator>", styles: ["table{width:100%}.mat-mdc-form-field{font-size:14px;width:100%}td,th{width:25%}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i3.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i2.MatCellDef, selector: "[matCellDef]" }, { type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i2.MatNoDataRow, selector: "ng-template[matNoDataRow]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BasicTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-basic-table', template: "<p>basic-table works!</p>\n<mat-form-field>\n    <mat-label>Filter</mat-label>\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\" #input>\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onRowClick(row)\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n        <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n</table>\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons aria-label=\"Select page of periodic elements\">\n</mat-paginator>", styles: ["table{width:100%}.mat-mdc-form-field{font-size:14px;width:100%}td,th{width:25%}\n"] }]
        }], propDecorators: { paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }], data: [{
                type: Input
            }], displayedColumns: [{
                type: Input
            }], outputSelection: [{
                type: Output,
                args: ['outputSelection']
            }] } });

class MyLibModule {
}
MyLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLibModule, declarations: [MyLibComponent,
        BasicTableComponent], imports: [MatTableModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatPaginatorModule], exports: [MyLibComponent,
        BasicTableComponent] });
MyLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLibModule, imports: [[
            MatTableModule,
            ReactiveFormsModule,
            FormsModule,
            MatInputModule,
            MatFormFieldModule,
            MatPaginatorModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyLibComponent,
                        BasicTableComponent
                    ],
                    imports: [
                        MatTableModule,
                        ReactiveFormsModule,
                        FormsModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatPaginatorModule
                    ],
                    exports: [
                        MyLibComponent,
                        BasicTableComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BasicTableComponent, MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=my-lib.mjs.map
