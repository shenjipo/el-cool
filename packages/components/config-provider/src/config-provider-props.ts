import { buildProps, definePropType } from '@el-cool/utils'
import { useEmptyValuesProps } from '@el-cool/hooks/use-empty-values'
import { useSizeProp } from '@el-cool/hooks/use-size'

import type { ExtractPropTypes } from 'vue'
import type { Language } from '@el-cool/locale'
import type { ButtonConfigContext } from '@el-cool/components/button'
import type { MessageConfigContext } from '@el-cool/components/message'

export type ExperimentalFeatures = {
    // TO BE Defined
}

export const configProviderProps = buildProps({
    /**
     * @description Controlling if the users want a11y features
     */
    a11y: {
        type: Boolean,
        default: true,
    },
    /**
     * @description Locale Object
     */
    locale: {
        type: definePropType<Language>(Object),
    },
    /**
     * @description global component size
     */
    size: useSizeProp,
    /**
     * @description button related configuration, [see the following table](#button-attributes)
     */
    button: {
        type: definePropType<ButtonConfigContext>(Object),
    },
    /**
     * @description features at experimental stage to be added, all features are default to be set to false                                                                                | ^[object]
     */
    experimentalFeatures: {
        type: definePropType<ExperimentalFeatures>(Object),
    },
    /**
     * @description Controls if we should handle keyboard navigation
     */
    keyboardNavigation: {
        type: Boolean,
        default: true,
    },
    /**
     * @description message related configuration, [see the following table](#message-attributes)
     */
    message: {
        type: definePropType<MessageConfigContext>(Object),
    },
    /**
     * @description global Initial zIndex
     */
    zIndex: Number,
    /**
     * @description global component className prefix (cooperated with [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1)) | ^[string]
     */
    namespace: {
        type: String,
        default: 'el',
    },
    ...useEmptyValuesProps,
} as const)
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
