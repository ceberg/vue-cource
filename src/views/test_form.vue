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
          label: "输入框",
          prepend: "http://",
          rule: [
            {
              required: true,
              message: "The name cannot be empty",
              trigger: "blur"
            }
          ]
        },
        // {
        //   name: "range",
        //   type: "slider",
        //   value: [10, 40],
        //   label: "范围",
        //   range: true
        // },
        {
          name: "sex",
          type: "i-select",
          value: "",
          label: "下拉",
          clearable: true,
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
          name: "sex2",
          type: "i-select",
          value: "",
          label: "下拉-多选",
          multiple: true,
          clearable: true,
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
          name: "sex5",
          type: "DatePicker",
          value: "",
          label: "日期",
          clearable: true,
          itemtype: "daterange"
        },
        {
          name: "s9",
          type: "i-input",
          value: "",
          label: "输入框",
          itemtype: "textarea",
          autosize: true
        }

        // {
        //   name: "education",
        //   type: "radio-group",
        //   value: 1,
        //   label: "单选",
        //   children: {
        //     type: "radio",
        //     list: [
        //       {
        //         label: 1,
        //         title: "男"
        //       },
        //       {
        //         label: 2,
        //         title: "女"
        //       },
        //       {
        //         label: 3,
        //         title: "其"
        //       }
        //     ]
        //   }
        // },
        // {
        //   name: "skill",
        //   type: "checkbox-group",
        //   value: [],
        //   label: "多选",
        //   children: {
        //     type: "checkbox",
        //     list: [
        //       {
        //         label: 1,
        //         title: "vue"
        //       },
        //       {
        //         label: 2,
        //         title: "nodejs"
        //       },
        //       {
        //         label: 3,
        //         title: "react"
        //       }
        //     ]
        //   }
        // },
        // {
        //   name: "inWork",
        //   type: "i-switch",
        //   value: true,
        //   label: "滑块"
        // }
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