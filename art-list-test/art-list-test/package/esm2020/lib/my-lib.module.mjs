import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i0 from "@angular/core";
export class MyLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL215LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBcUJqRSxNQUFNLE9BQU8sV0FBVzs7eUdBQVgsV0FBVzswR0FBWCxXQUFXLGlCQWhCcEIsY0FBYztRQUNkLG1CQUFtQixhQUduQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGtCQUFrQixhQUdsQixjQUFjO1FBQ2QsbUJBQW1COzBHQUdWLFdBQVcsWUFiYjtZQUNQLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsV0FBVztZQUNYLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsa0JBQWtCO1NBQ25COzRGQU1VLFdBQVc7a0JBbEJ2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3dCQUNkLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLG1CQUFtQjtxQkFDcEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTXlMaWJDb21wb25lbnQgfSBmcm9tICcuL215LWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFzaWNUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vYmFzaWMtdGFibGUvYmFzaWMtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNeUxpYkNvbXBvbmVudCxcbiAgICBCYXNpY1RhYmxlQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE15TGliQ29tcG9uZW50LFxuICAgIEJhc2ljVGFibGVDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYk1vZHVsZSB7IH1cbiJdfQ==