import type { PropType } from 'vue';
import type { ChatMessage } from '../types';
declare const _default: import("vue").DefineComponent<{
    messages: {
        type: PropType<ChatMessage[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    messages: {
        type: PropType<ChatMessage[]>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
