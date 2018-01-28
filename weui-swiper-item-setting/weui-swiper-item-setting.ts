import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener, HostBinding
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';

@Component({
    selector: 'weui-swiper-item-setting',
    templateUrl: './weui-swiper-item-setting.html',
    styleUrls: ['./weui-swiper-item-setting.scss']
})
export class WeuiSwiperItemSettingComponent extends ReactComponent<any, any> {
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
