<template>
    <div class="t-datatable">
        <table>
            <thead>
                <tr>
                    <th
                        v-if="checkbox"
                        class="checkbox"
                    >
                        <t-checkbox
                            :indeterminate="indeterminate"
                            :value="checkAll"
                            @update:value="onCheckChange"
                        />
                    </th>
                    <th
                        v-for="header in headers"
                        :key="header.value"
                        :style="{width: header.width}"
                    >
                        {{ header.text }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr
                    v-for="(item, index) in computedItems"
                    :key="index"
                >
                    <td
                        v-if="checkbox"
                        class="checkbox"
                    >
                        <t-checkbox
                            :value.sync="selected.includes(item)"
                            @update:value="onItemCheckChange($event, item)"
                        />
                    </td>
                    <td
                        v-for="(header, i) in computedHeaders"
                        :key="i"
                        :style="{ ...header.style, 'text-align': header.right ? 'right' : 'left', 'cursor': header.isClickable ? 'pointer' : 'default' }"
                        @click="clickOnItemCollumn({item, header})"
                        v-html="header.value(item)"
                    />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

    props: {

        headers: {
            type: Array,
            required: true,
        },

        checkbox: {
            type: Boolean,
            required: false,
            default: false,
        },

        items: {
            type: Array,
            required: true,
        },

    },

    data() {
        return {

            selected: [],

        }
    },

    computed: {

        computedHeaders() {
            const headers = []

            this.headers.forEach((header) => {
                headers.push({
                    ...header,
                    value(item) {
                        if (header.extractor) return header.extractor(item)
                        else return item[header.value]
                    },
                    isClickable: header.isClickable === undefined ? true : header.isClickable,
                })
            })

            return headers
        },

        computedItems() {
            const items = JSON.parse(JSON.stringify(this.items))
            items.sort((a, b) => ((a.name > b.name) ? 1 : -1))
            return items
        },

        indeterminate() {
            return this.selected.length !== this.computedItems.length
        },

        checkAll() {
            return this.selected.length > 0
        },

    },

    methods: {

        clickOnItemCollumn({item, header}) {
            if (header.isClickable) this.$emit('click', item)
        },

        onCheckChange(state) {
            if (state) this.computedItems.forEach((item) => this.onItemCheckChange(true, item))
            else this.selected = []
        },

        onItemCheckChange(state, item) {
            if (state) {
                if (!this.selected.includes(item)) this.selected.push(item)
                else if (this.selected.includes(item)) this.selected.splice(this.selected.indexOf(item), 1)
            }
        },

    },

}
</script>

<style>
.t-datatable {
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 4px;
    text-align: left;
    color: rgba(0,0,0,.87);
}
.t-datatable table {
    width: 100%;
    border: 0;
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;
    border-collapse: collapse;
}
thead tr {
    height: 56px;
}
thead th {
    font-weight: 500;
    font-size: .875rem;
    font-family: 'Product Sans Medium';
}
thead th.checkbox {
    padding-left: 6.5px;
    padding-right: 7.5px;
    width: 40px;
}
tbody td.checkbox {
    padding-left: 6.5px;
    padding-right: 7.5px;
}
thead th:not(.checkbox) {
    padding-left: 16px;
    padding-right: 16px;
}
tbody {
    min-height: 62px;
}
tbody tr {
    height: 52px;
    border-top-color: rgba(0,0,0,.12);
    border-top-width: 1px;
    border-top-style: solid;
}
tbody td {
    font-size: .875rem;
    font-family: 'Product Sans';
}
tbody td:not(.checkbox) {
    padding-left: 16px;
    padding-right: 16px;
}
tbody tr:hover {
    background-color: rgba(0,0,0,.06);
    transition: background-color 100ms;
}
tbody td, thead th {
    cursor: default;
}
</style>
