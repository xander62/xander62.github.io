// pages/intelligence/intelligence.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/banner-1.png',
      '../../images/banner-2.png',
      '../../images/banner-3.png'
    ],
    navList: ['学习', '生活', '情感', '其他'],
    recommendList: [
      {
        type: '回答问题',
        typeImg: '../../images/write.png',
        title: '如果整天心情不好，真的会抑郁吗？',
        viewNum: '53',
        replyNum: '123',
        replyType: '回答',
        replyImg: '../../images/reply-img.png'
      },
      {
        type: '回答问题',
        typeImg: '../../images/write.png',
        title: '如果整天心情不好，真的会抑吗？我也不知哦，你是牛！',
        viewNum: '53',
        replyNum: '123',
        replyType: '回答',
        replyImg: '../../images/reply-img.png'
      },
      {
        type: '回答问题',
        typeImg: '../../images/write.png',
        title: '如果整天心情不好，真的会抑郁吗？',
        viewNum: '53',
        replyNum: '123',
        replyType: '回答',
        replyImg: '../../images/reply-img.png'
      }
    ]
  },

  //点击导航按钮
  activeNav(e) {
    //console.log(e);
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})