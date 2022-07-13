import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./default.component";

export const defaultRoutes: Routes = [
	{
		path: "default",
		loadChildren: () => import("./default.module").then((m) => m.DefaultModule),
	},
];
const routes: Routes = [{ path: "", component: DefaultComponent }];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DefaultRoutingModule {}
