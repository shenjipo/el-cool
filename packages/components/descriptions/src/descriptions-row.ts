import { buildProps, definePropType } from '@el-cool/utils'

import type { DescriptionItemVNode } from './description-item'

export const descriptionsRowProps = buildProps({
    row: {
        type: definePropType<DescriptionItemVNode[]>(Array),
        default: () => [],
    },
} as const)
