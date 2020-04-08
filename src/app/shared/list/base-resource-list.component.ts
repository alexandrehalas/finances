import { OnInit, Injector } from '@angular/core';
import { BaseResourceModel } from '../models/base-resource.model';
import { BaseResourceService } from '../services/base-resource.service';


export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];

  constructor(
    protected resourceModel: BaseResourceModel,
    protected resourceService: BaseResourceService<T>
  ) { }

  ngOnInit(): void {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources,
      error => alert('Erro ao carregar a lista')
    );
  }

  deleteCategory(resource: T) {

    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.resourceService.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter(element => element !== resource),
        () => alert('Erro ao tentar excluir!')
      );
    }

  }

}
