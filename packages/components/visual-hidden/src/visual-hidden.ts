import { buildProps, definePropType } from '@el-cool/utils'
import type { StyleValue } from 'vue'

export const visualHiddenProps = buildProps({
    style: {
        type: definePropType<StyleValue>([String, Object, Array]),
        default: () => ({}),
    },
} as const)
