import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage,LoginComponent]
})
export class TabsPageModule {}
