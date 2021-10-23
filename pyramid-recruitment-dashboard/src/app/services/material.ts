import { NgModule } from '@angular/core';
// A file that will contain all material component imports.
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatSliderModule,
        MatSnackBarModule,
        MatRadioModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatSliderModule,
        MatSnackBarModule,
        MatRadioModule,
        MatMenuModule
    ],
})

// MaterialModule used to maintain all angular material modules.
export class MaterialModule { }