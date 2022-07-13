import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DefaultRoutingModule } from "./default-routing.module";
import { DynamicModule } from "../dynamic/dynamic.module";

@NgModule({
	imports: [CommonModule, DefaultRoutingModule, DynamicModule],
	declarations: [DefaultComponent],
	exports: [DefaultComponent],
})
export class DefaultModule {}
