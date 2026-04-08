<template>


  <div class="sections_wrapper">
    <v-lazy-image :src="center_balls" class="center_balls_stub" alt=""/>
    <div id="stub_page">
      <div class="stub_main_text">
        The site is temporarily unavailable <br> due to undergoing maintenance <br> and improvements.
      </div>
      <div class="stub_secondery_text">
        We're working to make your visit here even more enjoyable and convenient. We apologize for any inconvenience and thank you for your patience.
        Stay tuned for updates on our site and stay connected!
      </div>



    </div>


  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image';
import logoSrc from '@/assets/img/logo.svg';
import hamburger_menu from '@/assets/img/hamburger_menu.svg';
import top_balls from '@/assets/img/balls/top_balls.webp';
import center_balls from '@/assets/img/ball_anim.svg';
import bottom_blured_ball from '@/assets/img/balls/bootom_blured_ball.webp';
import ball4 from '@/assets/img/balls/ball4.webp';
import ball5 from '@/assets/img/balls/ball5.webp';
import ball6 from '@/assets/img/balls/ball6.webp';
import ball7 from '@/assets/img/balls/ball7.webp';
import button1 from '@/assets/img/button1.svg';
import logo_element from '@/assets/img/logo_element.svg';
import serv1 from '@/assets/img/services/serv1.webp';
import serv2 from '@/assets/img/services/serv2.webp';
import serv3 from '@/assets/img/services/serv3.webp';
import serv4 from '@/assets/img/services/serv4.webp';
import serv5 from '@/assets/img/services/serv5.webp';
import serv6 from '@/assets/img/services/serv6.webp';
import exp1 from '@/assets/img/sect4/exp1.webp';
import exp2 from '@/assets/img/sect4/exp2.webp';
import exp3 from '@/assets/img/sect4/exp3.webp';
import srvices from '@/assets/img/srvices.svg';
import pos1 from '@/assets/img/positions/pos1.webp';
import pos2 from '@/assets/img/positions/pos2.webp';
import pos3 from '@/assets/img/positions/pos3.webp';
import selector from '@/assets/img/selector.svg';
import close from '@/assets/img/close.svg';
import serv_mobile from '@/assets/img/srvices_mobile.svg';


export default {
  components: {
    VLazyImage,
  },
  data() {
    return {
      logoSrc,
      hamburger_menu,
      top_balls,
      center_balls,
      bottom_blured_ball,
      ball4,
      ball5,
      ball6,
      ball7,
      button1,
      logo_element,
      serv1,
      serv2,
      serv3,
      serv4,
      serv5,
      serv6,
      exp1,
      exp2,
      exp3,
      srvices,
      pos1,
      pos2,
      pos3,
      selector,
      close,
      serv_mobile,
    };
  },
  methods: {
    move_in_menu() {
      document.getElementById('menu_elements_mobile').classList.remove("move_out_menu");
      document.getElementById('menu_elements_mobile').classList.add("move_in_menu");
    },
    move_out_menu() {
      document.getElementById('menu_elements_mobile').classList.remove("move_in_menu");
      document.getElementById('menu_elements_mobile').classList.add("move_out_menu");
    },
    main_page() {
      document.getElementById('main_page').style.display = "block";
      document.getElementById('privacy').style.display = "none";
      document.getElementById('cokie_page').style.display = "none";
    },
    privacy() {
      document.getElementById('main_page').style.display = "none";
      document.getElementById('privacy').style.display = "block";
      document.getElementById('cokie_page').style.display = "none";
    },
    cookies() {
      document.getElementById('main_page').style.display = "none";
      document.getElementById('privacy').style.display = "none";
      document.getElementById('cokie_page').style.display = "block";
    },
  }
}
</script>

<style lang="stylus">
.logoSrc_img
  position: relative
  left: 0

.hamburger_menu
  position relative
  top 0
  left 0
  display none


.top_menu {
  position fixed
  top 0
  left 0
  width 100%
  height 88rem
  display flex
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.60);
  backdrop-filter: blur(8rem);
  z-index 999
}

.top_menu_content {
  width: 960rem;
  position: relative;
  top: 0;
  left: 0;
  height: 40rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu_elements
  position relative
  top 0
  left 0
  display flex
  width 551rem
  justify-content space-between
  align-items center
  cursor pointer

.menu_element:hover
  color #00C853



.menu_element
  position relative
  width auto
  height auto
  top 0
  left 0
  text-align center
  color rgba(33, 33, 33, 1)
  font-size: 14rem;
  font-weight 700
  font-style: normal;
  font-family: 'Inter', sans-serif;

#stub_page
  position relative
  top 0
  left 0
  width 100%
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  z-index 1000



.top_balls
  position absolute
  top 0
  left 50%
  transform translate(14%)
  width 321rem
  height 152rem
  aspect-ratio 321 / 152
  z-index 0

.center_balls_stub
  position: absolute;
  top: 70rem;
  left: 50%;
  transform: translate(-50%);
  width: 531rem;
  height: 450rem;
  aspect-ratio: 531 / 450;
  z-index: 0;

.bottom_blured_ball
  position: absolute;
  top: 876rem;
  left: 50%;
  transform: translate(-318%);
  width: 244rem;
  height: 258rem;
  aspect-ratio: 531 / 450;
  z-index: 0;

.ball4
  position: absolute;
  top: 902rem;
  left: 50%;
  transform: translate(189%);
  width: 111rem;
  height: 108rem;
  aspect-ratio: 111 / 108;
  z-index: 0;

.ball5
  position: absolute;
  top: 1163rem;
  left: 50%;
  transform: translate(61%);
  width: 320rem;
  height: 320rem;
  aspect-ratio: 1 / 1;
  z-index: 0;

.ball6
  position: absolute;
  top: 1477rem;
  left: 50%;
  transform: translate(-611%);
  width: 94rem;
  height: 94rem;
  aspect-ratio: 1 / 1;
  z-index: 5;

.ball7
  position: absolute;
  top: 1980rem;
  left: 50%;
  transform: translate(249%);
  width: 181rem;
  height: 188rem;
  aspect-ratio: 181 / 188;
  z-index: 5;

.bottom_center_balls
  position: absolute;
  top: 2695rem;
  left: 50%;
  transform: translate(-1%);
  width: auto;
  height: 419rem;
  aspect-ratio: 531 / 450;
  z-index: 1;

.sections_wrapper
  position absolute
  top 0
  left 0
  width 100%
  height auto

.section
  position relative
  top 0
  left 0
  width 100%

#section1
  height 602rem

#section2
  height 343rem

#section3
  height 567rem

#section4
  background-color rgba(0, 0, 0, 1)
  height 525rem

#section5
  height 304rem

#section6
  height 448rem

#section7
  z-index 5
  height 370rem

#section8
  background-color rgba(0, 0, 0, 1)
  height 260rem


.section_content
  position relative
  width 960rem
  left 50%
  transform translate(-50%)
  display flex
  flex-direction: column

.menu_elements_mobile
  display none


.h1
  color #121212
  font-size: 48rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-family: 'Inter', sans-serif;
  text-align left

.h3
  color #ffffff
  font-size: 14rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  font-family: 'Inter', sans-serif;
  text-align left
  width auto

.stub_main_text
  position relative
  height auto
  color #050000
  top 530rem
  font-size: 23rem;
  font-style: normal;
  font-weight: 900;
  line-height: 100%;
  font-family: 'Inter', sans-serif;
  text-align center
  max-width 500rem

.stub_secondery_text
  position relative
  color #1c1c1c
  margin-top 20rem
  top 550rem
  font-size: 23rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  font-family: 'Inter', sans-serif;
  text-align center
  max-width 500rem



.h3 a
  color #00C853
  font-size 14rem
  font-weight 700
  font-family: 'Inter', sans-serif;
  text-align left
  width auto
  transition all 0.5s linear

.h3 a:hover
  filter brightness(1.5)


.h4
  color #212121
  opacity .6
  font-size: 18rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  font-family: 'Inter', sans-serif;
  text-align left

.section1_margin
  margin-top: 214rem;

.section1_margin1
  margin-top: 18rem;

.section1_margin2
  margin-top: 14rem;

.section2_center
  text-align center

.section4_center
  text-align center
  margin-top 39rem

.section5_center
  text-align center
  margin-top 48rem

.section2_margin1
  margin-top 25rem
  margin-left 40rem

.button1
  position relative
  width 178rem
  height 48rem
  left 0
  top 0
  cursor pointer
  transition all .5s linear

.button1:hover
  filter brightness(1.5)

.section_2_text_content
  position relative
  top 0
  left 0
  display flex
  flex-direction row

.logo_element
  position relative
  top 32rem
  left 0
  width 168rem
  height 168rem

.brlarge
  display block
  margin-bottom 15rem

.section_3_text_content
  position: relative;
  display: flex;
  top: 45rem;
  height: 394rem;
  left: 74rem;
  flex-wrap: wrap;
  align-content: space-between;

.serv
  margin-right 75rem
  width 360rem
  height 98rem

.section_4_text_content
  position relative
  display: flex;
  top: 5rem;
  width 960rem
  flex-direction: row;
  justify-content: space-between;

.section4_row
  position relative
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30.5%;

.exp
  position relative
  width 61rem
  height 60rem
  top 0
  left 0
  margin-top 27rem

.s4header
  position relative
  top: 17rem;
  line-height: 150%;
  left 0
  text-align left
  font-size: 24rem;
  font-weight 900
  font-style: normal;
  font-family: 'Inter', sans-serif;
  color #ffffff

.s4text
  position relative
  top: 34rem;
  line-height: 150%;
  left 0
  text-align left
  font-size: 14rem;
  font-weight 400
  font-style: normal;
  font-family: 'Inter', sans-serif;
  color #ffffff
  opacity 0.6

.s5text
  position relative
  top: 34rem;
  line-height: 150%;
  left 0
  text-align left
  font-size: 14rem;
  font-weight 400
  font-style: normal;
  font-family: 'Inter', sans-serif;
  color: #212121;
  opacity: 0.6;

.srvices
  position relative
  width 960rem
  height 90rem
  top 65rem
  left 0

.positions_row
  position relative
  top 23rem
  left 0
  display flex
  justify-content: space-between;

.pos
  position relative
  width 294rem
  height 192rem
  top 10rem
  left 0
  cursor pointer
  transition all 0.5s linear

.pos:hover
  top 20rem
  margin-bottom -10rem

.divider
  position relative
  top 81rem
  width 100%
  height 1rem
  background-color #212121;
  opacity: 0.6;
  z-index 0

.section7_width
  max-width 700rem
  z-index 20

.section7_margin1
  margin-top 67rem

.footer_elements
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 67rem;

a
  text-decoration none
  width: fit-content


.selector
  position relative
  width 16rem
  height 16rem
  top 3rem
  cursor pointer

.move_in_menu
  animation move_in_menu 0.5s ease-in-out forwards

.move_out_menu
  animation move_out_menu 0.5s ease-in-out forwards

.ball_container
  position absolute
  width 100%


.srvices_mobile
  display none

#privacy
  position relative
  width 100%
  height fit-content
  top 100rem
  left 0
  margin-bottom 150rem

#cokie_page
  position relative
  width 100%
  height fit-content
  top 100rem
  left 0
  margin-bottom 150rem



@media (max-width: 960px)
  .hamburger_menu
    display block

  .center_balls_stub
    height 300rem
    width auto

  .menu_elements
    display none

  .menu_elements_mobile
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8rem);
    height: 443rem;
    width: 255rem;
    position: fixed;
    right: -255rem;
    top: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius 0 0 0 20rem

  .stub_main_text
    top 400rem
    font-size 21rem
    margin 15rem

  .stub_secondery_text
    top 420rem
    font-size 17rem
    margin 15rem

  .menu_element
    display block
    position relative
    width auto
    height auto
    top 0
    left 30rem
    text-align center
    color rgba(33, 33, 33, 1)
    font-size: 18rem;
    font-weight 700
    font-style: normal;
    margin-top 25rem
    margin-bottom 25rem
    font-family: 'Inter', sans-serif;

  .close
    position: absolute;
    top: 18rem;
    right: 10%;
    width: 24rem;
    height: 24rem;
    cursor pointer;

  .top_menu_content
    width 90%
    overflow hidden

  .section_content
    width 90%
    left 5%
    transform none
    overflow hidden;

  .top_balls
    display none

  .bottom_blured_ball
    display none

  .ball4
    display none

  .ball5
    display none

  .ball6
    display none

  .ball7
    display none

  .section_2_text_content
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;

  .section2_margin1
    margin-left 0
    margin-top 60rem
    text-align center

  .section
    height auto !important
    padding-bottom 50rem
    overflow hidden

  .section_3_text_content
    left 0
    height: fit-content;
    padding-bottom: 60rem;
  .section5_center
    margin-top 50rem

  .section_4_text_content
    flex-direction: column;
    width 100%
    height auto

  .section4_row
    flex-direction: row;
    width 100%
    height auto

  .mobile_row
    width 100%
    position relative
    margin-left 30rem
    height auto
    margin-bottom 30rem

  .bottom_center_balls
    display none

  .s4text
    margin-bottom: 25rem;

  .section4_center
    margin-bottom 30rem

  .srvices
    display none

  .srvices_mobile
    display block
    margin-top 60rem

  .positions_row
    flex-direction column
    align-items: center;

  .pos
    margin-bottom 30rem

  .pos:hover
    top 10rem
    margin-bottom 30rem

  .center_balls_mobile
    display block
    position absolute
    width 294rem
    height 262rem
    left 50%

  .h1
    font-size 36rem

  #section2
    margin-top 100rem

  #section7
    margin-top 50rem

  #section8
    height 290rem !important
    margin-bottom 0

  #section8 .section_content
    overflow visible

  .footer_elements
    flex-direction: column;
    align-items: center;
    height 150rem


  .section1_margin
    margin-top 160rem




  .br_desktop
    display none
  .section1_margin1
    max-width 320rem


</style>
