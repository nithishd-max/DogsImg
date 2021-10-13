import { Component, OnInit } from '@angular/core';
import { DogsService } from './dogs.service';


@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit{

  public cards= [] as any;
  public allBreeds: Array<any> = [];
  selectedValue: String="";
  breed: String="";
  
  constructor(public dogsService: DogsService) {}
  
  ngOnInit(){

    this.getRandomPics();
  }

  getRandomPics(){
    this.cards=[];
    this.dogsService.getRandomPics().subscribe(
      data=>{
        const randomPics = data.json().message;
        console.log(data.json().message);
        for (var i = 1; i < randomPics.length; i++) {

          for (let picture of randomPics) {

            this.cards.push({

              id: i++,

              pic: picture,

              likes: 0

            });

          }

        }
      },
      error=>{
        console.log("error");
      }
    );
  }

  getAllBreeds()
  {
    this.dogsService.getAllBreeds().subscribe(
      data=>{
        var jsonStr= JSON.stringify(data.json().message);
        var jsonParsed =JSON.parse(jsonStr);

        this.allBreeds= Object.keys(jsonParsed);
        console.log(this.allBreeds);
      },
      error=>{
        console.log("error");
      }
    );
  }

  


  selectedBreed(selectedBreed: string){
    console.log(selectedBreed);
    this.getRandomPicsForBreed(selectedBreed);
  }

 

  getRandomPicsForBreed(breed:string){
    this.cards=[];
    this.dogsService.getRandomPicsForBreed(breed).subscribe(
      data=>{
        const randomPics = data.json().message;
        
        for (var i = 1; i < randomPics.length; i++) {

          for (let pictureLink of randomPics) {

            this.cards.push({

              id: i++,

              pic: pictureLink,

              likes: 0

            });

          }

        }
      },
      error=>{
        console.log("error");
      }
    );
  }

  

  public count(card:any) {
    for (var x in this.cards) {
      if (this.cards[x] === card) {
      this.cards[x].likes = this.cards[x].likes + 1;
      console.log(this.cards[x]);
     }
    }
  }
  
}
