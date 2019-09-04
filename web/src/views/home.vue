<template>
  <div id="home">
    <section class="wiper">
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="热爱网球"
            text="This is why we play"
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=54"
            caption="从不停下脚步!"
            text="Never stop"
          ></b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=56"
            caption="在繁华都市中寻找一丝身心愉悦"
            text="Mental pleasure"
          ></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=57"
            caption="网球是心之所向"
            text="Where the Heart Goes"
          ></b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        </b-carousel>

        <!-- <img src="@/assets/img/wiper1.jpg" alt=""> -->
      </div>
    </section>
    <section class="racket">
      <b-container class="bv-example-row">
        <b-row class="gap10">
          <b-col>
            <div>
              <b-card
                title="Wilson"
                :img-src="picUrl"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>威尔逊RF97cv费德勒联名专业碳素网球拍</b-card-text>

                <b-button href="#" variant="primary">查看详情</b-button>
              </b-card>
            </div>
          </b-col>
          <b-col>
            <div>
              <b-card
                title="Wilson"
                :img-src="picUrl"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>威尔逊RF97cv费德勒联名专业碳素网球拍</b-card-text>

                <b-button href="#" variant="primary">查看详情</b-button>
              </b-card>
            </div>
          </b-col>
          <b-col>
            <div>
              <b-card
                title="Wilson"
                :img-src="picUrl"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>威尔逊RF97cv费德勒联名专业碳素网球拍</b-card-text>

                <b-button href="#" variant="primary">查看详情</b-button>
              </b-card>
            </div>
          </b-col>
        </b-row>
        <b-row class="gap10">
          <b-col>
            <div>
              <b-card
                title="Wilson"
                :img-src="picUrl"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>威尔逊RF97cv费德勒联名专业碳素网球拍</b-card-text>

                <b-button href="#" variant="primary">查看详情</b-button>
              </b-card>
            </div>
          </b-col>
          <b-col>
            <div>
              <b-card
                title="Wilson"
                :img-src="picUrl"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>威尔逊RF97cv费德勒联名专业碳素网球拍</b-card-text>

                <b-button href="#" variant="primary">查看详情</b-button>
              </b-card>
            </div>
          </b-col>
          <b-col>
            <div>
              <b-card
                title="Wilson"
                :img-src="picUrl"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>威尔逊RF97cv费德勒联名专业碳素网球拍</b-card-text>

                <b-button href="#" variant="primary">查看详情</b-button>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- 网球科普 -->
    <section class="story">
      <b-card>
        <b-media>
          <b-img slot="aside" :src="picBox[0]" blank-color="#ccc" width="64" alt="placeholder"></b-img>
          <h5 class="mt-0">罗杰·费德勒</h5>
          <p>罗杰·费德勒，1981年8月8日出生于瑞士巴塞尔，瑞士男子职业网球运动员（1998年转为职业），以全面稳定的技术、华丽积极的球风、绅士优雅的形象而著称。众多评论家、现役与退役的选手认为费德勒为史上最伟大球员之一。费德勒不仅在网球领域取得成功，亦在慈善和商业领域活跃。</p>
          <p>费德勒拥有ATP史上最长连续单打世界第一周数的纪录（237周，2004–2008年间），在大满贯男子单打斩获20次冠军 ，10次亚军</p>
        </b-media>
      </b-card>
      <b-card class="gap10">
        <b-media>
          <b-img slot="aside" :src="picBox[1]" blank-color="#ccc" width="64" alt="placeholder"></b-img>
          <h5 class="mt-0">拉菲尔·纳达尔</h5>
          <p>1986年6月3日出生于西班牙马略卡，西班牙职业网球运动员。</p>
          <p>2001年纳达尔转入职业网坛；2005年7月世界排名攀升至第二；2008年8月首次登上世界第一。2010年纳达尔第五次夺得法网冠军。2013年10月他重返世界第一 。截至2019年6月，纳达尔共获得十八个大满贯冠军，包括十二次法网冠军，两次温网冠军，一次澳网冠军和三次美网冠军，并获得过北京奥运会单打冠军和里约奥运会男子双打冠军。 纳达尔是现役男运动员中三位全满贯得主之一，也是历史上男运动员中两位金满贯得主之一。</p>
        </b-media>
      </b-card>
      <b-card class="gap10">
        <b-media>
          <b-img slot="aside" :src="picBox[2]" blank-color="#ccc" width="64" alt="placeholder"></b-img>
          <h5 class="mt-0">李娜</h5>
          <p>李娜，1982年2月26日出生于湖北省武汉市，中国女子网球运动员。2008年北京奥运会女子单打第四名，2011年法国网球公开赛、2014年澳大利亚网球公开赛女子单打冠军，亚洲第一位大满贯女子单打冠军，亚洲历史上女单世界排名最高选手。毕业于华中科技大学。</p>
          <p>
            在李娜十五年的职业生涯里，21次打入WTA女单赛事决赛，并共获得了9个WTA和19个ITF单打冠军，职业生涯总战绩为503胜188负，并以排名世界第六的身份退役。
            2019年7月21日，李娜成为首个入选名人堂的亚洲球员
          </p>
        </b-media>
      </b-card>
    </section>

    <!-- 赛事新闻 -->
    <section class="match">
      <div>
        <h3>ATP网球选手世界排名</h3>
        <b-table striped hover :items="items1" ></b-table>
      </div>
      <div>
        <h3>WTA网球选手世界排名</h3>
        <b-table striped hover :items="items2" ></b-table>
      </div>
    </section>
    <!-- 回到顶部的按钮 -->
    <a class="btn btn-default" href="#" role="button" style="position:fixed;right:0;bottom:0;"><i class="iconfont icon-icon-test" style="font-size:60px;"></i></a>
  </div>
</template>
<script>
import pic1 from "@/assets/img/racket_wilson.png";
import story1 from "@/assets/img/story_federer.png";
import story2 from "@/assets/img/story_nadal.png";
import story3 from "@/assets/img/story_lina.png";
export default {
  name: "home",
  data() {
    return {
      slide: 0,
      sliding: null,
      picUrl: pic1,
      picBox: [story1, story2, story3],
      items1: [
        { 排名: 1, ATP选手: "德约科维奇", 赛事积分: 10000 },
        { 排名: 2, ATP选手: "纳达尔", 赛事积分: 8568 },
        { 排名: 3, ATP选手: "蒂姆", 赛事积分: 5150 },
        { 排名: 4, ATP选手: "费德勒", 赛事积分: 4785 },
        { 排名: 5, ATP选手: "兹维列夫", 赛事积分: 4530 },
        { 排名: 1, ATP选手: "德约科维奇", 赛事积分: 10000 },
        { 排名: 2, ATP选手: "纳达尔", 赛事积分: 8568 },
        { 排名: 3, ATP选手: "蒂姆", 赛事积分: 5150 },
        { 排名: 4, ATP选手: "费德勒", 赛事积分: 4785 },
        { 排名: 5, ATP选手: "兹维列夫", 赛事积分: 4530 }
      ],
      items2: [
        { 排名: 1, ATP选手: "德约科维奇", 赛事积分: 10000 },
        { 排名: 2, ATP选手: "纳达尔", 赛事积分: 8568 },
        { 排名: 3, ATP选手: "蒂姆", 赛事积分: 5150 },
        { 排名: 4, ATP选手: "费德勒", 赛事积分: 4785 },
       { 排名: 5, ATP选手: "兹维列夫", 赛事积分: 4530 },
       { 排名: 1, ATP选手: "德约科维奇", 赛事积分: 10000 },
        { 排名: 2, ATP选手: "纳达尔", 赛事积分: 8568 },
        { 排名: 3, ATP选手: "蒂姆", 赛事积分: 5150 },
        { 排名: 4, ATP选手: "费德勒", 赛事积分: 4785 },
        { 排名: 5, ATP选手: "兹维列夫", 赛事积分: 4530 }
      ]
    };
  },
  methods: {
    // 轮播图代码
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>