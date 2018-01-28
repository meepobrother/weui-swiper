import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener, HostBinding
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiSwiperProps {
    speed: number;
    loop: boolean;
    children: any[];
}
@Component({
    selector: 'weui-swiper-preview',
    templateUrl: './weui-swiper-preview.html',
    styleUrls: ['./weui-swiper-preview.scss']
})
export class WeuiSwiperPreviewComponent extends ReactComponent<WeuiSwiperProps, any> {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
