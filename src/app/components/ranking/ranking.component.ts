import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit, AfterViewChecked{

  numOponent:number = 0;

  contrincantes:string[] = ["fas fa-user","fas fa-user-secret","fas fa-user-tie","fas fa-user-ninja","fas fa-user-astronaut"];
  nombres:string[] = ["pedro","pete","miyamoto","perez","jose"];

  vic:number[] = [.10,.20,.15,.30,.50];
  constructor( public service: DataService ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() :void{
    this.numOponent = this.service.numOponentS;

    if(this.service.estadoS == 3){
      this.numOponent++;
      this.service.numOponentS = this.numOponent;
      if(this.service.numOponentS < 5){
        
        for(let i = 0; i < this.numOponent; i++){
          document.getElementsByClassName("field-player")[i].setAttribute("style","visibility: hidden;");
          document.getElementsByName("enemy-symbol")[i].setAttribute("class", "fas fa-times");
        }
        this.service.estadoS = 1;
      }else{
        this.service.gano = "has ganado!!!";
        this.service.numOponentS = this.numOponent = 5;
      }

    }else if(this.service.estadoS == 2){
      this.service.numOponentS = this.numOponent;

      document.getElementsByClassName("field-player")[this.numOponent].setAttribute("style","visibility: visible;");
      document.getElementsByName("enemy-symbol")[this.numOponent].setAttribute("class","fas fa-user");

      if(this.numOponent > 0){
        this.numOponent--;
        this.service.numOponentS = this.numOponent;
      }
      this.service.estadoS = 1;
        
    }else{
      for(let i = 0; i < this.numOponent; i++){
        document.getElementsByClassName("field-player")[i].setAttribute("style","visibility: hidden;");
        document.getElementsByName("enemy-symbol")[i].setAttribute("class", "fas fa-times");
      }
      this.service.estadoS = 1;
      this.service.numOponentS = this.numOponent;
    }
  }
}
