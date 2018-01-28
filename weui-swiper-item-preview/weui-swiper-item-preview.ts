import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener, HostBinding
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiSwiperItemProps {
    src: string;
    children: any[];
}
@Component({
    selector: 'weui-swiper-item-preview',
    templateUrl: './weui-swiper-item-preview.html',
    styleUrls: ['./weui-swiper-item-preview.scss']
})
export class WeuiSwiperItemPreviewComponent extends ReactComponent<WeuiSwiperItemProps, any> {
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
