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
      default:'丁少华'
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
      default:'american'
    },
    remarks: {
      title: "备注",
      type: "text",
      default:'我很好，不用担心'
    },
    hobby: {
      title: "爱好",
      type: "expand-select",
      array: true,
      props: {
        options: [
          {
            label: "游戏",
            value: 1,
          },
          {
            label: "学习",
            value: 2,
          },
        ],
      },
      default: '2'
    },
    expandSelect: {
      title: "性别",
      type: "expand-select",
      props: {
        options: [
          { label: "男", value: "male" },
          { label: "女", value: "female" },
        ],
      },
      default: 'male'
    },
    switch: {
      title: "开关",
      type: "boolean",
      property: "disabled",
      default: true
    },
    blogs: {
      title: "博客",
      rules: "url",
      type: "url",
      default: 'http://dshvv.com'
    },
    age: {
      title: "年龄",
      type: "integer",
      min: 0,
      max: 100,
      default: 20
    },
    height: {
      title: "身高",
      type: "double",
      default: 173.6
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