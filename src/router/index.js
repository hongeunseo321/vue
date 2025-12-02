import HomeView from "@/views/HomeView.vue";
import FoodDetailView from "@/views/FoodDetailView.vue";
import FoodView from "@/views/FoodView.vue";
import { createRouter, createWebHistory } from "vue-router";
import RecipeView from "@/views/RecipeView.vue";

const routes=[
    {
        path:'/',
        name:"home",
        component:HomeView
    },
    {
        path:'/food',
        name:'food',
        component:FoodView
    },
    {
        path:'/food/detail/:fno',
        name:'food_detail',
        component:FoodDetailView
    },
    {
        path:'/recipe',
        name:'recipe',
        component:RecipeView
    }
]
    /*
        path:'/food/detail/:fno'
            => PathVariable
            => Spring에서도 받을 수 있다
            => 문제점)
                실행 시, localhost:8081 => 포트가 다르면 Spring 연결 X
                Cross-Origin: 포트 번호가 같아야한다
    */
    const router=createRouter({
        history:createWebHistory(process.env.BASE_URL),
        routes
    })
    /*
        Vue Router 생성: createRouter
        createWebHistory: HTML5 history 모드 사용
        설정된 기반으로 네비게이션 관리
    */
export default router;
