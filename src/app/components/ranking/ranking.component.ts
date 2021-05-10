import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit, AfterViewChecked{


  numOponent:number = 0;
  aux:string | null = '';
  estado:number = 0;
  contrincantes:string[] = ["fas fa-user","fas fa-user-secret","fas fa-user-tie","fas fa-user-ninja","fas fa-user-astronaut"];
  nombres:string[] = ["pedro","pete","miyamoto","perez","jose"];
  vic:number[] = [.10,.20,.15,.30,.50];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.aux = this.route.snapshot.paramMap.get('estado');
    this.estado = parseInt(this.aux!);
  }

  ngAfterViewChecked() :void{
    this.aux = this.route.snapshot.paramMap.get('estado');
    this.estado = parseInt(this.aux!);

    if(this.estado == 3){
      this.numOponent++;
    }else if(this.estado == 2 && this.numOponent > 0){
      this.numOponent--;
    }

    for(let i = 0; i < this.numOponent; i++){
      //document.getElementsByClassName("field")[i].setAttribute("style", "background-color: rgba(255, 0, 0, 0.5);;");
    }
  }

  combatir(): void{
    this.router.navigate(['/combate',this.numOponent]);
  }
}
