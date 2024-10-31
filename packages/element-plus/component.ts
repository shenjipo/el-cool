import { ElAffix } from '@el-cool/components/affix'
import { ElAlert } from '@el-cool/components/alert'
import { ElAutocomplete } from '@el-cool/components/autocomplete'
import { ElAvatar } from '@el-cool/components/avatar'
import { ElBacktop } from '@el-cool/components/backtop'
import { ElBadge } from '@el-cool/components/badge'
import {
    ElBreadcrumb,
    ElBreadcrumbItem,
} from '@el-cool/components/breadcrumb'
import { ElButton, ElButtonGroup } from '@el-cool/components/button'
import { ElCalendar } from '@el-cool/components/calendar'
import { ElCard } from '@el-cool/components/card'
import { ElCarousel, ElCarouselItem } from '@el-cool/components/carousel'
import { ElCascader } from '@el-cool/components/cascader'
import { ElCascaderPanel } from '@el-cool/components/cascader-panel'
import { ElCheckTag } from '@el-cool/components/check-tag'
import {
    ElCheckbox,
    ElCheckboxButton,
    ElCheckboxGroup,
} from '@el-cool/components/checkbox'
import { ElCol } from '@el-cool/components/col'
import { ElCollapse, ElCollapseItem } from '@el-cool/components/collapse'
import { ElCollapseTransition } from '@el-cool/components/collapse-transition'
import { ElColorPicker } from '@el-cool/components/color-picker'
import { ElConfigProvider } from '@el-cool/components/config-provider'
import {
    ElAside,
    ElContainer,
    ElFooter,
    ElHeader,
    ElMain,
} from '@el-cool/components/container'
import { ElDatePicker } from '@el-cool/components/date-picker'
import {
    ElDescriptions,
    ElDescriptionsItem,
} from '@el-cool/components/descriptions'
import { ElDialog } from '@el-cool/components/dialog'
import { ElDivider } from '@el-cool/components/divider'
import { ElDrawer } from '@el-cool/components/drawer'
import {
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
} from '@el-cool/components/dropdown'
import { ElEmpty } from '@el-cool/components/empty'
import { ElForm, ElFormItem } from '@el-cool/components/form'
import { ElIcon } from '@el-cool/components/icon'
import { ElImage } from '@el-cool/components/image'
import { ElImageViewer } from '@el-cool/components/image-viewer'
import { ElInput } from '@el-cool/components/input'
import { ElInputNumber } from '@el-cool/components/input-number'
import { ElLink } from '@el-cool/components/link'
import {
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubMenu,
} from '@el-cool/components/menu'
import { ElPageHeader } from '@el-cool/components/page-header'
import { ElPagination } from '@el-cool/components/pagination'
import { ElPopconfirm } from '@el-cool/components/popconfirm'
import { ElPopover } from '@el-cool/components/popover'
import { ElPopper } from '@el-cool/components/popper'
import { ElProgress } from '@el-cool/components/progress'
import {
    ElRadio,
    ElRadioButton,
    ElRadioGroup,
} from '@el-cool/components/radio'
import { ElRate } from '@el-cool/components/rate'
import { ElResult } from '@el-cool/components/result'
import { ElRow } from '@el-cool/components/row'
import { ElScrollbar } from '@el-cool/components/scrollbar'
import {
    ElOption,
    ElOptionGroup,
    ElSelect,
} from '@el-cool/components/select'
import { ElSelectV2 } from '@el-cool/components/select-v2'
import { ElSkeleton, ElSkeletonItem } from '@el-cool/components/skeleton'
import { ElSlider } from '@el-cool/components/slider'
import { ElSpace } from '@el-cool/components/space'
import { ElStatistic } from '@el-cool/components/statistic'
import { ElCountdown } from '@el-cool/components/countdown'
import { ElStep, ElSteps } from '@el-cool/components/steps'
import { ElSwitch } from '@el-cool/components/switch'
import { ElTable, ElTableColumn } from '@el-cool/components/table'
import { ElAutoResizer, ElTableV2 } from '@el-cool/components/table-v2'
import { ElTabPane, ElTabs } from '@el-cool/components/tabs'
import { ElTag } from '@el-cool/components/tag'
import { ElText } from '@el-cool/components/text'
import { ElTimePicker } from '@el-cool/components/time-picker'
import { ElTimeSelect } from '@el-cool/components/time-select'
import { ElTimeline, ElTimelineItem } from '@el-cool/components/timeline'
import { ElTooltip } from '@el-cool/components/tooltip'
import { ElTooltipV2 } from '@el-cool/components/tooltip-v2'
import { ElTransfer } from '@el-cool/components/transfer'
import { ElTree } from '@el-cool/components/tree'
import { ElTreeSelect } from '@el-cool/components/tree-select'
import { ElTreeV2 } from '@el-cool/components/tree-v2'
import { ElUpload } from '@el-cool/components/upload'
import { ElWatermark } from '@el-cool/components/watermark'
import { ElTour, ElTourStep } from '@el-cool/components/tour'
import { ElAnchor, ElAnchorLink } from '@el-cool/components/anchor'
import { ElSegmented } from '@el-cool/components/segmented'
import { ElWrapperDialog } from '@el-cool/components'
import type { Plugin } from 'vue'

export default [
    ElWrapperDialog,
    ElAffix,
    ElAlert,
    ElAutocomplete,
    ElAutoResizer,
    ElAvatar,
    ElBacktop,
    ElBadge,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElButton,
    ElButtonGroup,
    ElCalendar,
    ElCard,
    ElCarousel,
    ElCarouselItem,
    ElCascader,
    ElCascaderPanel,
    ElCheckTag,
    ElCheckbox,
    ElCheckboxButton,
    ElCheckboxGroup,
    ElCol,
    ElCollapse,
    ElCollapseItem,
    ElCollapseTransition,
    ElColorPicker,
    ElConfigProvider,
    ElContainer,
    ElAside,
    ElFooter,
    ElHeader,
    ElMain,
    ElDatePicker,
    ElDescriptions,
    ElDescriptionsItem,
    ElDialog,
    ElDivider,
    ElDrawer,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElEmpty,
    ElForm,
    ElFormItem,
    ElIcon,
    ElImage,
    ElImageViewer,
    ElInput,
    ElInputNumber,
    ElLink,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubMenu,
    ElPageHeader,
    ElPagination,
    ElPopconfirm,
    ElPopover,
    ElPopper,
    ElProgress,
    ElRadio,
    ElRadioButton,
    ElRadioGroup,
    ElRate,
    ElResult,
    ElRow,
    ElScrollbar,
    ElSelect,
    ElOption,
    ElOptionGroup,
    ElSelectV2,
    ElSkeleton,
    ElSkeletonItem,
    ElSlider,
    ElSpace,
    ElStatistic,
    ElCountdown,
    ElSteps,
    ElStep,
    ElSwitch,
    ElTable,
    ElTableColumn,
    ElTableV2,
    ElTabs,
    ElTabPane,
    ElTag,
    ElText,
    ElTimePicker,
    ElTimeSelect,
    ElTimeline,
    ElTimelineItem,
    ElTooltip,
    ElTooltipV2,
    ElTransfer,
    ElTree,
    ElTreeSelect,
    ElTreeV2,
    ElUpload,
    ElWatermark,
    ElTour,
    ElTourStep,
    ElAnchor,
    ElAnchorLink,
    ElSegmented,
] as Plugin[]
