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
    myRange: {
      title: "范围",
      type: "range",
      default:[10,50]
    },
    myRate: {
      title: "评分",
      type: "rate",
      default:2
    },
    myTransfer: {
      title: "穿梭框",
      type: "transfer",
      enum: [
        {
          label: "选项1",
          value: "1",
        },
        {
          label: "选项2",
          value: "2",
        },
      ],
      default:['2']
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