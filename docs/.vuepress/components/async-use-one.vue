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
    name: {
      title: "姓名",
      type: "string",
      placeholder: "请输入文本",
    },
    nationality: {
      title: "国籍",
      type: "select",
      props: {
        options: [
          { label: "中国", value: "china" },
          { label: "美国", value: "american" },
        ],
      },
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