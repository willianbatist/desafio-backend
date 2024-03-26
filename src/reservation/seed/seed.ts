import mongoose from 'mongoose';
import { ReservationSchema } from '../schemas/reservation.schema';
import * as fs from 'fs';

const filePath = 'src/reservation/seed/seed.json';

fs.readFile(filePath, 'utf8', async (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo JSON:', err);
    return;
  }

  const seedData = JSON.parse(data);
  console.log(seedData, 'seedData');

  const ReservationModel = mongoose.model('Reservation', ReservationSchema);

  try {
    await mongoose.connect(
      'mongodb://admin:adminpassword@localhost:27017/admin',
    );

    // Função para ajustar os dados antes da inserção
    const adjustData = (data: any) => {
      const adjustedData = data.map((item: any) => {
        // Remover chave $date e converter para Date
        item.checkIn = new Date(item.checkIn['$date']);
        item.checkOut = new Date(item.checkOut['$date']);

        // Remover chave $oid e converter para string
        item._id = item._id['$oid'];
        item.propertyId = item.property._id['$oid']; // Adicionando propertyId com o ID da propriedade

        // Ajustar residents
        item.residents = item.residents.map((resident: any) => ({
          ...resident,
          userId: resident.userId['$oid'],
        }));

        return item;
      });

      return adjustedData;
    };

    const adjustedData = adjustData(seedData);

    // Inserir os documentos na coleção reservation
    await ReservationModel.insertMany(adjustedData);
    console.log('Dados inseridos com sucesso na coleção reservation');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } finally {
    // Fechar a conexão com o banco de dados
    await mongoose.connection.close();
    console.log('Conexão com o banco de dados fechada');
  }
});
