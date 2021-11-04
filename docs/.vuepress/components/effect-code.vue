<template>
  <div class="effect-code">
    <component :is="cmp" />
    <hr class="myhr" />
    <div class="utils">
      <a-tooltip>
        <template #title>复制代码</template>
        <Icon icon="cil:copy" />
      </a-tooltip>
      <a-tooltip>
        <template #title>显示代码</template>
        <Icon icon="bi:code-slash" @click="changeShowCode" />
      </a-tooltip>
    </div>

    <div v-show="showCode">
      <slot name="code" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  props: {
    cmp: {
      type: String,
      required: true,
    },
  },
  components: { Icon },
  setup(props) {
    const showCode = ref(false);
    return {
      showCode,
      changeShowCode() {
        showCode.value = !showCode.value;
      },
    };
  },
});
</script>
<style lang="less" scoped>
.effect-code {
  margin: 10px 0;
  border: #eeeeee solid 1px;
  padding: 30px 10px;
  padding-bottom: 10px;
  .myhr {
    border-top: #eeeeee solid 1px;
  }
  .utils {
    text-align: center;
    color: #999999;
    svg {
      margin-left: 20px;
      cursor: pointer;
      &:hover {
        font-size: 16px;
        color: black;
      }
    }
  }
}
</style>


