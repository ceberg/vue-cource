<template>
  <div class="main">
    <title-t1 tname="政策项目"></title-t1>
    <Form :model="formItem" :label-width="105" inline class="search-form Grid">
      <FormItem label="惠企政策" class="Grid-cell u-1of3">
        <Input v-model="formItem.input" placeholder="请输入惠企政策"></Input>
      </FormItem>
      <FormItem label="责任部门" class="Grid-cell u-1of3">
        <Select v-model="formItem.select" placeholder="请输入责任部门">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="政策类型" class="Grid-cell u-1of3">
        <Select v-model="formItem.select" placeholder="请输入政策类型">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="发布日期" class="Grid-cell u-1of3">
        <DatePicker
          type="daterange"
          :start-date="new Date(1991, 4, 14)"
          placement="bottom-end"
          placeholder="Select date"
          style="width: 100%"
        ></DatePicker>
      </FormItem>
      <FormItem label="状态" class="Grid-cell u-1of3">
        <Select v-model="formItem.select">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="适用对象" class="Grid-cell u-1of3">
        <Select v-model="formItem.select">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem class="btn-box">
        <Button type="primary">Submit</Button>
        <Button style="margin-left: 8px">Cancel</Button>
      </FormItem>
    </Form>

    <div class="table-container">
      <title-t2 tname="惠企政策" class="Grid-cell u-1of3">
        <div slot="right" class="btn-group">
          <Button type="info">Info</Button>
          <Button type="success">Success</Button>
          <Button type="warning">Warning</Button>
          <Button type="error">Error</Button>
        </div>
      </title-t2>
      <Table border ref="selection" :columns="columns4" :data="data1"></Table>
      <div class="page-container">
        <Page :total="100" />
      </div>
    </div>
  </div>
</template>

<script>
import titleT1 from "_c/titleT1.vue";
import titleT2 from "_c/titleT2.vue";
// require titleLogo from "@/assets/img/icon-h1.png";
export default {
  data() {
    return {
      formItem: {
        input: "",
        select: "",
        date: "",
        time: ""
      },
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  components: { titleT1, titleT2 }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";

// 三等分布弹性布局
@mixin flex-3 {
  display: flex;
  .Grid-cell.u-1of3 {
    flex: 0 0 33.3333%;
  }
}
// search-form改iview的样式
@mixin search-form-iview {
  .ivu-form-item {
    width: 360px;
    margin-bottom: 14px;
    margin-right: 0;
    .ivu-form-item-label {
      color: #8e90a2;
    }
    .ivu-input {
      // height: 36px;
    }
  }
}
// search-form中的一般部分
@mixin search-form-normal {
  background: #fff;
  padding-top: 20px;
  flex-wrap: wrap;
  padding: 24px 30px;
  .btn-box {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 0;
  }
}

// 三等分布弹性布局
.Grid {
  @include flex-3;
}

// 这部分要抽成混合器的 改组件的样式
.search-form/deep/ {
  @include search-form-iview;
}
// 头部属性的其它属性
.search-form {
  @include search-form-normal;
}

.main {
  background: #eaeaea;
}
.btn-group button {
  margin-left: 10px;
}
.table-container {
  background: #fff;
  margin-top: 10px;
  padding: 10px 30px 10px 30px;
}
.page-container {
  @include page-container;
}
</style>