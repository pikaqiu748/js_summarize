import { get } from './request'

const getBlogList = get('/api/blog/list')
const getBlogDetail = get('./api/blog/detail')

export {
  getBlogDetail,
  getBlogList
}
