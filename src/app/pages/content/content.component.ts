import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string="https://i.abcnewsfe.com/a/fd751005-a167-478b-bba2-ccaf61e26bf6/iron-man-rdjr-1-ht-thg-231204_1701712078177_hpMain_16x9.jpg?w=992"
  contentTitle:string="Titulo da noticia"
  contentDescription:string="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ratione dolor alias. A, doloribus debitis! Quaerat, minima doloribus! Expedita similique saepe molestiae repudiandae. Sapiente voluptates quos quae autem suscipit vero!"
  private id:string | null = "0" 

  constructor(
    private route:ActivatedRoute
  ){ }

  ngOnInit():void {
    this.route.paramMap.subscribe( value =>
       this.id = value.get("id")
    )
    
    this.setValuesToComponent(this.id)

  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id === id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photo
  }

}
