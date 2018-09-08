const app = getApp()

Page({
  data: {
    title: '云创制课',
    logo: '../../imgs/wechat_logo.jpeg', // ../../imgs/logo.png
    description: '云创制课由礼颂文化传媒（北京）有限公司于2015年成立，专注于教育信息化及智能交互技术的高科技企业，专业录课室出租；精品课录制；网络课件制作；视频加工包装；现场拍摄；宣传片拍摄等，为培训机构、名师、院校等单位提供一站式专业网校系统技术服务。',
    scope: {
      title: '主营业务',
      description: '标准课件制作、慕课微课录制、个性视频定制、录课室搭建等。'
    },
    address: {
      title: '公司地址',
      description: '北京市海淀区中关村南大街48号九龙商务中心B座412室。',
      markers: [{
        iconPath: "../../imgs/marker.png",
        id: 0,
        longitude: 116.3255113363,
        latitude: 39.9450198658,
        width: 50,
        height: 50
      }]
    },
    bus_line: {
      title: '乘车路线',
      description: '地铁站：国家图书馆站  4号线或9号线， B出口往北约100米。'
    },
    phone: {
      title: '预约电话',
      description: '13366631316'
    }
  },
  onLoad: function () {
  }
})
