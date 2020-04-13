<template>
  <div class="form-wrapper">
    <form-group :list="formList" url></form-group>
  </div>
</template>

<script>
import formGroup from "_c/formGroup.vue";
export default {
  components: { formGroup },
  data() {
    return {
      formList: [
        {
          name: "name",
          type: "i-input",
          value: "",
          label: "政策名称",
          rule: [
            {
              required: true,
              message: "The name cannot be empty",
              trigger: "blur"
            }
          ]
        },
        {
          name: "name",
          type: "i-input",
          value: "",
          label: "政策文号",
          rule: [
            {
              required: true,
              message: "",
              trigger: "blur"
            }
          ]
        },

        {
          name: "s1",
          type: "i-select",
          value: "",
          label: "政策类型",
          children: {
            type: "i-option",
            list: [
              {
                value: "man",
                title: "男"
              },
              {
                value: "woman",
                title: "女"
              }
            ]
          }
        },
        {
          name: "s2",
          type: "i-select",
          value: "",
          label: "政策层级",
          children: {
            type: "i-option",
            list: [
              {
                value: "man",
                title: "男"
              },
              {
                value: "woman",
                title: "女"
              }
            ]
          }
        },
        {
          name: "s2",
          type: "i-select",
          value: "",
          label: "责任部门",
          children: {
            type: "i-option",
            list: [
              {
                value: "man",
                title: "男"
              },
              {
                value: "woman",
                title: "女"
              }
            ]
          }
        },
        {
          name: "name",
          type: "i-input",
          value: "",
          label: "联系电话",
          rule: [
            {
              required: true,
              message: "The name cannot be empty",
              trigger: "blur"
            }
          ]
        },
        {
          name: "s2",
          type: "i-select",
          value: "",
          label: "协同部门",
          children: {
            type: "i-option",
            list: [
              {
                value: "man",
                title: "男"
              },
              {
                value: "woman",
                title: "女"
              }
            ]
          }
        },
        {
          name: "name",
          type: "i-input",
          value: "",
          label: "原文链接",
          rule: [
            {
              required: true,
              message: "The name cannot be empty",
              trigger: "blur"
            }
          ]
        },
        {
          name: "s2",
          type: "i-select",
          value: "",
          label: "适用对象",
          children: {
            type: "i-option",
            list: [
              {
                value: "man",
                title: "男"
              },
              {
                value: "woman",
                title: "女"
              }
            ]
          }
        },
        {
          name: "name",
          type: "i-input",
          value: "",
          label: "适用项目",
          rule: [
            {
              required: true,
              message: "The name cannot be empty",
              trigger: "blur"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.form-wrapper {
  padding: 20px;
}
</style>