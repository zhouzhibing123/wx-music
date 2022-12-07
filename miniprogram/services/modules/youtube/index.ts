import XHRequestV1 from '../../index'

export async function getVideos(query:any){
   return await XHRequestV1.get({
    url: '/top/mv',
    data: { ...query, offset: query.limit * query.page}
  });
}