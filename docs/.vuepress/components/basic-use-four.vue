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
    myFile1: {
      title: "普通上传",
      type: "file",
      props: {
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      },
    },
    myFile2: {
      title: "拖拽上传",
      type: "file",
      props: {
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        mode: "dragger",
      },
    },
    myFile3: {
      title: "卡片上传",
      type: "file",
      props: {
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        mode: "card",
      },
    },
    myFile4: {
      title: "上传图片",
      type: "picture",
      props: {
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
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