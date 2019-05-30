import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTableModule, MatDividerModule],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTableModule, MatDividerModule]
})
export class MaterialModule { }
