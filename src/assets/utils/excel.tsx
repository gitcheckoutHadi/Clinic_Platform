import * as XLSX from "xlsx";

export const ExcelDownload = (data: any[], tableName: string, t: any) => {
  // Process data to handle arrays in values and translate headers
  const processedData = data.map((row) => {
    const processedRow: Record<string, any> = {};
    for (const key in row) {
      if (key === "flex" || key === "minWidth") continue; // Skip these keys

      if (Array.isArray(row[key])) {
        // Convert array values to a comma-separated string
        processedRow[t(`table.${key}`)] = row[key].join(", ");
      } else {
        processedRow[t(`table.${key}`)] = t(row[key]);
      }
    }
    return processedRow;
  });

  // Prepare headers translation (excluding flex and minWidth)
  const translatedHeaders: Record<string, string> = Object.keys(data[0] || {})
    .filter((key) => key !== "flex" && key !== "minWidth")
    .reduce((acc, key) => {
      acc[t(`table.${key}`)] = key;
      return acc;
    }, {} as Record<string, string>);

  // Map data to translated headers
  const reorderedData = processedData.map((row) => {
    const translatedRow: Record<string, any> = {};
    Object.keys(translatedHeaders).forEach((header) => {
      translatedRow[header] = row[header] || "";
    });
    return translatedRow;
  });

  const workSheet = XLSX.utils.json_to_sheet(reorderedData);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, tableName);

  // Download the file
  XLSX.writeFile(workBook, `${tableName}.xlsx`);
};
