<template>
  <div class="m-color-container" id="m-color-container" :style="style">
    <div class="select-direction">
      <button v-for="(item, index) in directionList" :key="index" :direction="item" @click="addDirection(item)">{{ item |
        wrapper }}</button>
    </div>

    <div class="select-color">
      <div class="select-input-list" ref="select_color" style="display: inline-block;">
        <input type="color" v-model="selectColor.color1">
        <input type="color" v-model="selectColor.color2">
        <input type="color" v-model="selectColor.color3">
        <input type="color" v-model="selectColor.color4">
        <input type="color" v-model="selectColor.color5">
      </div>

      <button @click="addInputColor()">添加</button>
      <button @click="refresh()">默认</button>
    </div>

    <div class="generate-color">
      <button @click="copy"> 复制 </button>
    </div>

    <div class="generated-code">
      {{ style }}
    </div>
  </div>
</template>

<script>
const direction = [
  'to right',
  'to right top',
  'to right bottom',
  'to bottom',
  'to left bottom',
  'to left',
  'to left top',
  'to top',
  'circle',
]

function clone(s, d) {
  for (let key in s) {
    d[key] = s[key]
  }
}

import { addTip } from "../components/GlobalTip.vue";
export default {
  name: 'BackImageColor',
  data() {
    return {
      message: 'message',
      directionList: direction,
      direction: 'to right',
      selectColor: {
        color1: '#051937',
        color2: '#004d7a',
        color3: '#008793',
        color4: '#00bf72',
        color5: '#a8eb12',
      },
      defaultColor: {},
      addInputDOMS: []
    }
  },
  created() {
    clone(this.selectColor, this.defaultColor)
  },

  computed: {
    style: function () {
      return `background-image: ${this.direction === 'circle' ? 'radial-gradient' : 'linear-gradient'}(${this.direction}${this.colorList})`
    },

    colorList: function () {
      return Object.values(this.selectColor).map(item => `,${item}`).join('')
    }
  },

  filters: {
    wrapper: function (item) {
      return item.replace('to ', '')
    }
  },
  methods: {
    addDirection(dic) {
      this.direction = dic
    },
    copy() {
      let _ = this
      console.log(_.style)
      if (window.navigator && window.navigator.clipboard) {
        window.navigator.clipboard.writeText(_.style).then(res => {
          addTip('复制成功！😁', 'success')
        }).catch(() => {
          console.error('粘贴失败！')
        })
      } else {
        console.warn('浏览器不支持 window.navigator.clipboard ')
      }

    },
    addInputColor() {
      let len = Object.values(this.selectColor).length + 1
      let inputDOM = document.createElement('input')
      let colorAttr = `color${len}`
      inputDOM.style.marginLeft = '5px'
      inputDOM.type = 'color'
      inputDOM.style.border = 'none'
      inputDOM.style.outline = 'none'
      inputDOM.style.padding = '0'
      inputDOM.style.align = 'center'
      inputDOM.style.boxShadow = '10px 10px 14px 1px rgba(00, 00, 00, 0.2)'
      inputDOM.letterSpacing = '0.2em'

      this.$refs.select_color.append(inputDOM)
      this.$set(this.selectColor, colorAttr, '#fff')

      let that = this
      inputDOM.addEventListener('input', (e) => {
        that.selectColor[`${colorAttr}`] = e.target.value
      })

      this.addInputDOMS.push(inputDOM)
    },

    refresh() {
      Object.keys(this.selectColor).forEach(key => this.$delete(this.selectColor, key))
      Object.keys(this.defaultColor).forEach(key => this.$set(this.selectColor, key, this.defaultColor[key]))
      this.addInputDOMS.map(item => item.remove())
    }

  }
}
</script>
<style scoped>
div#m-color-container {
  position: relative;
  width:100%;
  height: 80vh;
}


.select-direction {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display: inline-block;
  width: 100%;
}

button {
  border: none;
  padding: 5px 10px;
  margin: 0 2px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border-radius: 20px;
  transition: all ease-in-out 0.4s;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
}

div.select-color {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
}


.select-input-list input[type='color'] {
  border: none;
  outline: none;
  padding: 0;
  border: 0;
  text-align: center;
  box-shadow: 10px 10px 14px 1px rgba(00, 00, 00, 0.2);
  letter-spacing: 0.094em;
}


div.generate-color {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 180px;
}



div.generated-code {
  position: absolute;
  bottom: 100px;
  background: rgba(255, 255, 255, 0.2);
  display: inline-block;
  width: auto;
  left: 50%;
  transform: translateX(-50%);
  border-left: 5px solid rgba(255, 255, 255, 0.9);
  padding: 10px;
  color: rgba(0, 0, 0, 0.9);
}
</style>
