/*
 * @Author: niumengfei
 * @Date: 2022-04-19 21:29:34
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-05-04 22:55:24
 */
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight,
      userInfo: {
      }, //用户信息
    }
  },
  actions: {
    setWidthAndHeight({ commit }, value){
      commit('SET_WIDTH_AND_Height', value)
    },
    saveUserInfo({ commit }, value){
      commit('SAVE_USER_INFO', value)
    }
  },
  mutations: {
    SET_WIDTH_AND_Height(state, value){
      state.screenWidth = value[0]
      state.screenHeight = value[1]
    },
    SAVE_USER_INFO(state, value){
      state.userInfo = value
    }
  },
  getters: {
    deviceType(state){
      /*  (()=>{
        let power = this.$store.state.screenWidth / 375; //以iphoneX(宽度375px)为基准
        let bigSize = 10 * power;  //设置rem基准单位, 在iphoneX上 bigSize = 10px = 1rem
        let realSize = bigSize > 40 ? '40px' : bigSize + 'px'; //浏览器最大字体为40px
        document.documentElement.style.fontSize = realSize;
      })() */
      return state.screenWidth > 700 ? 'pc' : 'mobile'
    }
  }
})

export default store