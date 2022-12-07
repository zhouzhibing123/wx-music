import XHRequestV1 from '../../index'

export async function getVideoDetail(id:number){
  return await XHRequestV1.get({
    url: `/mv/detail?mvid=${id}`
  })
}

export async function getVideoUrl(id:number){
  return await XHRequestV1.get({
    url: `/mv/url?id=${id}`
  })
}

export async function getRecommoned(id:number){
  return await XHRequestV1.get({
    url: `/related/allvideo?id=${id}`
  })
}