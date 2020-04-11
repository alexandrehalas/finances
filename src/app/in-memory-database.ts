import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDataBase implements InMemoryDbService {

  createDb() {

    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de contas da casa' },
      { id: 2, name: 'Saúde', description: 'Plano de saúde e remédios' },
      { id: 3, name: 'Lazer', description: 'Cinema, parque, praia, etc' },
      { id: 4, name: 'Salário', description: 'Recebimento de salário' },
      { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' }
    ];

    const entries: Entry[] = [
      {
        id: 1,
        name: 'Gás de Cozinha',
        description: 'description',
        type: 'expense',
        amount: '200,00',
        date: '05/01/2020',
        paid: true,
        categoryId: categories[0].id,
        category: categories[0]
      },
      {
        id: 2,
        name: 'Luz',
        description: 'description',
        type: 'expense',
        amount: '100,00',
        date: '05/01/2020',
        paid: true,
        categoryId: categories[0].id,
        category: categories[0]
      },
      {
        id: 3,
        name: 'Água',
        description: 'description',
        type: 'expense',
        amount: '70,00',
        date: '05/01/2020',
        paid: true,
        categoryId: categories[0].id,
        category: categories[0]
      },
      {
        id: 4,
        name: 'Projeto Angular',
        description: 'description',
        type: 'revenue',
        amount: '500,00',
        date: '20/01/2020',
        paid: true,
        categoryId: categories[4].id,
        category: categories[4]
      },
      {
        id: 5,
        name: 'Cinema',
        description: 'description',
        type: 'expense',
        amount: '30,00',
        date: '10/01/2020',
        paid: true,
        categoryId: categories[2].id,
        category: categories[2]
      },
      {
        id: 6,
        name: 'Salário',
        description: 'description',
        type: 'revenue',
        amount: '1000,00',
        date: '12/01/2020',
        paid: true,
        categoryId: categories[3].id,
        category: categories[3]
      },
      {
        id: 7,
        name: 'Remédios',
        description: 'description',
        type: 'expense',
        amount: '225,00',
        date: '15/01/2020',
        paid: true,
        categoryId: categories[1].id,
        category: categories[1]
      },
    ];

    return { categories, entries };
  }

}
