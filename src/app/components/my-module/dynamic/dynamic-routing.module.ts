import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DynamicComponent } from "./dynamic.component";

export const dynamicRoutes: Routes = [
	{
		path: "dynamic",
		loadChildren: () => import("./dynamic.module").then((m) => m.DynamicModule),
	},
];
const routes: Routes = [{ path: "", component: DynamicComponent }];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DynamicRoutingModule {}
