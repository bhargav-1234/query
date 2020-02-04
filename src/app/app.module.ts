import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { MaterialModule } from "./shared/material.module";
import { WellcomePageComponent } from "./pages/wellcome-page/wellcome-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BannerComponent } from "./components/banner/banner.component";
import { PetComponent } from "./components/pet/pet.component";
import { AboutComponent } from "./components/about/about.component";
import { TrainersComponent } from "./components/trainers/trainers.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { QuentionsComponent } from "./components/quentions/quentions.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ServisesComponent } from "./components/servises/servises.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CustomerComponent } from "./components/customer/customer.component";

// import { MdbCarouselModule } from  "@angular/core"
// For MDB Angular Pro

@NgModule({
  declarations: [
    AppComponent,
    WellcomePageComponent,
    NavbarComponent,
    BannerComponent,
    PetComponent,
    AboutComponent,
    TrainersComponent,
    PricingComponent,
    QuentionsComponent,
    GalleryComponent,
    BlogComponent,
    ServisesComponent,
    ContactsComponent,
    FooterComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
