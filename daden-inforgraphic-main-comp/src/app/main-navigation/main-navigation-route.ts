import { Route } from "@angular/router";
import { InfographicComponent } from "./infographic/infographic.component";
import { AboutComponent } from "./about/about.component";

export default [
    {path: "home", loadComponent: () => {
        import("./home/home.component").then((comp) => comp.HomeComponent)
    }},
    {path: "infographic", component: InfographicComponent},
    {path: "about", component: AboutComponent},
    {path: "", redirectTo: "/home", pathMatch: "full"}

] as Route[];