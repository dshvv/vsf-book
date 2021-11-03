<template>
    <v-schema-form v-model:value="people" :schema="fields" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
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
      required: true,
      placeholder: "请输入文本",
    },
    gender: {
      title: "性别",
      required: true,
      type: "select",
      props: {
        options: [
          {
            label: "男",
            value: "male",
          },
          {
            label: "女",
            value: "female",
          },
        ],
        clearable: true,
      },
    },
  },
};
</script>