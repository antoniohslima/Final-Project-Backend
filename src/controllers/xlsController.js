import xlsx from 'xlsx';
import path from 'path';
import xlsService from '../service/xlsService';

const exportManagersToExcel = (manager, workSheetColumnNames, workSheetName, filePath) => {
  const data = manager.map((manager) => [manager.name, manager.client.name, manager.client.email, manager.client.age, manager.client.net_worth.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })]);
  const workBook = xlsx.utils.book_new();
  const workSheetData = [
    workSheetColumnNames,
    ...data,
  ];
  const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
  xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
  xlsx.writeFile(workBook, path.resolve(filePath));

  return true;
};

const index = async (req, res) => {
  const manager = await xlsService.index(req.managerId);

  const workSheetColumnNames = ['Manager', 'Cliente', 'E-mail', 'Idade', 'Patrimônio'];
  const workSheetName = 'Managers';
  const imageName = `/xls-${req.managerId}.xls`;
  const filePath = `./uploads${imageName}`;

  const response = exportManagersToExcel(manager, workSheetColumnNames, workSheetName, filePath);
  const url = `http://localhost:3000${imageName}`;

  return res.json({ response, url });
};

export default {
  index,
};
