<template>
  <div class="main">
    <!-- <h1>我是404页面</h1>
    <ul>
      <li>
        <a @click="$router.push('/test_form')">表单组件的使用</a>
      </li>
    </ul>-->
    <Form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 300px">
      <div class="label">适用项目</div>
      <FormItem
        v-for="(item, index) in formDynamic.items"
        :key="index"
        :prop="'items.' + index + '.value'"
        :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}"
      >
        <Row>
          <Col span="8">
            <Input type="text" v-model="item.value" placeholder="Enter something..."></Input>
          </Col>
          <Col span="4" offset="1">
            <Button @click="handleAdd">Add</Button>
          </Col>
          <Col span="4" offset="3" v-if="index>0">
            <Button @click="handleRemove(index)">Delete</Button>
          </Col>
        </Row>
      </FormItem>

      <!-- <FormItem>
        <Button type="primary" @click="handleSubmit('formDynamic')">Submit</Button>
        <Button @click="handleReset('formDynamic')" style="margin-left: 8px">Reset</Button>
      </FormItem>-->
      <!-- <p>{{formDynamic}}</p> -->
    </Form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      index: 1,
      formDynamic: {
        items: [
          {
            value: ""
          }
        ]
      }
    };
  },
  methods: {
    // 重置和提交两个功能，要在父组件中调
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    handleAdd() {
      this.formDynamic.items.push({
        value: ""
      });
    },
    handleRemove(index) {
      this.formDynamic.items.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.label {
  position: absolute;
  top: 11px;
}
</style>