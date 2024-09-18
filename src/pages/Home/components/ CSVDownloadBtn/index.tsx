import React from "react";
import styles from "./csv.module.css";

import CsvDownloader from "react-csv-downloader";

import { Button } from "antd";
import { Images } from "../../../../assets";

export interface CSVDownloadBtnProps {
  datas: {
    id: number | string;
    barcode: number;
    product_brand: string;
    product_name: string;
    product_quantity: number;
    price: number;
  }[];
  downloadLoading: boolean;
}

export const CSVDownloadBtn: React.FC<CSVDownloadBtnProps> = ({
  datas,
  downloadLoading,
}) => {
  const transformData = datas.map((item) => ({
    id: item.id.toString(),
    barcode: item.barcode.toString(),
    product_brand: item.product_brand,
    product_name: item.product_name,
    product_quantity: item.product_quantity.toString(),
    price: item.price.toString(),
  }));

  return (
    <CsvDownloader
      filename={`csv`}
      extension=".csv"
      separator=";"
      wrapColumnChar="'"
      datas={transformData}
      disabled={downloadLoading}
    >
      <Button
        type="primary"
        icon={<Images.Svg.Download />}
        className={`${styles.button} ${styles.dounloadButton}`}
      >
        Экспорт
      </Button>
    </CsvDownloader>
  );
};
