import pdf from 'html-pdf';
import fs from 'fs';
import Client from '../models/Client';
import Manager from '../models/Manager';
// import pdfService from '../services/pdfService.js';

class PdfService {
  generatePDF(pdfTemplate, filePath) {
    try {
      return new Promise((resolve) => {
        pdf.create(pdfTemplate, {}).toFile(filePath, (err, result) => {
          // if (err) {
          //   reject('Deu erro');
          //   return;
          // }
          resolve(result.filename);
        });
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async index(managerId) {
    try {
      const client = await Client.findAll({
        where: {
          manager_id: managerId,
        },
        attributes: ['name', 'email', 'age', 'net_worth'],
        raw: true,
      });

      const manager = await Manager.findOne({
        where: {
          id: managerId,
        },
        attributes: ['name', 'email'],
        raw: true,
      });

      const clientHtml = client.reduce((html, current) => {
        html += `
                  <tr>
                      <td>${current.name}</td>
                      <td>${current.email}</td>
                      <td>${current.age}</td>
                      <td>${current.net_worth.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                  </tr>
                `;

        return html;
      }, '');

      let pdfTemplate = fs.readFileSync('html/header.html', 'UTF-8');

      pdfTemplate = pdfTemplate.replace('{{ clientHtml }}', clientHtml);
      pdfTemplate = pdfTemplate.replace('{{ manager }}', manager.name);
      const imageName = `/pdf-${manager.email}.pdf`;
      const filePath = `./uploads${imageName}`;

      await this.generatePDF(pdfTemplate, filePath);

      return `http://localhost:3000${imageName}`;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new PdfService();
