import { IData, RenderEditableCell } from "./types";

export const createTableData = (
    filteredData: IData[],
    renderEditableCell: RenderEditableCell 
  ) => {
    return filteredData.map(item => ({
      id: renderEditableCell(item, "id"),
      barcode: renderEditableCell(item, "barcode"),
      product_brand: renderEditableCell(item, "product_brand"),
      product_name: renderEditableCell(item, "product_name"),
      product_quantity: renderEditableCell(item, "product_quantity"),
      price: renderEditableCell(item, "price"),
      product_article: renderEditableCell(item, "product_article"),
      product_size: renderEditableCell(item, "product_size"),
      product_quantity1: renderEditableCell(item, "product_quantity1"),
      product_quantity2: renderEditableCell(item, "product_quantity2"),
      product_quantity3: renderEditableCell(item, "product_quantity3"),
      product_quantity4: renderEditableCell(item, "product_quantity4")
    }));
  };
   