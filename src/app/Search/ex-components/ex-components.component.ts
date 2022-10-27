import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-components',
  templateUrl: './ex-components.component.html',
  styleUrls: ['./ex-components.component.css']
})
export class ExComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageUrls=[
    "https://media.istockphoto.com/photos/passengers-commercial-airplane-flying-above-clouds-picture-id955952680?k=20&m=955952680&s=612x612&w=0&h=ySHtI28Vrvz4vj2q7T8ENJQakH_7wSHuhNLLiwr06EY="
    ,"https://i.pinimg.com/originals/ec/05/db/ec05dbb5deb17a06d30ee83f7b98d3f5.jpg"
    ,"https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    ,"https://media.istockphoto.com/photos/passengers-commercial-airplane-flying-above-clouds-picture-id955952680?k=20&m=955952680&s=612x612&w=0&h=ySHtI28Vrvz4vj2q7T8ENJQakH_7wSHuhNLLiwr06EY="
    ,"https://i.pinimg.com/originals/ec/05/db/ec05dbb5deb17a06d30ee83f7b98d3f5.jpg"
    ,"https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  ]

}
