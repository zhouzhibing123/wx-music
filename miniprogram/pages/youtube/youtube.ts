// pages/youtube/youtube.ts
import XHRequestV1 from '../../services/index'

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

  onRecommedClick(e:any){
    const target = e.currentTarget
    wx.navigateTo({
      url : `/pages/detail/detail?id=${target.dataset.id}`
    })
  },

  // request videos 
  requestVideos(){
    const query = this.data.query
    XHRequestV1.get({
      url: '/top/mv',
      data: { ...this.data.query, offset: query.limit * query.page}
    }).then(res=>{
      (typeof res.data.data == 'undefined') && (res.data.data = [])
      wx.stopPullDownRefresh()
      this.setData({
        videos : [...this.data.videos,...res.data.data]
      })
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