<template>
  <v-schema-form v-model:value="people" :schema="fields" :actions="actions" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { message } from "ant-design-vue";
const people = ref();
const fields: { [key: string]: any } = {
  props: {
    section: true,
    spaceBetweenSection: 16,
    labelWidth: 120,
  },
  fields: {
    year: {
      title: "年",
      type: "year",
      default: '2022'
    },
    month: {
      title: "月",
      type: "month",
      default: '12'
    },
    date: {
      title: "日",
      type: "date",
      default: '2022-2-22'
    },
    "[startDate, endDate]": {
      title: "日期范围",
      type: "daterange",
      // default: "['2022-1-11','2022-2-22']"
    },
    time: {
      title: "时间",
      type: "time",
      default:'13:01:00'
    },
    timerange: {
      title: "时间范围",
      type: "timerange",
      default:['13:01:00','14:00:00']
    },
    datetime: {
      title: "日期时间",
      type: "datetime",
      default: '2022-2-22 13:01:00'
    },
  },
};
const actions = [
  {
    text: "提交",
    props: { type: "primary" },
    action: ($) => {
      console.log(people.value);
      message.success(JSON.stringify(people.value));
    },
  },
  {
    text: "重置",
    action: () => {
      people.value = {};
    },
  },
];
</script>