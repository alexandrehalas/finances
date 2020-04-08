import { Component, Inject, Injector, OnInit} from '@angular/core';
import { Validators } from '@angular/forms';

import { Category } from '../../categories/shared/category.model';
import { CategoryService } from '../../categories/shared/category.service';

import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entry.service';

import { BaseResourceFormComponent } from 'src/app/shared/forms/base-resource-form.component';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent extends BaseResourceFormComponent<Entry> implements OnInit {

  categories: Array<Category>;

  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ','
  };

  ptBR = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
    monthNames: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: [
      'Jan', 'Fev', 'Mar', 'Mai', 'Jun',
      'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ],
    today: 'Hoje',
    clear: 'Limpar'
  };

  constructor(
    protected injector: Injector,
    protected entryService: EntryService,
    protected categoryService: CategoryService,
    ) {
      super(injector, new Entry(), entryService, Entry.fromJson);
     }

  ngOnInit(): void {
    this.loadCategories();
    super.ngOnInit();
  }

  private loadCategories() {
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories
    );
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null],
      type: ['expense', [Validators.required]],
      amount: [null, [Validators.required]],
      date: [null, [Validators.required]],
      paid: [false, [Validators.required]],
      categoryId: [null, [Validators.required]]
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de novo Lançamento';
  }

  protected editionPageTitle() {
    const entryName = this.resource.name;
    return `Editando Lançamento: ${entryName}`;
  }

  get typeOptions(): Array<any> {
    return Entry.types;
  }

}
