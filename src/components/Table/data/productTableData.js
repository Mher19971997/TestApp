import { Images } from "../../../assets";

const data = () => {
  return {
    columns: [
      {
        title: "Баркод",
        dataIndex: "barcode",
        key: "center",
        sorter: (a, b) => a.barcode - b.barcode,
        sortIcon: (props) => <Images.Svg.TableIcon {...props}
         />
      }
      ,
      {
        title: "Предмет", dataIndex: "product_name", key: "center", filterSearch: true,
        sorter: (a, b) => a.product_name - b.product_name,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />

      },
      {
        title: "Артикул поставщика", dataIndex: "product_article", key: "center", sorter: (a, b) => a.id - b.id,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />

      },
      {
        title: "Размер", dataIndex: "product_brand", key: "center",
        sorter: (a, b) => a.product_brand - b.product_brand,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      },
      {
        title: "Доступно к заказу", dataIndex: "product_quantity", key: "center", sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />

      },
      {
        title: "Товары в пути (заказы и возвраты)", dataIndex: "price", key: "center", sorter: (a, b) => a.price - b.price,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      },
      {
        title: "Итого кол-во товара", dataIndex: "product_quantity", key: "center",
        sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      }, 
       {
        title: "Товары в пути (заказы и возвраты)", dataIndex: "price", key: "center", sorter: (a, b) => a.price - b.price,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      },
      {
        title: "Итого кол-во товара", dataIndex: "product_quantity", key: "center",
        sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      }, 
      {
        title: "Товары в пути (заказы и возвраты)", dataIndex: "price", key: "center", sorter: (a, b) => a.price - b.price,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      },
      {
        title: "Итого кол-во товара", dataIndex: "product_quantity", key: "center",
        sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      }, {
        title: "Товары в пути (заказы и возвраты)", dataIndex: "price", key: "center", sorter: (a, b) => a.price - b.price,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      },
      {
        title: "Итого кол-во товара", dataIndex: "product_quantity", key: "center",
        sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      }, {
        title: "Товары в пути (заказы и возвраты)", dataIndex: "price", key: "center", sorter: (a, b) => a.price - b.price,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      },
      {
        title: "Итого кол-во товара", dataIndex: "product_quantity", key: "center",
        sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      }, {
        title: "Товары в пути (заказы и возвраты)", dataIndex: "price", key: "center", sorter: (a, b) => a.price - b.price,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      },
      {
        title: "Итого кол-во товара", dataIndex: "product_quantity", key: "center",
        sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      }, 
      {
        title: "Итого кол-во товара", dataIndex: "product_quantity", key: "center",
        sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      }, {
        title: "Товары в пути (заказы и возвраты)", dataIndex: "price", key: "center", sorter: (a, b) => a.price - b.price,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      },
      {
        title: "Итого кол-во товара", dataIndex: "product_quantity", key: "center",
        sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      }, {
        title: "Товары в пути (заказы и возвраты)", dataIndex: "price", key: "center", sorter: (a, b) => a.price - b.price,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      },
      {
        title: "Итого кол-во товара", dataIndex: "product_quantity", key: "center",
        sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      }, 
      {
        title: "Итого кол-во товара", dataIndex: "product_quantity", key: "center",
        sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      }, {
        title: "Товары в пути (заказы и возвраты)", dataIndex: "price", key: "center", sorter: (a, b) => a.price - b.price,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      },
      {
        title: "Итого кол-во товара", dataIndex: "product_quantity", key: "center",
        sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      }, {
        title: "Товары в пути (заказы и возвраты)", dataIndex: "price", key: "center", sorter: (a, b) => a.price - b.price,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      },
      {
        title: "Итого кол-во товара", dataIndex: "product_quantity", key: "center",
        sorter: (a, b) => a.product_quantity - b.product_quantity,
        sortIcon: (props) => <Images.Svg.TableIcon {...props} />
      }, 
      
    ],
  };
};

export default data;
