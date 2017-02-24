var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { inject, bindable, bindingMode } from 'aurelia-framework';
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

const defaultConfig = {
    enableTime: true,
    altInput: true,
    altFormat: "F j, Y h:i K"
};

export let AureliaFlatpickrCustomElement = (_dec = inject(Element), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = class AureliaFlatpickrCustomElement {

    constructor(element) {
        _initDefineProp(this, 'config', _descriptor, this);

        _initDefineProp(this, 'value', _descriptor2, this);

        this.element = element;
    }

    bind() {
        this._config = Object.assign({}, defaultConfig, this.config);

        this._config.onChange = this._config.onMonthChange = this._config.onYearChange = this.onChange.bind(this);
    }

    attached() {
        this.flatpickr = new Flatpickr(this.element.querySelector('.aurelia-flatpickr'), this._config);

        this.valueChanged();
    }

    onChange(selectedDates, dateStr, instance) {
        if (!this._datesAreSynced(this.value, selectedDates)) {

            switch (selectedDates.length) {
                case 0:
                    this.value = undefined;
                    break;
                case 1:
                    this.value = this._cloneDate(selectedDates[0]);
                    break;
                default:
                    this.value = selectedDates.map(d => this._cloneDate(d));
                    break;
            }
        }
    }

    valueChanged() {
        if (!this.flatpickr) {
            return;
        }

        if (this._datesAreSynced(this.value, this.flatpickr.selectedDates)) {
            return;
        }

        let newDate;

        if (!this.value) {
            newDate = undefined;
        } else if (!Array.isArray(this.value)) {
            newDate = this._cloneDate(this.value);
        } else {
            newDate = this.value.map(d => this._cloneDate(d));
        }

        this.flatpickr.setDate(newDate);
    }

    _datesAreSynced(model, view) {
        model = model || [];

        let modelDates = Array.isArray(model) ? model : [model];

        for (let d = 0; d < modelDates.length; d++) {
            let modelDate = modelDates[d];

            if (view.some(date => date.getTime() === modelDate.getTime())) {
                continue;
            }

            return false;
        }

        for (let d = 0; d < view.length; d++) {
            let viewDate = view[d];

            if (modelDates.some(date => date.getTime() === viewDate.getTime())) {
                continue;
            }

            return false;
        }

        return true;
    }

    _cloneDate(d) {
        return new Date(d.getTime ? d.valueOf() : d);
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'config', [bindable], {
    enumerable: true,
    initializer: function () {
        return {};
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec2], {
    enumerable: true,
    initializer: null
})), _class2)) || _class);