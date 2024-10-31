import type { InjectionKey, Ref } from 'vue'
import type { UseNamespaceReturn } from '@el-cool/hooks'

export type TableV2Context = {
    isScrolling: Ref<boolean>
    isResetting: Ref<boolean>
    ns: UseNamespaceReturn
}

export const TableV2InjectionKey: InjectionKey<TableV2Context> =
    Symbol('tableV2')
