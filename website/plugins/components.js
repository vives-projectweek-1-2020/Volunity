import Vue from 'vue'
import components from '@trikthom/vue-components'

// temp
import TempDialog from '~/components/old/Dialog'
import TempDatatable from '~/components/old/Datatable'

require('@trikthom/vue-components/src/main.css')

Vue.use(components)

Vue.component('t-dialog', TempDialog)
Vue.component('t-datatable', TempDatatable)
