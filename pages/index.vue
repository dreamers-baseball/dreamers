<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]"> 
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]"></div>
    
    <div>
      <BannerHome ref="bannerHomeChild"></BannerHome>
    </div>

    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-16 el-col-lg-offset-4 mt-5">
      <el-card class="box-card rounded-[8px] my-5" :body-style="{ padding: '0px'}" shadow="never" >
        <div slot="header" class="text-2xl font-semibold text-[#003364]">
          <span>最新消息</span>
        </div>
        <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1">
          <el-table :data="tableDataNEWS.slice(0,5)" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'date', order: 'descending'}" :show-header=false>
            <el-table-column prop="date" width='120%'></el-table-column>
            <el-table-column prop="title" ></el-table-column>
            <el-table-column prop="link" width='120%'>
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">開啟</el-button>
              </template>
            </el-table-column>
         </el-table>
        </div>
      </el-card>
    </div>

    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-16 el-col-lg-offset-4">
      <el-row :gutter="40" style="display:flex;flex-wrap:wrap;">
        <el-col class="el-col el-col-12 el-col-xs-24 el-col-sm-24  el-col-md-12 el-col-lg-12 mb-10">
          <el-card class="box-card rounded-[8px] my-5" :body-style="{ padding: '0px'}" shadow="never" >
            <div slot="header" class="text-2xl font-semibold text-[#003364]">
              <span>賽事預告</span>
            </div>
            <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1 mt-7">
              
              <el-col class ="el-col el-col-10 el-col-xs-10 el-col-sm-10 el-col-lg-10 ">
                <div class="text-2xl text-center font-semibold leading-10 text-[#003364] md:text-3xl">
                  {{nextGame.team}}
                </div>
              </el-col>
              <el-col class ="el-col el-col-4 el-col-xs-4 el-col-sm-4 el-col-lg-4 ">
                <div class="text-2xl text-center font-semibold leading-10 text-[#003364] md:text-3xl">
                  V.S
                </div>
              </el-col>
              <el-col class ="el-col el-col-10 el-col-xs-10 el-col-sm-10 el-col-lg-10 ">
                <div class="text-2xl text-center font-semibold leading-10 text-[#003364] md:text-3xl">
                  夢想家
                </div>
              </el-col>

              <el-col class ="el-col my-7">
                <div class="text-base text-center font-semibold text-[#333] md:text-lg">
                  陽明棒球場<br>{{nextGame.date}} {{nextGame.time}}
                </div>
              </el-col>

            </div>
          </el-card>
        </el-col>

        <el-col class="el-col el-col-12 el-col-xs-24 el-col-sm-24  el-col-md-12 el-col-lg-12 mb-10">

          <el-card class="box-card rounded-[8px] my-5" :body-style="{ padding: '0px'}" shadow="never" >
            <div slot="header" class="text-2xl font-semibold text-[#003364]">
              <span>最近賽事</span>
            </div>
            <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1 mt-7">
              
              <el-col class ="el-col el-col-9 el-col-xs-9 el-col-sm-9 el-col-lg-9 ">
                <div class="text-2xl text-center font-semibold leading-10 text-[#003364] md:text-3xl">
                  {{lastGame.team}}
                </div>
              </el-col>
              <el-col class ="el-col el-col-6 el-col-xs-6 el-col-sm-6 el-col-lg-6 ">
                <div class="text-2xl text-center font-semibold leading-10 text-[#003364] md:text-3xl">
                  {{lastGame.competitorScore}}-{{lastGame.ourScore}}
                </div>
              </el-col>
              <el-col class ="el-col el-col-9 el-col-xs-9 el-col-sm-9 el-col-lg-9 ">
                <div class="text-2xl text-center font-semibold leading-10 text-[#003364] md:text-3xl">
                  夢想家
                </div>
              </el-col>

              <el-col class ="el-col my-7">
                <div class="text-base text-center font-semibold text-[#333] md:text-lg">
                  陽明棒球場<br>{{lastGame.date}} 
                </div>
              </el-col>

            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-16 el-col-lg-offset-4">
      <el-row :gutter="40" style="display:flex;flex-wrap:wrap;">
        <el-col class="el-col el-col-12 el-col-xs-24 el-col-sm-24  el-col-md-8 el-col-lg-8 mb-10">
          <el-card class="box-card rounded-[8px]" :body-style="{ padding: '0px'}" shadow="never" >
            <div slot="header" class="text-2xl font-semibold text-[#003364]">
              <span>打者排行</span>
            </div>

            <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1 mt-2">
              <el-tabs v-model="batterTabs">
                <el-tab-pane label="打擊率" name="AVG">
                  <el-table :data="batterRecordAVG" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'AVG', order: 'descending'}" :show-header=false empty-text="沒有資料">
                    <el-table-column prop="number" label="背號"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="AVG" label="打擊率"></el-table-column>
                  </el-table>
                </el-tab-pane>

                <el-tab-pane label="打點" name="RBI">
                  <el-table :data="batterRecordRBI" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'RBI', order: 'descending'}" :show-header=false empty-text="沒有資料">
                    <el-table-column prop="number" label="背號"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="RBI" label="打點"></el-table-column>
                  </el-table>
                </el-tab-pane>

                <el-tab-pane label="全壘打" name="HR">
                  <el-table :data="batterRecordHR" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'HR', order: 'descending'}"  :show-header=false empty-text="沒有資料">
                    <el-table-column prop="number" label="背號"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="HR" label="全壘打"></el-table-column>
                  </el-table>
                </el-tab-pane>

                <el-tab-pane label="安打" name="HIT">
                  <el-table :data="batterRecordHIT" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'HIT', order: 'descending'}" :show-header=false empty-text="沒有資料">
                    <el-table-column prop="number" label="背號"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="HIT" label="安打"></el-table-column>
                  </el-table>
                </el-tab-pane>

                <el-tab-pane label="盜壘" name="SB">
                  <el-table :data="batterRecordSB" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'SB', order: 'descending'}" :show-header=false empty-text="沒有資料">
                    <el-table-column prop="number" label="背號"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="SB" label="盜壘"></el-table-column>
                  </el-table>
                </el-tab-pane>
              </el-tabs>
            </div>
            
          </el-card>
        </el-col>

        <el-col class="el-col el-col-12 el-col-xs-24 el-col-sm-24  el-col-md-8 el-col-lg-8 mb-10">
          <el-card class="box-card rounded-[8px]" :body-style="{ padding: '0px'}" shadow="never" >
            <div slot="header" class="text-2xl font-semibold text-[#003364]">
              <span>投手排行</span>
            </div>

            <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1 mt-2">

              <el-tabs v-model="pitcherTabs">
                <el-tab-pane label="勝投" name="W">
                  <el-table :data="pitcherRecordW" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'W', order: 'descending'}" :show-header=false empty-text="沒有資料">
                    <el-table-column prop="number" label="背號"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="W" label="勝投"></el-table-column>
                  </el-table>
                </el-tab-pane>

                <el-tab-pane label="救援" name="SV">
                  <el-table :data="pitcherRecordSV" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'SV', order: 'descending'}" :show-header=false empty-text="沒有資料">
                    <el-table-column prop="number" label="背號"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="SV" label="救援"></el-table-column>
                  </el-table>
                </el-tab-pane>

                <el-tab-pane label="中繼" name="HLD">
                  <el-table :data="pitcherRecordHLD" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'HLD', order: 'descending'}" :show-header=false empty-text="沒有資料">
                    <el-table-column prop="number" label="背號"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="HLD" label="中繼"></el-table-column>
                  </el-table>
                </el-tab-pane>

                <el-tab-pane label="防禦率" name="ERA">
                  <el-table :data="pitcherRecordERA" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'ERA', order: 'ascending'}" :show-header=false empty-text="沒有資料">
                    <el-table-column prop="number" label="背號"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="ERA" label="防禦率"></el-table-column>
                  </el-table>
                </el-tab-pane>

                <el-tab-pane label="三振" name="K">
                  <el-table :data="pitcherRecordK" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'K', order: 'descending'}" :show-header=false empty-text="沒有資料">
                    <el-table-column prop="number" label="背號"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="K" label="三振"></el-table-column>
                  </el-table>
                </el-tab-pane>

              </el-tabs>

            </div>
            
          </el-card>
        </el-col>

        <el-col class="el-col el-col-12 el-col-xs-24 el-col-sm-24  el-col-md-8 el-col-lg-8 mb-10">
          <el-card class="box-card rounded-[8px]" :body-style="{ padding: '0px'}" shadow="never" >
            <div slot="header" class="text-2xl font-semibold text-[#003364]">
              <span>戰績排行</span>
            </div>

            <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1 mt-2">
              <el-table :data="teamStandings" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'rank', order: 'ascending'}" empty-text="沒有資料">
                <el-table-column prop="team" label="隊伍"></el-table-column>
                <el-table-column prop="win" label="勝" width = "40%"></el-table-column>
                <el-table-column prop="lose" label="敗" width = "40%"></el-table-column>
                <el-table-column prop="rate" label="勝率"></el-table-column>
                <el-table-column prop="GB" label="場差"></el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>

      </el-row>
    </div>

  </div>
</template>

<script>
import '../assets/font.css'
import BannerHome from '~/components/BannerHome.vue'
import Icon from '~/components/Icon.vue'
import ImageCarousel from '~/components/ImageCarousel.vue'

export default {
  components: { 
    BannerHome,
    Icon,
    ImageCarousel,
  },
  data() {
    return {
      batterTabs:'AVG',
      pitcherTabs:'W',
      tableDataNEWS: {}, 

      nextGame:{
        team:'',
        date:'',
        time:'',
      },

      lastGame:{
        team:'',
        competitorScore:'',
        ourScore:'',
        date:'',
      },

      batterRecord:[{
        SB:0,
        HIT:0,
        HR:0,
        RBI:0,
        AVG:0,
        name:'',
        number:'',
      }],
      batterRecordAVG:[],
      batterRecordRBI:[],
      batterRecordHR:[],
      batterRecordHIT:[],
      batterRecordSB:[],

      pitcherRecord:[{
        W:0,
        SV:0,
        HLD:0,
        ERA:0,
        K:'',
      }],

      teamStandings:[]
    };
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex%2 === 1) {
        return 'color-row';
      } 
      return '';
    },
    async fetchData() {

      const apiKey = 'AIzaSyDVX99fm1rQctLiW-BCTyo407Q0w4Ku_78'
      const batterUrlId = 'https://sheets.googleapis.com/v4/spreadsheets/18vDSTH43uJ9FRhKSGLVO-w4_nhO6dO_pl3Ivh3wAy-Q'
      const pitcherUrlId = 'https://sheets.googleapis.com/v4/spreadsheets/11Ym9FNnIqBucTsSOqDiA_RBXTUiJYvyAiN-0ABE3y-0'
      //打者數據--------------
      let batterRecord = []

      const axios = (await import('axios')).default
      const { data:batterSheets} = await axios.get(batterUrlId+"?key="+apiKey)
      const { data:batterData } = await axios.get(batterUrlId+"/values/'"+batterSheets.sheets[batterSheets.sheets.length-1].properties.title+"'!A2:O?key="+apiKey)

      for(let i=0;i<batterData.values.length;i++){
        batterRecord[i] = {
          'number':parseInt(batterData.values[i][0]),
          'name':batterData.values[i][1],
          'GP':parseInt(batterData.values[i][2]),
          'PA':parseInt(batterData.values[i][3]),
          'AB':parseInt(batterData.values[i][4]),
          'HIT':parseInt(batterData.values[i][5]),
          'AVG':parseFloat(batterData.values[i][6]),
          'RBI':parseInt(batterData.values[i][7]),
          'R':parseInt(batterData.values[i][8]),
          'SB':parseInt(batterData.values[i][9]),
          'K':parseInt(batterData.values[i][10]),
          'BB':parseInt(batterData.values[i][12]),
          'SF':parseInt(batterData.values[i][13]),
          'OBP':parseFloat(batterData.values[i][14]),
          'HR':parseInt(batterData.values[i][15]),
        }
      }

      let batterRecordAVG = batterRecord
      let batterRecordRBI = batterRecord
      let batterRecordHR = batterRecord
      let batterRecordHIT = batterRecord
      let batterRecordSB = batterRecord    

      batterRecordAVG = batterRecordAVG.sort((a, b) => (b.AVG - a.AVG));
      batterRecordAVG = batterRecordAVG.slice(0,5)
      batterRecordRBI = batterRecordRBI.sort((a, b) => (b.RBI - a.RBI));
      batterRecordRBI = batterRecordRBI.slice(0,5)
      batterRecordHR = batterRecordHR.sort((a, b) => (b.HR - a.HR));
      batterRecordHR = batterRecordHR.slice(0,5)
      batterRecordHIT = batterRecordHIT.sort((a, b) => (b.HIT - a.HIT));
      batterRecordHIT = batterRecordHIT.slice(0,5)
      batterRecordSB = batterRecordSB.sort((a, b) => (b.SB - a.SB));
      batterRecordSB = batterRecordSB.slice(0,5)

      if(batterRecordHR[0].HR == '0'){
        batterRecordHR = []
      }

      //投手數據--------------
      let pitcherRecord = []
      const { data:pitcherSheets} = await axios.get(pitcherUrlId+"?key="+apiKey)
      const { data:pitcherData } = await axios.get(pitcherUrlId+"/values/'"+pitcherSheets.sheets[pitcherSheets.sheets.length-1].properties.title+"'!A2:O?key="+apiKey)

      for(let i=0;i<pitcherData.values.length;i++){
        pitcherRecord[i] = {
          'number':parseInt(pitcherData.values[i][0]),
          'name':pitcherData.values[i][1],
          'GP':parseInt(pitcherData.values[i][2]),
          'GS':parseInt(pitcherData.values[i][3]),
          'GIF':parseInt(pitcherData.values[i][4]),
          'IP':parseFloat(pitcherData.values[i][5]),
          'W':parseInt(pitcherData.values[i][6]),
          'L':parseInt(pitcherData.values[i][7]),
          'SV':parseInt(pitcherData.values[i][8]),
          'HLD':parseInt(pitcherData.values[i][9]),
          'ERA':parseFloat(pitcherData.values[i][10]),
          'K':parseInt(pitcherData.values[i][12]),
          'BB':parseInt(pitcherData.values[i][12]),
          'HIT':parseInt(pitcherData.values[i][13]),
          'UR':parseInt(pitcherData.values[i][14]),
          'ER':parseInt(pitcherData.values[i][15]),
          'WHIP':parseFloat(pitcherData.values[i][16]),
        }
      }

      let pitcherRecordW = pitcherRecord
      let pitcherRecordSV = pitcherRecord
      let pitcherRecordHLD = pitcherRecord
      let pitcherRecordERA = pitcherRecord
      let pitcherRecordK = pitcherRecord

      for(let i=0;i<pitcherRecordK.length;i++){
        pitcherRecordK[i].K = parseInt(pitcherRecordK[i].K)
      }//K STRING比對有問題 要先轉成INT

      pitcherRecordW = pitcherRecordW.sort((a, b) => (b.W - a.W));
      pitcherRecordW = pitcherRecordW.slice(0,5)
      pitcherRecordSV = pitcherRecordSV.sort((a, b) => (b.SV - a.SV));
      pitcherRecordSV = pitcherRecordSV.slice(0,5)
      pitcherRecordERA = pitcherRecordERA.sort((a, b) => (b.HLD - a.HLD));
      pitcherRecordERA = pitcherRecordERA.slice(0,5)
      pitcherRecordHLD = pitcherRecordHLD.sort((a, b) => (a.ERA - b.ERA));
      pitcherRecordHLD = pitcherRecordHLD.slice(0,5)
      pitcherRecordK = pitcherRecordK.sort((a, b) => (b.K - a.K));
      pitcherRecordK = pitcherRecordK.slice(0,5)

      if(pitcherRecordSV[0].SV == '0'){
        pitcherRecordSV = []
      }

      
     this.batterRecord=batterRecord
     this.batterRecordAVG=batterRecordAVG
     this.batterRecordRBI=batterRecordRBI
     this.batterRecordHR =batterRecordHR 
     this.batterRecordHIT=batterRecordHIT
     this.batterRecordSB =batterRecordSB 

     this.pitcherRecord=pitcherRecord
     this.pitcherRecordW=pitcherRecordW
     this.pitcherRecordSV=pitcherRecordSV
     this.pitcherRecordHLD=pitcherRecordHLD 
     this.pitcherRecordERA=pitcherRecordERA
     this.pitcherRecordK=pitcherRecordK 
      
    },
  },
  watch: {

  },
  async asyncData () {
    let news =[
      {
      date: '2021-05-08',
      title: '夢想家勝率重回五成，皇毅領隊請吃雞排？',
      link:'https://www.facebook.com/DremersBaseballclub/photos/a.139380911191671/287483513048076/'
    },{
      date: '2021-05-01',
      title: '夢想家雨中吞敗',
      link:'https://www.facebook.com/DremersBaseballclub/photos/a.139380911191671/282696666860094/'
    },{
      date: '2021-05-11',
      title: '球經招募中',
      link:'https://www.instagram.com/kevin860320/'
    },{
      date: '2021-11-13',
      title: '狂賀！夢想家第一年成軍即打進季後賽！',
      link:'  https://www.facebook.com/DremersBaseballclub/photos/a.139380911191671/413664767096616'
    },{
      date: '2021-11-16',
      title: '恭喜夢想家本年度高雄草野球聯盟獲得第三名！',
      link:'https://www.facebook.com/DremersBaseballclub/photos/a.139380911191671/415348453594914/'
    }]

    let nextGame = {
      team:'內向咖啡',
      date:'04/07',
      time:'09:00',
    }

    let lastGame = {
      team:'復仇者',
      competitorScore:'4',
      ourScore:'9',
      date:'03/30',
    }

    let teamStandings = [{
        team:'夢想家',
        win:'10',
        lose:'1',
        rate:'0.9',
        GB:'0'
      },{
        team:'內向咖啡',
        win:'0',
        lose:'10',
        rate:'0',
        GB:'10'
      },
    ]

    

    return {
      tableDataNEWS:news,
      nextGame:nextGame,
      lastGame:lastGame,
      
      
      teamStandings:teamStandings,

    }

  },
  mounted() {
    
    this.fetchData();
  }
}
</script>
<style>
.el-card {
  height: auto;
}
.el-tabs__item.is-active {
  color: #003364;
}
.el-tabs__active-bar {
  background-color: #003364;
}
.el-table .color-row {
  background: #C9D6E0;
}

</style>


