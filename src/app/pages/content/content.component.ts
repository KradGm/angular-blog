import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tempData } from 'src/app/data/tempData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  imgCover: string = ""
  @Input()
  contentTitle: string = ""
  @Input()
  contentDescription: string = "teeestando 12345"
  private id: string | null = "0"
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id: string | null) {
    const result = tempData.filter(
      article => article.id == id
    )[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.imgCover = result.img

  }
}
