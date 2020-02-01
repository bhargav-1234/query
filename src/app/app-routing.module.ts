import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WellcomePageComponent } from "./pages/wellcome-page/wellcome-page.component";

const routes: Routes = [{ path: "", component: WellcomePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
