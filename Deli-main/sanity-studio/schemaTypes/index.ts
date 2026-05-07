import {inquiry} from './documents/inquiry'
import {product} from './documents/product'
import {productCategory} from './documents/productCategory'
import {siteSettings} from './documents/siteSettings'
import {productDetailTab} from './objects/productDetailTab'
import {seo} from './objects/seo'
import {specification} from './objects/specification'

export const schemaTypes = [
  siteSettings,
  productCategory,
  product,
  inquiry,
  specification,
  productDetailTab,
  seo,
]
