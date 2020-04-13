import Home from '@/views/Home.vue'
import Layout from '@/views/layout.vue'


export const routes = [
  {
    path: '/home',
    name: 'home',
    component: Layout,

    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/home_index',
        name: 'department_index',

        meta: {
          title: '部门首页'
        },
        component: () => import('@/views/department/department_index.vue'),
      },
      // 政策列表页
      {
        path: '/policy_list',
        name: 'policy_list',
        meta: {
          title: '政策清单'
        },
        component: () => import('@/views/department/policy/list.vue'),
      },
      { //政策新增
        path: '/policy_edit',
        name: 'policy_edit',
        meta: {
          title: '政策新增'
        },
        component: () => import('@/views/department/policy/edit.vue'),
      },
    ]
    // 政策，项目，公告，审批
  },
  {
    path: '/',
    redirect: "/home_index",
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login.vue')
  },
  {
    //表单示例页
    path: '/test_form',
    component: () => import('@/views/test_form.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
