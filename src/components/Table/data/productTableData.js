const data = () => {
  return {
    columns: [
      { title: "id", dataIndex: "id", key: "center", sorter: (a, b) => a.id - b.id },
      { title: "barcode", dataIndex: "barcode", key: "center", sorter: (a, b) => a.barcode - b.barcode },
      { title: "product_brand", dataIndex: "product_brand", key: "center" },
      { title: "product_name", dataIndex: "product_name", key: "center", filterSearch: true, },
      { title: "product_quantity", dataIndex: "product_quantity", key: "center", sorter: (a, b) => a.product_quantity - b.product_quantity },
      { title: "price", dataIndex: "price", key: "center", sorter: (a, b) => a.price - b.price },
    ],
  };
};

export default data;
