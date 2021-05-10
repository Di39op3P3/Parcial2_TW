import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-combate',
  templateUrl: './combate.component.html',
  styleUrls: ['./combate.component.css']
})
export class CombateComponent implements OnInit, AfterViewChecked {

  auxR:string | null = '';
  numOponent:number = 0;
  estado:number = 1;
  aux:String[] = ["Elija su movimiento","Tijeras","Piedra","Papel"];
  movimientos:number[] = [0,0];
  contrincante:string[] = ["fas fa-user","fas fa-user-secret","fas fa-user-tie","fas fa-user-ninja","fas fa-user-astronaut"];
  eleccion:string[] = ["far fa-question-circle" ,"fas fa-hand-scissors", "fas fa-hand-rock", "fas fa-hand-paper"];
  nombres:string[] = ["pedro","pete","miyamoto","perez","jose"];
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.auxR = this.route.snapshot.paramMap.get('numOponent');
    this.numOponent = parseInt(this.auxR!);
  }

  ngAfterViewChecked(): void {
    this.auxR = this.route.snapshot.paramMap.get('numOponent');
    this.numOponent = parseInt(this.auxR!);
  }

  partida(): void{
    if(this.movimientos[0] != 0){
      this.movimientos[1] = Math.floor(Math.random() * (3 - 1 + 1) + 1);

      if(this.movimientos[0] == this.movimientos[1])
      {
        this.estado = 4;
        this.movimientos[0] = 0;
        return;
      }
      else if(
        ((this.movimientos[0] == 1) && (this.movimientos[1] == 2))
        || ((this.movimientos[0] == 2) && (this.movimientos[1] == 3))
        || ((this.movimientos[0] == 3) && (this.movimientos[1] == 1))
        )
      {
        this.estado = 2;
      }
      else if(
        ((this.movimientos[0] == 1) && (this.movimientos[1] == 3))
        || ((this.movimientos[0] == 2) && (this.movimientos[1] == 1))
        || ((this.movimientos[0] == 3) && (this.movimientos[1] == 2))
        )
      {
        this.estado = 3;
      }

      document.getElementsByName('mano')[0].setAttribute("style", "visibility: hidden;");
    }else{
      document.getElementsByClassName("ayuda")[0].innerHTML = "Debes elegir un movimiento!!!";
      setTimeout(function (){
        document.getElementsByClassName("ayuda")[0].innerHTML = "";}, 3000);
    }
  }

  AgregarResultado(): void{
    this.router.navigate(['/ranking',this.estado]);
  }
}
