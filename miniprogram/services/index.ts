import XHRequest from './request/index'

import config from './config/init.config.js'

const XHRequestV1 = new XHRequest({
  baseUrl: config.baseUrl
})

export default XHRequestV1