import { buildProps } from '@el-cool/utils'
import { datePickerSharedProps, selectionModeWithDefault } from './shared'

import type { ExtractPropTypes } from 'vue'

export const basicMonthTableProps = buildProps({
    ...datePickerSharedProps,
    selectionMode: selectionModeWithDefault('month'),
})

export type BasicMonthTableProps = ExtractPropTypes<typeof basicMonthTableProps>
