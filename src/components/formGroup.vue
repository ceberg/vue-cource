<template>
  <div class>
    <Form
      ref="form"
      :label-width="labelWidth"
      :model="valueList"
      :rules="rules"
      v-if="Object.keys(valueList).length"
      :inline="false"
    >
      <FormItem
        v-for="(item,index) in list"
        :label="item.label"
        lable-position="left"
        :prop="item.name"
        :key="`${_uid}_${index}`"
      >
        <!-- 单独给日期加的
        -->
        <!-- <p>{{item.type}}</p> -->
        <!-- <component :is="item.type"></component> -->
        <component
          :is="item.type"
          :range="item.range"
          v-model="valueList[item.name]"
          :multiple="item.multiple"
          :clearable="item.clearable"
          :type="item.itemtype"
          :autosize="item.autosize"
        >
          <span slot="prepend" v-if="item.type=='i-input' && item.prepend">{{item.prepend}}</span>
          <template v-if="item.children">
            <component
              v-for="(child,i) in item.children.list"
              :is="item.children.type"
              :key="`${_uid}_${index}_${i}`"
              :value="child.value"
              :label="child.label"
            >{{child.title}}</component>
          </template>
        </component>
      </FormItem>
      <FormItem>
        <Button @click="handleSubmit">提交</Button>
        <Button @click="handleReset">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import clonedeep from "clonedeep";
import titleT1 from "./titleT1.vue";
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: Number,
      default: 100
    }
  },
  created() {
    // console.log(this._uid);
  },
  components: { titleT1 },
  data() {
    return {
      initValueList: [], //初始数据
      valueList: {}, //提交数据
      rules: {}, //规则
      name: "title-t1"
    };
  },
  watch: {
    list() {
      this.setInitValue();
    }
  },
  methods: {
    setInitValue() {
      this.initValueList = this.list.map(item => item.value);
      let rules = {};
      let valueList = {};
      let initValueList = {};
      this.list.forEach(item => {
        rules[item.name] = item.rule;
        valueList[item.name] = item.value;
        initValueList[item.name] = item.value;
      });
      this.rules = rules;
      this.valueList = valueList;
      this.initValueList = initValueList;
    },
    handleReset() {
      this.valueList = clonedeep(this.initValueList);
    },
    handleSubmit() {
      // 也可以动态传url,把结果传出去 5122
      // 应该是提交时把组件中人值传出来，涉及到父组件调子组件的方式方法
      this.$refs.form.validate(valid => {
        if (valid) {
          // 调接口
        }
      });
    }
  },
  mounted() {
    this.setInitValue();
  }
};
</script>

<style>
</style>
