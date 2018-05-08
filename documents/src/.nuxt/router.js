import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _ae7abed0 = () => import('..\\code\\pages\\tutorial\\table.vue' /* webpackChunkName: "pages_tutorial_table" */).then(m => m.default || m)
const _34b0259e = () => import('..\\code\\pages\\tutorial\\where.vue' /* webpackChunkName: "pages_tutorial_where" */).then(m => m.default || m)
const _dee055bc = () => import('..\\code\\pages\\tutorial\\distinct.vue' /* webpackChunkName: "pages_tutorial_distinct" */).then(m => m.default || m)
const _c63e9960 = () => import('..\\code\\pages\\tutorial\\join.vue' /* webpackChunkName: "pages_tutorial_join" */).then(m => m.default || m)
const _32033f99 = () => import('..\\code\\pages\\tutorial\\operators.vue' /* webpackChunkName: "pages_tutorial_operators" */).then(m => m.default || m)
const _704e8925 = () => import('..\\code\\pages\\tutorial\\skip.vue' /* webpackChunkName: "pages_tutorial_skip" */).then(m => m.default || m)
const _3228873d = () => import('..\\code\\pages\\tutorial\\like.vue' /* webpackChunkName: "pages_tutorial_like" */).then(m => m.default || m)
const _70406021 = () => import('..\\code\\pages\\tutorial\\database.vue' /* webpackChunkName: "pages_tutorial_database" */).then(m => m.default || m)
const _350b47d1 = () => import('..\\code\\pages\\tutorial\\delete.vue' /* webpackChunkName: "pages_tutorial_delete" */).then(m => m.default || m)
const _6fdb2d59 = () => import('..\\code\\pages\\tutorial\\count.vue' /* webpackChunkName: "pages_tutorial_count" */).then(m => m.default || m)
const _58ee78d2 = () => import('..\\code\\pages\\tutorial\\clear.vue' /* webpackChunkName: "pages_tutorial_clear" */).then(m => m.default || m)
const _36fa934f = () => import('..\\code\\pages\\tutorial\\helpers.vue' /* webpackChunkName: "pages_tutorial_helpers" */).then(m => m.default || m)
const _8b8b8822 = () => import('..\\code\\pages\\tutorial\\update.vue' /* webpackChunkName: "pages_tutorial_update" */).then(m => m.default || m)
const _c0e5aa36 = () => import('..\\code\\pages\\tutorial\\promise.vue' /* webpackChunkName: "pages_tutorial_promise" */).then(m => m.default || m)
const _05744ddf = () => import('..\\code\\pages\\tutorial\\insert.vue' /* webpackChunkName: "pages_tutorial_insert" */).then(m => m.default || m)
const _34131909 = () => import('..\\code\\pages\\tutorial\\aggregate.vue' /* webpackChunkName: "pages_tutorial_aggregate" */).then(m => m.default || m)
const _6929e6a2 = () => import('..\\code\\pages\\tutorial\\select.vue' /* webpackChunkName: "pages_tutorial_select" */).then(m => m.default || m)
const _2ebfee5c = () => import('..\\code\\pages\\tutorial\\enums.vue' /* webpackChunkName: "pages_tutorial_enums" */).then(m => m.default || m)
const _1c749f52 = () => import('..\\code\\pages\\tutorial\\between.vue' /* webpackChunkName: "pages_tutorial_between" */).then(m => m.default || m)
const _2065394b = () => import('..\\code\\pages\\tutorial\\in.vue' /* webpackChunkName: "pages_tutorial_in" */).then(m => m.default || m)
const _2adaab09 = () => import('..\\code\\pages\\tutorial\\or.vue' /* webpackChunkName: "pages_tutorial_or" */).then(m => m.default || m)
const _7202be60 = () => import('..\\code\\pages\\tutorial\\installation.vue' /* webpackChunkName: "pages_tutorial_installation" */).then(m => m.default || m)
const _f17c1bf6 = () => import('..\\code\\pages\\tutorial\\limit.vue' /* webpackChunkName: "pages_tutorial_limit" */).then(m => m.default || m)
const _6dd34271 = () => import('..\\code\\pages\\tutorial\\create_table.vue' /* webpackChunkName: "pages_tutorial_create_table" */).then(m => m.default || m)
const _1aa05d72 = () => import('..\\code\\pages\\tutorial\\ignore_case.vue' /* webpackChunkName: "pages_tutorial_ignore_case" */).then(m => m.default || m)
const _1ac2c3a8 = () => import('..\\code\\pages\\tutorial\\create_database.vue' /* webpackChunkName: "pages_tutorial_create_database" */).then(m => m.default || m)
const _a62a61e4 = () => import('..\\code\\pages\\tutorial\\order_by.vue' /* webpackChunkName: "pages_tutorial_order_by" */).then(m => m.default || m)
const _3341d137 = () => import('..\\code\\pages\\tutorial\\adv_sql_example.vue' /* webpackChunkName: "pages_tutorial_adv_sql_example" */).then(m => m.default || m)
const _be04dc60 = () => import('..\\code\\pages\\tutorial\\bulk_insert.vue' /* webpackChunkName: "pages_tutorial_bulk_insert" */).then(m => m.default || m)
const _4c99be70 = () => import('..\\code\\pages\\tutorial\\change_table_design.vue' /* webpackChunkName: "pages_tutorial_change_table_design" */).then(m => m.default || m)
const _bb513aa6 = () => import('..\\code\\pages\\tutorial\\update_with_operator.vue' /* webpackChunkName: "pages_tutorial_update_with_operator" */).then(m => m.default || m)
const _41540f5d = () => import('..\\code\\pages\\tutorial\\export_json.vue' /* webpackChunkName: "pages_tutorial_export_json" */).then(m => m.default || m)
const _7be485d6 = () => import('..\\code\\pages\\tutorial\\drop_database.vue' /* webpackChunkName: "pages_tutorial_drop_database" */).then(m => m.default || m)
const _df72fa3c = () => import('..\\code\\pages\\tutorial\\get_started.vue' /* webpackChunkName: "pages_tutorial_get_started" */).then(m => m.default || m)
const _630a16bd = () => import('..\\code\\pages\\tutorial\\group_by.vue' /* webpackChunkName: "pages_tutorial_group_by" */).then(m => m.default || m)
const _14d5c58c = () => import('..\\code\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/tutorial/table",
			component: _ae7abed0,
			name: "tutorial-table"
		},
		{
			path: "/tutorial/where",
			component: _34b0259e,
			name: "tutorial-where"
		},
		{
			path: "/tutorial/distinct",
			component: _dee055bc,
			name: "tutorial-distinct"
		},
		{
			path: "/tutorial/join",
			component: _c63e9960,
			name: "tutorial-join"
		},
		{
			path: "/tutorial/operators",
			component: _32033f99,
			name: "tutorial-operators"
		},
		{
			path: "/tutorial/skip",
			component: _704e8925,
			name: "tutorial-skip"
		},
		{
			path: "/tutorial/like",
			component: _3228873d,
			name: "tutorial-like"
		},
		{
			path: "/tutorial/database",
			component: _70406021,
			name: "tutorial-database"
		},
		{
			path: "/tutorial/delete",
			component: _350b47d1,
			name: "tutorial-delete"
		},
		{
			path: "/tutorial/count",
			component: _6fdb2d59,
			name: "tutorial-count"
		},
		{
			path: "/tutorial/clear",
			component: _58ee78d2,
			name: "tutorial-clear"
		},
		{
			path: "/tutorial/helpers",
			component: _36fa934f,
			name: "tutorial-helpers"
		},
		{
			path: "/tutorial/update",
			component: _8b8b8822,
			name: "tutorial-update"
		},
		{
			path: "/tutorial/promise",
			component: _c0e5aa36,
			name: "tutorial-promise"
		},
		{
			path: "/tutorial/insert",
			component: _05744ddf,
			name: "tutorial-insert"
		},
		{
			path: "/tutorial/aggregate",
			component: _34131909,
			name: "tutorial-aggregate"
		},
		{
			path: "/tutorial/select",
			component: _6929e6a2,
			name: "tutorial-select"
		},
		{
			path: "/tutorial/enums",
			component: _2ebfee5c,
			name: "tutorial-enums"
		},
		{
			path: "/tutorial/between",
			component: _1c749f52,
			name: "tutorial-between"
		},
		{
			path: "/tutorial/in",
			component: _2065394b,
			name: "tutorial-in"
		},
		{
			path: "/tutorial/or",
			component: _2adaab09,
			name: "tutorial-or"
		},
		{
			path: "/tutorial/installation",
			component: _7202be60,
			name: "tutorial-installation"
		},
		{
			path: "/tutorial/limit",
			component: _f17c1bf6,
			name: "tutorial-limit"
		},
		{
			path: "/tutorial/create:table?",
			component: _6dd34271,
			name: "tutorial-createtable"
		},
		{
			path: "/tutorial/ignore:case?",
			component: _1aa05d72,
			name: "tutorial-ignorecase"
		},
		{
			path: "/tutorial/create:database?",
			component: _1ac2c3a8,
			name: "tutorial-createdatabase"
		},
		{
			path: "/tutorial/order:by?",
			component: _a62a61e4,
			name: "tutorial-orderby"
		},
		{
			path: "/tutorial/adv:sql_example?",
			component: _3341d137,
			name: "tutorial-advsql_example"
		},
		{
			path: "/tutorial/bulk:insert?",
			component: _be04dc60,
			name: "tutorial-bulkinsert"
		},
		{
			path: "/tutorial/change:table_design?",
			component: _4c99be70,
			name: "tutorial-changetable_design"
		},
		{
			path: "/tutorial/update:with_operator?",
			component: _bb513aa6,
			name: "tutorial-updatewith_operator"
		},
		{
			path: "/tutorial/export:json?",
			component: _41540f5d,
			name: "tutorial-exportjson"
		},
		{
			path: "/tutorial/drop:database?",
			component: _7be485d6,
			name: "tutorial-dropdatabase"
		},
		{
			path: "/tutorial/get:started?",
			component: _df72fa3c,
			name: "tutorial-getstarted"
		},
		{
			path: "/tutorial/group:by?",
			component: _630a16bd,
			name: "tutorial-groupby"
		},
		{
			path: "/",
			component: _14d5c58c,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
