import weSwiper from '../../utils/weSwiper/weSwiper'

const data = {

  address: {
    markers: [{
      iconPath: "../../imgs/marker.png",
      id: 0,
      longitude: 116.3255113363,
      latitude: 39.9450198658,
      width: 50,
      height: 50
    }]
  },

  touchstart (e) {
    this.weswiper.touchstart(e)
  },

  touchmove (e) {
    this.weswiper.touchmove(e)
  },

  touchend (e) {
    this.weswiper.touchend(e)
  },

  onLoad () {
    const device = wx.getSystemInfoSync();

    wx.setNavigationBarTitle({ title: "云创制课" });

    new weSwiper({
      direction: 'vertical', // vertical、horizontal
      animationViewName: 'animationData',
      slideLength: 4,
      initialSlide: 0,
      timingFunction: 'ease-out',
      /**
       * swiper初始化后执行
       */
      onInit (weswiper) {
      },

      /**
       * 手指碰触slide时执行
       */
      onTouchStart (weswiper, event) {
      },

      /**
       * 手指碰触slide并且滑动时执行
       */
      onTouchMove (weswiper, event) {
      },

      /**
       * 手指离开slide时执行
       */
      onTouchEnd (weswiper, event) {
      },

      /**
       * slide达到过渡条件时执行
       */
      onSlideChangeStart (weswiper) {
      },

      /**
       * swiper从一个slide过渡到另一个slide结束时执行
       */
      onSlideChangeEnd (weswiper) {
      },

      /**
       * 过渡时触发
       */
      onTransitionStart (weswiper) {
      },

      /**
       * 过渡结束时执行
       */
      onTransitionEnd (weswiper) {
      },

      /**
       * 手指触碰swiper并且拖动slide时执行
       */
      onSlideMove (weswiper) {
      },

      /**
       * slide达到过渡条件 且规定了方向 向前（右、下）切换时执行
       */
      onSlideNextStart (weswiper) {
      },

      /**
       * slide达到过渡条件 且规定了方向 向前（右、下）切换结束时执行
       */
      onSlideNextEnd (weswiper) {
      },

      /**
       * slide达到过渡条件 且规定了方向 向前（左、上）切换时执行
       */
      onSlidePrevStart (swiper) {
      },

      /**
       * slide达到过渡条件 且规定了方向 向前（左、上）切换结束时执行
       */
      onSlidePrevEnd (weswiper) {
      }

    })

  }

};

Page(data)
