// pages/detail/detail.ts
import { getVideoDetail,getVideoUrl,getRecommoned } from '../../services/modules/detail/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    resourcessId: 14579633,
    videoUrl: '',
    detailInfo: {},
    recommonedList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option:any) {
    this.data.resourcessId = Number(option.id)
    // 根据ID请求详情
   this.getDetailData()
  },

  // 获取页面信息
  async getDetailData(){
    const data = await getVideoDetail(this.data.resourcessId)
    const videoUrl = await getVideoUrl(this.data.resourcessId)
    const recommonedList = await getRecommoned(this.data.resourcessId)
    this.setData({
      videoUrl: videoUrl.data.data.url,
      detailInfo: data.data.data,
      recommonedList: recommonedList.data.data
    })
  }
})