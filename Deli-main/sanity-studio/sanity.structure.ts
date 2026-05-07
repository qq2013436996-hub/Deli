import type {StructureResolver} from 'sanity/structure'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .schemaType('siteSettings')
        .child(S.documentTypeList('siteSettings').title('Site Settings')),
      S.listItem()
        .title('Products')
        .schemaType('product')
        .child(S.documentTypeList('product').title('All Products')),
      S.listItem()
        .title('Categories')
        .schemaType('productCategory')
        .child(S.documentTypeList('productCategory').title('All Categories')),
      S.listItem()
        .title('Inquiry')
        .schemaType('inquiry')
        .child(S.documentTypeList('inquiry').title('All Inquiries')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          !['siteSettings', 'product', 'productCategory', 'inquiry'].includes(
            item.getId() || '',
          ),
      ),
    ])
