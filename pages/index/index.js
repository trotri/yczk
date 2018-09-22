Page({
  data: {  
  },

  doCopy: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.text
    });
  }
});
