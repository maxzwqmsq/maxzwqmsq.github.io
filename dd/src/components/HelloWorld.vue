<style>
.echarts {
  width: 40%;
  height: 500px;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #ddd;
  float: left;
  margin-left: 80px;
}
.chart-boday {
  width: 100%;
  height: 100%;
  float: left;
}
.fl {
    float: left;
}
.input {
    width: 20%;
    height: 20px;
    margin-top: 5px;
}
</style>

<template>
  <div class="chart-boday">
      <div id="tech" class="echarts"></div>
      <div id="people" class="echarts"></div>
      <div class="echarts" style="width=100%;text-align:left;">
        <h1>计划</h1>
            <p>我们团队包含开发与测试两个领域，<br> </p>

            <p> <b>前端开发团队:</b>人员趋于年轻化，虽然经验丰富的人不多，但是新人对新的知识适应和学习能力都比较强，<br></p>
            <p>目前可以分为两个小组，分别由刘洋、孔洋负责<br></p>
            <p>新加入前端团队的人员，可以先参与当前EPG相关的项目，后期可以分出来，成立各自的项目子小组，如遇到大型项目，子小组也可以合并成一个大组，完成项目的开发与交付。<br></p>

            <p><b>IOS与Android:</b>分别有2人组成项目子小组，胡清负责安卓小组，何洋宇负责ios小组，在项目的开发过程中对新人进行培养锻炼。<br></p>

            <p><b>测试团队:</b>包含很多3-5年的骨干人员，是一个十分成熟的测试团队，测试队伍除了负责开发组的项目测试工作之外，还可以承接测试相关的的项目。<br></p>
            <p>目前由武晨负责，同样也可以采用骨干加新人的方式，分成对应的项目子小组，方便面对不同体量的项目进行灵活拆分与合并。<br></p>
            
            <p><b>后端开发:</b>目前是我们的薄弱点，后期我们会注重这块领域的人员招聘与培养。<br></p>

            <p>导师与新人的表</p>
      </div>
      <div class="echarts">
          <h2>修改图标数据</h2>
          <div v-for="(item, index) in techData" v-bind:key="'tech'+index" style="text-align:left;">
            <b>{{item.title}}:</b>
            <input type="text" class="input" v-model="item.val">
          </div>
          <button v-click="getTechData()">refreshTech</button>
          <hr>
         <div v-for="(item, index) in peopleData" v-bind:key="'peop'+index" style="text-align:left;">
            <b>{{item.name}}</b>
            <input type="text" class="input" v-model="item.val">
          </div>
          <button v-click="getPeopleData()">refreshPeop</button>
      </div>
  </div>
  
</template>

<script>
// import ECharts from "vue-echarts/components/ECharts";

// import theme from '../theme.json'
// ECharts.registerTheme('ovilia-green', theme); //引入主题
import echarts from 'echarts'
export default {
  data() {
    return {
        techData: [
            {title: "关键角色", val: 1},
            {title: "骨干员工", val: 2},
            {title: "普通员工", val: 3},
            {title: "新人员工", val: 4},
            ],
        peopleData: [
                        { "name": "vue框架", "val": 4 },
                        { "name": "angular框架", "val": 2 },
                        { "name": "react框架", "val": 2 },
                        { "name": "黑盒测试", "val": 3 },
                        { "name": "性能测试", "val": 2 },
                        { "name": "APP测试", "val": 4 },
                        { "name": "IOS开发", "val": 2 },
                        { "name": "安卓开发", "val": 2 }
                    ],
    }
  },
  created() {
  },

  methods: {
    changeData () {
        var data = [];
       for(var i=0; i<this.peopleData.length; i++){
           data.push(this.peopleData[i].val)
       }
       return data;
    },
    getTechData () {
         // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('tech'))
        // 绘制图表
        var option = {
                        "title": {
                            "text": "多屏人员统计",
                            "subtext": "动态数据",
                            "x": "center"
                        },
                        "tooltip": {
                            "trigger": "item",
                            "formatter": "{a} <br/>{b} : {c} ({d}%)"
                        },
                        "legend": {
                            "show": true,
                            "orient": "vertical",
                            "left": "left",
                            "data": ["关键角色", "骨干员工", "普通员工", "新人员工"]
                        },
                        "series": [
                            {
                            "name": "人员统计",
                            "type": "pie",
                            "radius": "55%",
                            "center": ["50%", "60%"],
                            "label": {
                                "normal":{
                                     "formatter": '{b}：{c}（{d}%）  ',
                                }
                            },
                            "data": [
                                { "value": this.techData[0].val || 10, "name": "关键角色" },
                                { "value": this.techData[1].val || 10, "name": "骨干员工" },
                                { "value": this.techData[2].val || 10, "name": "普通员工" },
                                { "value": this.techData[3].val || 10, "name": "新人员工" }
                            ],
                            "itemStyle": {
                                "emphasis": {
                                "shadowBlur": 10,
                                "shadowOffsetX": 0,
                                "shadowColor": "rgba(0, 0, 0, 0.5)"
                                }
                            }
                            }
                        ]
                    }
        myChart.setOption(option);
    },
    getPeopleData () {
         var myChart = this.$echarts.init(document.getElementById('people'))
         var option = {
                            "title": {
                                "text": "团队技能雷达图"
                            },
                            "tooltip": {},
                            "radar": {
                                // shape: 'circle',
                                "name": {
                                "textStyle": {
                                    "color": "#f8f8f9",
                                    "backgroundColor": "#5cadff",
                                    "borderRadius": 5,
                                    "padding": [8, 5]
                                }
                                },
                                "lineStyle":{
                                    "normal":{
                                        "color":"#f8f8f9!important"
                                    }
                                },
                                "indicator": [
                                                { "name": "vue框架", "max": 5 },
                                                { "name": "angular框架", "max": 5 },
                                                { "name": "react框架", "max": 5 },
                                                { "name": "黑盒测试", "max": 5 },
                                                { "name": "性能测试", "max": 5 },
                                                { "name": "APP测试", "max": 5 },
                                                { "name": "IOS开发", "max": 4 },
                                                { "name": "安卓开发", "max": 4 }
                                            ]
                            },
                            "series": [
                                {
                                "name": "团队技能雷达图",
                                "type": "radar",
                                "emphasis": {
                                    areaStyle: {
                                        color: '#5cadff'
                                    }
                                },
                                "data": [
                                    {
                                    "value": [
                                                this.peopleData[0].val,
                                                this.peopleData[1].val,
                                                this.peopleData[2].val,
                                                this.peopleData[3].val, 
                                                this.peopleData[4].val,
                                                this.peopleData[5].val,
                                                this.peopleData[6].val,
                                                this.peopleData[7].val,
                                            ],
                                    "name": "技能雷达图"
                                    }
                                ]
                                }
                            ]
                        }

         myChart.setOption(option);
    }
  },
  mounted() {
      this.getTechData();
      this.getPeopleData();
  }
};
</script>