import { OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import * as i0 from "@angular/core";
export declare class BasicTableComponent implements OnInit {
    paginator: MatPaginator;
    data: any;
    displayedColumns: any;
    outputSelection: any;
    dataSource: any;
    ngOnInit(): void;
    applyFilter(event: Event): void;
    onRowClick(row: any): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BasicTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BasicTableComponent, "lib-basic-table", never, { "data": "data"; "displayedColumns": "displayedColumns"; }, { "outputSelection": "outputSelection"; }, never, never>;
}
