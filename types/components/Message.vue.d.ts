import type { PropType } from 'vue';
import type { ChatMessage } from '../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    message: {
        type: PropType<ChatMessage>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    message: {
        type: PropType<ChatMessage>;
        required: true;
    };
}>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
