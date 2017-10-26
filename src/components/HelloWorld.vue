<template>
  <div class="hello">
    <banner></banner>
    <div class="list-recom">
      <el-row>
        <el-col :span="6" v-for="(img,index) in recomImg" :key="index">
          <img :src="img" alt="">
        </el-col>
      </el-row>
    </div>
    <div class="fruit-kinds">
      <div class="til clearfix">
          <span class="more">更多></span>
          <div class="textPic"><img class="lazy" data-original="http://www.fruitday.com/images/index/t4.png" src="http://www.fruitday.com/images/index/t4.png" style="display: inline;"></div>
      </div>
      <div class="good-list clearfix">
          <ul class="clearfix">
            <li class="pro_list" pid="25295" ppid="28498" type="normal" pno="2170822119">
              <div class="s-img">

                  <img class="lazy" data-original="https://imgjd2.fruitday.com/images/product_pic/3313/1/1-270x270-3313-KY3Y19TF.jpg" alt="" src="https://imgjd2.fruitday.com/images/product_pic/3313/1/1-270x270-3313-KY3Y19TF.jpg" style="display: inline;">

              </div>
              <div class="s-info">
                <div class="s-name">
                  大个云南蒙自石榴（礼盒装）
                </div>
                <div class="s-unit">
                  ￥128.00/12个
                </div>
                <div class="s-che" data-pid="25295" data-price="128.00"></div>
              </div>
            </li>
            <li class="pro_list" pid="12514" ppid="15178" type="normal" pno="10020">
              <div class="s-img">

                  <img class="lazy" data-original="https://imgjd3.fruitday.com/images/product_pic/2152/1/1-270x270-2152-P4K1946W.jpg" alt="" src="https://imgjd3.fruitday.com/images/product_pic/2152/1/1-270x270-2152-P4K1946W.jpg" style="display: inline;">

              </div>
              <div class="s-info">
                <div class="s-name">
                  心想事成礼盒
                </div>
                <div class="s-unit">
                  ￥218.00/礼盒
                </div>
                <div class="s-che" data-pid="12514" data-price="218.00"></div>
              </div>
            </li>
            <li class="pro_list" pid="23751" ppid="26960" type="normal" pno="2170620401">
              <div class="s-img">

                  <img class="lazy" data-original="https://imgjd2.fruitday.com/images/product_pic/2645/1/1-270x270-2645-U222WBHU.jpg" alt="" src="https://imgjd2.fruitday.com/images/product_pic/2645/1/1-270x270-2645-U222WBHU.jpg" style="display: inline;">

              </div>
              <div class="s-info">
                <div class="s-name">
                  大个佳沛新西兰阳光金奇异果礼盒
                </div>
                <div class="s-unit">
                  ￥148.00/16个
                </div>
                <div class="s-che" data-pid="23751" data-price="148.00"></div>
              </div>
            </li>
            <li class="pro_list" pid="16464" ppid="19700" type="normal" pno="201512266">
              <div class="s-img">

                  <img class="lazy" data-original="https://imgjd4.fruitday.com/images/product_pic/424/1/1-270x270-424-C59THSTC.jpg" alt="" src="https://imgjd4.fruitday.com/images/product_pic/424/1/1-270x270-424-C59THSTC.jpg" style="display: inline;">

              </div>
              <div class="s-info">
                <div class="s-name">
                  低糖礼盒
                </div>
                <div class="s-unit">
                  ￥218.00/1盒
                </div>
                <div class="s-che" data-pid="16464" data-price="218.00"></div>
              </div>
            </li>
            <li class="pro_list" pid="25263" ppid="28466" type="normal" pno="2170804116">
              <div class="s-img">

                <img class="lazy" data-original="https://imgjd4.fruitday.com/images/product_pic/3129/1/1-270x270-3129-YT9U9FUY.jpg" alt="" src="https://imgjd4.fruitday.com/images/product_pic/3129/1/1-270x270-3129-YT9U9FUY.jpg" style="display: inline;">

              </div>
              <div class="s-info">
                <div class="s-name">
                  明月千里礼盒A款（含月饼）
                </div>
                <div class="s-unit">
                  ￥218.00/1盒
                </div>
                <div class="s-che" data-pid="25263" data-price="218.00"></div>
              </div>
            </li>
            <li class="pro_list" pid="25259" ppid="28462" type="normal" pno="2170804120">
            <div class="s-img">

                <img class="lazy" data-original="https://imgjd3.fruitday.com/images/product_pic/3132/1/1-270x270-3132-3F7P816B.jpg" alt="" src="https://imgjd3.fruitday.com/images/product_pic/3132/1/1-270x270-3132-3F7P816B.jpg" style="display: inline;">

            </div>
            <div class="s-info">
              <div class="s-name">
                月满乾坤礼盒A款（含月饼）
              </div>
              <div class="s-unit">
                ￥268.00/1盒
              </div>
              <div class="s-che" data-pid="25259" data-price="268.00"></div>
            </div>
          </li>
          <li class="pro_list" pid="25286" ppid="28489" type="normal" pno="2170804123">
            <div class="s-img">

                <img class="lazy" data-original="https://imgjd3.fruitday.com/images/product_pic/3138/1/1-270x270-3138-R81A2UYP.jpg" alt="" src="https://imgjd3.fruitday.com/images/product_pic/3138/1/1-270x270-3138-R81A2UYP.jpg" style="display: inline;">

            </div>
            <div class="s-info">
              <div class="s-name">
                月满乾坤礼盒三选一提货券
              </div>
              <div class="s-unit">
                ￥268.00/1张
              </div>
                <div class="s-che" data-pid="25286" data-price="268.00"></div>
            </div>
          </li>
          <li class="pro_list" pid="25285" ppid="28488" type="normal" pno="2170804115">
            <div class="s-img">

                <img class="lazy" data-original="https://imgjd4.fruitday.com/images/product_pic/3137/1/1-270x270-3137-XH1F5SC5.jpg" alt="" src="https://imgjd4.fruitday.com/images/product_pic/3137/1/1-270x270-3137-XH1F5SC5.jpg" style="display: inline;">

            </div>
            <div class="s-info">
              <div class="s-name">
                清风明月礼盒二选一提货券
              </div>
              <div class="s-unit">
                ￥168.00/1张
              </div>
              <div class="s-che" data-pid="25285" data-price="168.00"></div>
            </div>
          </li>
          <li class="pro_list" pid="12516" ppid="15180" type="normal" pno="2150301109">
            <div class="s-img">

                <img class="lazy" data-original="https://imgjd2.fruitday.com/images/product_pic/3356/1/1-270x270-3356-Y554RX3A.jpg" alt="" src="https://imgjd2.fruitday.com/images/product_pic/3356/1/1-270x270-3356-Y554RX3A.jpg" style="display: inline;">

            </div>
            <div class="s-info">
              <div class="s-name">
                与众不同礼盒
              </div>
              <div class="s-unit">
                ￥288.00/1盒
              </div>
              <div class="s-che" data-pid="12516" data-price="288.00"></div>
            </div>
          </li>
          <li class="pro_list" pid="12514" ppid="15178" type="normal" pno="10020">
            <div class="s-img">

                <img class="lazy" data-original="https://imgjd3.fruitday.com/images/product_pic/2152/1/1-270x270-2152-P4K1946W.jpg" alt="" src="https://imgjd3.fruitday.com/images/product_pic/2152/1/1-270x270-2152-P4K1946W.jpg" style="display: inline;">

            </div>
            <div class="s-info">
              <div class="s-name">
                心想事成礼盒
              </div>
              <div class="s-unit">
                ￥218.00/礼盒
              </div>
              <div class="s-che" data-pid="12514" data-price="218.00"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="fruit-kinds ">
    <div class="til clearfix">
        <a href="/prolist/index/40" target="_blank" class="more">更多 &gt;</a>
        <ul class="pull-right">
                                                </ul>
        <div class="textPic"><img class="lazy" data-original="http://www.fruitday.com/images/index/t2.png" src="http://www.fruitday.com/images/index/t2.png" style="display: inline;"></div>
    </div>
        <div class="good-list clearfix">
        <ul class="clearfix">
                                    <li class="pro_list" pid="24115" ppid="27324" type="normal" pno="2170601104">
                <div class="s-img">
                    <a href="/prodetail/index/24115" target="_blank">
                                                <img class="lazy" data-original="https://imgjd4.fruitday.com/images/product_pic/2538/1/1-270x270-2538-DDPBW9KU.jpg" alt="" src="https://imgjd4.fruitday.com/images/product_pic/2538/1/1-270x270-2538-DDPBW9KU.jpg" style="display: inline;">
                                            </a>
                </div>
                <div class="s-info">
                    <div class="s-name">
                        新疆西州蜜瓜
                    </div>
                    <div class="s-unit">
                        ￥29.90/1个
                    </div>
                    <div class="s-che" data-pid="24115" data-price="29.90"></div>
                </div>
                            </li>
                        <li class="pro_list" pid="24086" ppid="27295" type="normal" pno="2170703123">
                <div class="s-img">
                    <a href="/prodetail/index/24086" target="_blank">
                                                <img class="lazy" data-original="https://imgjd3.fruitday.com/images/product_pic/2686/1/1-270x270-2686-R572HBR2.jpg" alt="" src="https://imgjd3.fruitday.com/images/product_pic/2686/1/1-270x270-2686-R572HBR2.jpg" style="display: inline;">
                                            </a>
                </div>
                <div class="s-info">
                    <div class="s-name">
                        波姬无花果
                    </div>
                    <div class="s-unit">
                        ￥49.90/4盒（190-220g/盒）
                    </div>
                    <div class="s-che" data-pid="24086" data-price="49.90"></div>
                </div>
                            </li>
                        <li class="pro_list" pid="26031" ppid="29232" type="normal" pno="2170916101">
                <div class="s-img">
                    <a href="/prodetail/index/26031" target="_blank">
                                                <img class="lazy" data-original="https://imgjd3.fruitday.com/images/product_pic/3314/1/1-270x270-3314-63THWA9H.jpg" alt="" src="https://imgjd3.fruitday.com/images/product_pic/3314/1/1-270x270-3314-63THWA9H.jpg" style="display: inline;">
                                            </a>
                </div>
                <div class="s-info">
                    <div class="s-name">
                        巴克艾嘎啦果
                    </div>
                    <div class="s-unit">
                        ￥29.90/8个
                    </div>
                    <div class="s-che" data-pid="26031" data-price="29.90"></div>
                </div>
                            </li>
                        <li class="pro_list" pid="26038" ppid="29239" type="normal" pno="2170914123">
                <div class="s-img">
                    <a href="/prodetail/index/26038" target="_blank">
                                                <img class="lazy" data-original="https://imgjd2.fruitday.com/images/product_pic/3360/1/1-270x270-3360-TAUPW83T.jpg" alt="" src="https://imgjd2.fruitday.com/images/product_pic/3360/1/1-270x270-3360-TAUPW83T.jpg" style="display: inline;">
                                            </a>
                </div>
                <div class="s-info">
                    <div class="s-name">
                        福建琯溪红玉蜜柚
                    </div>
                    <div class="s-unit">
                        ￥39.90/2个
                    </div>
                    <div class="s-che" data-pid="26038" data-price="39.90"></div>
                </div>
                            </li>
                        <li class="pro_list" pid="25846" ppid="29048" type="normal" pno="201411661">
                <div class="s-img">
                    <a href="/prodetail/index/25846" target="_blank">
                                                <img class="lazy" data-original="https://imgjd4.fruitday.com/images/product_pic/70/1/1-270x270-70-H8CHR7XD.jpg" alt="" src="https://imgjd4.fruitday.com/images/product_pic/70/1/1-270x270-70-H8CHR7XD.jpg" style="display: inline;">
                                            </a>
                </div>
                <div class="s-info">
                    <div class="s-name">
                        新疆库尔勒香梨
                    </div>
                    <div class="s-unit">
                        ￥39.90/5斤
                    </div>
                    <div class="s-che" data-pid="25846" data-price="39.90"></div>
                </div>
                                <div class="pro_list_pos">
                    <span class="pro_list_span">立省10元</span>
                </div>
                            </li>
                                                <li class="pro_list" pid="25790" ppid="28992" type="normal" pno="2170911151">
                <div class="s-img">
                    <a href="/prodetail/index/25790" target="_blank">
                                                <img class="lazy" data-original="https://imgjd2.fruitday.com/images/product_pic/3330/1/1-270x270-3330-2HWXYTX7.jpg" alt="" src="https://imgjd2.fruitday.com/images/product_pic/3330/1/1-270x270-3330-2HWXYTX7.jpg" style="display: inline;">
                                            </a>
                </div>
                <div class="s-info">
                    <div class="s-name">
                        超大红玛瑙软籽石榴
                    </div>
                    <div class="s-unit">
                        ￥58.00/2个
                    </div>
                    <div class="s-che" data-pid="25790" data-price="58.00"></div>
                </div>
                            </li>
                        <li class="pro_list" pid="25755" ppid="28957" type="normal" pno="2170908110">
                <div class="s-img">
                    <a href="/prodetail/index/25755" target="_blank">
                                                <img class="lazy" data-original="https://imgjd2.fruitday.com/images/product_pic/3306/1/1-270x270-3306-H6DU2RTH.jpg" alt="" src="https://imgjd2.fruitday.com/images/product_pic/3306/1/1-270x270-3306-H6DU2RTH.jpg" style="display: inline;">
                                            </a>
                </div>
                <div class="s-info">
                    <div class="s-name">
                        百香果组合
                    </div>
                    <div class="s-unit">
                        ￥19.90/精选百香果3个
                    </div>
                    <div class="s-che" data-pid="25755" data-price="19.90"></div>
                </div>
                            </li>
                        <li class="pro_list" pid="24123" ppid="27332" type="normal" pno="2170629101">
                <div class="s-img">
                    <a href="/prodetail/index/24123" target="_blank">
                                                <img class="lazy" data-original="https://imgjd4.fruitday.com/images/product_pic/2538/1/1-270x270-2538-DDPBW9KU.jpg" alt="" src="https://imgjd4.fruitday.com/images/product_pic/2538/1/1-270x270-2538-DDPBW9KU.jpg" style="display: inline;">
                                            </a>
                </div>
                <div class="s-info">
                    <div class="s-name">
                        新疆西州蜜瓜
                    </div>
                    <div class="s-unit">
                        ￥49.90/2个
                    </div>
                    <div class="s-che" data-pid="24123" data-price="49.90"></div>
                </div>
                            </li>
                        <li class="pro_list" pid="20753" ppid="23995" type="normal" pno="2170327103">
                <div class="s-img">
                    <a href="/prodetail/index/20753" target="_blank">
                                                <img class="lazy" data-original="https://imgjd4.fruitday.com/images/product_pic/2208/1/1-270x270-2208-77C9HCC3.jpg" alt="" src="https://imgjd4.fruitday.com/images/product_pic/2208/1/1-270x270-2208-77C9HCC3.jpg" style="display: inline;">
                                            </a>
                </div>
                <div class="s-info">
                    <div class="s-name">
                        优选佳沛新西兰阳光金奇异果
                    </div>
                    <div class="s-unit">
                        ￥88.00/12个
                    </div>
                    <div class="s-che" data-pid="20753" data-price="88.00"></div>
                </div>
                            </li>
                        <li class="pro_list" pid="25570" ppid="28773" type="normal" pno="2170901141">
                <div class="s-img">
                    <a href="/prodetail/index/25570" target="_blank">
                                                <img class="lazy" data-original="https://imgjd4.fruitday.com/images/product_pic/3270/1/1-270x270-3270-7BDD6BWD.jpg" alt="" src="https://imgjd4.fruitday.com/images/product_pic/3270/1/1-270x270-3270-7BDD6BWD.jpg" style="display: inline;">
                                            </a>
                </div>
                <div class="s-info">
                    <div class="s-name">
                        黄金灵百香果
                    </div>
                    <div class="s-unit">
                        ￥29.90/6个
                    </div>
                    <div class="s-che" data-pid="25570" data-price="29.90"></div>
                </div>
                            </li>
                                </ul>
    </div>

</div>
  <div class="footer">
    <img src="../assets/bottom.png" alt="">
    <div class="copy-right">
      版权所有 ©2017鲜果电子商务有限公司  保留所有权利 | 京ICP备15042163
    </div>
  </div>
  </div>
</template>

<script>
import Banner from './Banner'
export default {
  data () {
    return {
      recomImg:[
        'https://imgjd3.fruitday.com/images/2017-08-21/daed8a6f5f15a6aa270c4f8b83699b27.jpg',
        'https://imgjd3.fruitday.com/images/2017-09-30/a34f760f4b4635ec16059c7b703c26ef.jpg',
        'https://imgjd3.fruitday.com/images/2017-10-10/b48bc6a1c75b8661751d68e431180781.jpg',
        'https://imgjd3.fruitday.com/images/2017-10-17/d38c1e53ec45bd89322f4a7d38db4b0e.jpg'
      ]
    }
  },
  components: {
    Banner
  },
  created() {
      // http://www.yiguo.com/Handler/InitLayOut?r=0.4733571856908836&_=1508901898801
    this.api.InitLayOut({
      r: 0.4733571856908836
    }).then(res => {
      console.log(res);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .hello{
    .list-recom{
      width: 1280px;
      margin: 10px auto 50px;
    }
    .fruit-kinds{
      position:relative;
      .til{
        width: 1280px;
        margin: 0 auto;
        border-top: 1px solid #ccc;
        padding: 10px 0;
        .more{
          float: right;
          color: #333;
        }
        .textPic{
          float: left;
        }
      }
      .good-list{
        width: 1280px;
        margin: 0 auto;
        ul{
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          li.pro_list{
            width: 20%;
            padding: 0 5px 5px;
            box-sizing: border-box;
            position: relative;
            .s-img{
              width: 100%;
              overflow: hidden;
              img{
                width: 100%;
                transition: transform .5s;
                &:hover{
                  transform: scale(1.1);
                }
              }
            }
            .s-info{
              font-size: 14px;
              line-height: 24px;
              text-align: left;
              text-indent: 5px;
              position: relative;
              .s-name{
                color: #555;
              }
              .s-unit{
                color: #999;
              }
              .s-che{
                width: 34px;
                height: 34px;
                background: url(http://www.fruitday.com/images/common/icons.png) no-repeat -517px -243px;
                position: absolute;
                top: 7px;
                right: 10px;
              }
            }
            .pro_list_pos{
              position: absolute;
              top: 0;
              left: 0;
              background: #FF5353;
              color: #fff;
              font-size: 14px;
            }
          }
        }
      }
    }
    .footer{
      padding: 20px 0 50px;
      .copy-right{
        color: #999;
      }
    }
    .clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
  }
</style>
