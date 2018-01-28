import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener, HostBinding
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';

@Component({
    selector: 'weui-swiper-setting',
    templateUrl: './weui-swiper-setting.html',
    styleUrls: ['./weui-swiper-setting.scss']
})
export class WeuiSwiperSettingComponent extends ReactComponent<any, any> {
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
