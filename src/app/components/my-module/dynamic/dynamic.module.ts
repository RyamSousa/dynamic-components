import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DynamicComponent } from "./dynamic.component";
import { DynamicRoutingModule } from "./dynamic-routing.module";

@NgModule({
	imports: [CommonModule, DynamicRoutingModule],
	declarations: [DynamicComponent],
	exports: [DynamicComponent],
})
export class DynamicModule {}
