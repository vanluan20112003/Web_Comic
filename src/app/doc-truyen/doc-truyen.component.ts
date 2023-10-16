import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-truyen',
  templateUrl: './doc-truyen.component.html',
  styleUrls: ['./doc-truyen.component.css']
})
export class DocTruyenComponent {
  showConsoleMessage(): void {
    console.log("Nút đã được nhấn!");
  }
  changeBackgroundColor(): void {
    var color = (document.getElementById("colorSelect") as HTMLSelectElement).value;
    var colorbg = (document.getElementsByClassName("story-container")[0] as HTMLDivElement)
    colorbg.style.backgroundColor = color;
  }
  toggleDropdown(): void {
    var dropdown = ((document.getElementById("dropdown")) as HTMLDivElement);
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }
  comment:String[] = []
  abc():void{
    let a = (document.getElementById('chat-input') as HTMLInputElement).value
    this.comment.push(a)
  }
}
