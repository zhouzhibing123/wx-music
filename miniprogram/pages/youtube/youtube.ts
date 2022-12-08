// pages/youtube/youtube.ts
import { getVideos } from '../../services/modules/youtube/index'

Page({
  data: {
    query: {
      limit: 10,
      page: 0
    },
    videos: [] as any[]
  },
  onLoad() {
    this.requestVideos()
  },

  // 视频链接被点击
  onRecommedClick(e:any){
    const target = e.currentTarget
    wx.navigateTo({
      url : `/pages/detail/detail?id=${target.dataset.id}`
    })
  },

  // request videos 
  async requestVideos(){
    const query = this.data.query
    const res = await getVideos(query);
    res.data.data = res.data.data ? res.data.data : [];
    wx.stopPullDownRefresh()
    this.setData({
      videos : [...this.data.videos,...res.data.data]
    })
  },
  
  // watch user onPullDownRefresh	
  onPullDownRefresh(){
    this.setData({
      videos : []
    })
    this.data.query = { limit:10,page:0 }
    this.requestVideos()
  },

  // watch user onReachBottom
  onReachBottom(){
    this.data.query.page++
    this.requestVideos()
  }
})