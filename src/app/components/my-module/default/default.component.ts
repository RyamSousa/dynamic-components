import {
	Component,
	ComponentFactory,
	ComponentFactoryResolver,
	ComponentRef,
	OnInit,
	ViewChild,
	ViewContainerRef,
} from "@angular/core";
import { DynamicComponent } from "../dynamic/dynamic.component";

@Component({
	selector: "app-default",
	templateUrl: "./default.component.html",
	styleUrls: ["./default.component.scss"],
})
export class DefaultComponent implements OnInit {
	@ViewChild("dynamicComponent", { read: ViewContainerRef }) container;

	componentType: ComponentFactory<DynamicComponent>;
	componentRef: ComponentRef<DynamicComponent>;

	constructor(private resolver: ComponentFactoryResolver) {}

	ngOnInit(): void {}

	create() {
		this.componentType = this.resolver.resolveComponentFactory(DynamicComponent);
		console.log(this.componentType);
		this.componentRef = this.container.createComponent(this.componentType);
		console.log(this.componentRef);
		this.componentRef.instance;
	}
}
